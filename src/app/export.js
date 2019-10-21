class Exporter {
	exportMarkdownDocumentItem(item) {

	}
	exportSectionItem(item) {

	}
	exportParagraphItem(item) {

	}
	exportTitleItem(item) {

	}
	exportTextItem(item) {

	}
	exportPlainTextItem(item) {

	}
	exportBoldTextItem(item) {

	}
	exportNewLineItem(item) {

	}
}
export class HtmlExporter extends Exporter {
	constructor() {
		super();
		this.output = '';
	}

	beginExportMarkdownDocumentItem(item) {
		this.output += "<html>";	
	}
	endExportMarkdownDocumentItem(item) {
		this.output += "</html>";
	}
	beginExportSectionItem(item) {
		this.output += "<section>";
	}
	endExportSectionItem(item) {
		this.output += "</section>"	
	}
	beginExportParagraphItem(item) {
		this.output += "<p>"	
	}
	endExportParagraphItem(item) {
		this.output += "</p>"	
	}
	exportTitleItem(item) {
		this.output += "<h" + item.level + ">"+ item.text + "</h" + item.level + ">";
	}
	exportPlainTextItem(item) {
		this.output += item.text;
	}
	exportBoldTextItem(item) {
		this.output += "<strong>" + item.text + "</strong>";
	}
	exportNewLineItem(item) {
	//	return '\n' + '\t'.repeat(indent);
		this.output +=  "\n";
	}
	getOutput() {
		return this.output;
	}
}

export class WikimediaExporter extends Exporter {
	constructor() {
		super();
		this.output = '';
	}

	beginExportMarkdownDocumentItem(item) {
		
	}
	endExportMarkdownDocumentItem(item) {
		
	}
	beginExportSectionItem(item) {
		
	}
	endExportSectionItem(item) {
		
	}
	beginExportParagraphItem(item) {
		
	}
	endExportParagraphItem(item) {
			
	}
	exportTitleItem(item) {
		this.output += "=".repeat(item.level) + item.text + "=".repeat(item.level);
	}
	exportPlainTextItem(item) {
		this.output += item.text;
	}
	exportBoldTextItem(item) {
		this.output += "'''" + item.text + "'''";
	}
	exportNewLineItem(item) {
		this.output +=  "\n";
	}
	getOutput() {
		return this.output;
	}
}

