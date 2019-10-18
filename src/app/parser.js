import { MarkdownDocumentItem, SectionItem, ParagraphItem, TitleItem, PlainTextItem, BoldTextItem, NewlineItem } from './document';

const HashToken = 0;
const TextToken = 1;
const BoldToken = 2;
const NewlineToken = 3;
let str1 = "0\n3**5**\n7#"
let str2 = "# Section 1\nSome **(bold) introduction** to Section 1.\n## Section 1.1\nA text describing Section 1.1Some conclusion to Section 1.\n# Section 2\nAn introduction to Section 2.\nSome conclusion to Section 2."

class Parser {
	tokenize(text) {
		let tokens = [];
		let tokenValue = '';

		for (let i = 0; i < text.length; i++) {
			if (text[i] == "#") {
        		if (tokenValue.length > 0) {
           			tokens.push({type : TextToken, value : tokenValue});
           			tokenValue = "";
         		}
        		tokens.push({type : HashToken});
      		} else if (text[i] == "*" & text[i+1] == "*") {
          		if (tokenValue.length > 0) {
              		tokens.push({type : TextToken, value : tokenValue});
              		tokenValue = "";
          		}
          		tokens.push({type : BoldToken});
          		i++;
      		} else if (text[i] == "\n") {
          		if (tokenValue.length > 0) {
            		tokens.push({type : TextToken, value : tokenValue});
            		tokenValue = "";
         		}
          		tokens.push({type : NewlineToken});
      		} else {
        		tokenValue += text[i];
      		}
		}
		//handling the end of input case when we have text acumulated 
		if (tokenValue.length > 0) {
			tokens.push({type : TextToken, value : tokenValue});
		}
    	return tokens;
	}

	parseTitleItem(tokens, cursor) {
		let hashLevel = 0;
		for (let i = cursor.index; i < tokens.length; i++) { 
			if (tokens[i].type == 0) {
				hashLevel++;
			} else {
				break;
			}
        } 

		let newLineIndex = cursor.index + hashLevel + 1;
		if (hashLevel > 0 && tokens.length > newLineIndex) {
			if (tokens[cursor.index + hashLevel].type == TextToken && tokens[newLineIndex].type == NewlineToken) { 
				let value = tokens[cursor.index + hashLevel].value;
				cursor.index += hashLevel + 2;
				return new TitleItem(value, hashLevel);
			}
		}
	}

	parsePlainTextItem(tokens, cursor) {
		if (cursor.index >= tokens.length) {
			return undefined;
		} 
		if (tokens[cursor.index].type == TextToken) {
			cursor.index++;
			return new PlainTextItem(tokens[cursor.index-1].value);
		}
	}

	parseBoldTextItem(tokens, cursor) {
		if (cursor.index + 2 >= tokens.length) {
			return undefined;
		} 
		if (tokens[cursor.index].type == BoldToken && tokens[cursor.index+1].type == TextToken && tokens[cursor.index+2].type == BoldToken) {
			cursor.index += 3;
			return new BoldTextItem(tokens[cursor.index-2].value);
		}
	}

	parseNewLineItem(tokens, cursor) {
		if (cursor.index >= tokens.length) {
			return undefined;
		} 
		if (tokens[cursor.index].type == NewlineToken) {
			cursor.index++;
			return new NewlineItem();
		}
	}
	
	parseParagraphSubitem(tokens, cursor) {
		let plainTextItem = this.parsePlainTextItem(tokens, cursor);
		if (plainTextItem != undefined) {
			return plainTextItem;
		}
		let boldTextItem = this.parseBoldTextItem(tokens, cursor);
		if (boldTextItem != undefined) {
			return boldTextItem;
		}
		let newLineItem = this.parseNewLineItem(tokens, cursor);
		if (newLineItem != undefined) {
			return newLineItem;
		}
	}

	parseParagraphItem(tokens, cursor) {
		let items = [];
		while (true) {
			let item = this.parseParagraphSubitem(tokens, cursor);
			if (item != undefined) {
				items.push(item);
			} else {
				break;
			}
		}
		if (items.length > 0) {
			return new ParagraphItem(items);
		}
	}

	parseSectionItem(tokens, cursor, minLevel) {
		let oldCursor = cursor.index; // make an actual copy of the index (oldcursor = cursor would not work because of reference semantics)
		let titleItem = this.parseTitleItem(tokens, cursor);
		if (titleItem == undefined) {
			return undefined;
		}
		if (titleItem.level > minLevel) {
			let items = [];
			while (true) {
				let item = this.parseSectionSubItem(tokens, cursor, titleItem.level);
				if (item != undefined) {
					items.push(item);
				} else {
					break;
				}
			}
			if (items.length > 0) {
				return new SectionItem(titleItem, titleItem.level, items);
			} else {
				return titleItem;
			}
		}
		cursor.index = oldCursor;
	}

	parseSectionSubItem(tokens, cursor, minLevel) {
		let paragraphItem = this.parseParagraphItem(tokens, cursor);
		if (paragraphItem != undefined) {
			return paragraphItem;
		}
		let sectionItem = this.parseSectionItem(tokens, cursor, minLevel);
		if (sectionItem != undefined) {
			return sectionItem;
		}
	}

	parseDocumentSubitem(tokens, cursor) {
		let sectionItem = this.parseSectionItem(tokens, cursor, 0);
		if (sectionItem != undefined) {
			return sectionItem;
		}
		let paragraphItem = this.parseParagraphItem(tokens, cursor);
		if (paragraphItem != undefined) {
			return paragraphItem;
		}	
	}

	parseMarkdownDocumentItem(tokens, cursor) {
		let items = [];
		while (true) {
			let item = this.parseDocumentSubitem(tokens, cursor);
			if (item != undefined) {
				items.push(item);
			} else {
				break;
			}
		}
		if (items.length > 0) {
			return new MarkdownDocumentItem(items);
		}
	}
}

export {Parser};


/*
 # Section 1\nSome **(bold) introduction** to Section 1.\n## Section 1.1\nA text describing Section 1.1\nSome conclusion to Section 1.\n# Section 2\nAn introduction to Section 2.\nSome conclusion to Section 2. 
 HASH TEXT NEWLINE BOLD TEXT BOLD TEXT NEWLINE HASH HASH TEXT NEWLINE TEXT NEWLINE TEXT NEWLINE HASH TEXT NEWLINE TEXT NEWLINE TEXT

markup_document_item
	[document_subitem]

document_subitem
	section_item
	paragraph_item

section_item 
	title_item [section_subitem]

title_item
	HASH TEXT NEWLINE

section_subitem
	paragraph_item
	section_item

paragraph_item
	[paragraph_subitem]

paragraph_subitem
	plaintext_item
	boldtext_item
	newline_item

plaintext_item
	TEXT

boldtext_item
	BOLD TEXT BOLD

newline_item
	NL
 */