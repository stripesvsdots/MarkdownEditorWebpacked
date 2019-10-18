class Item {
	constructor() {
		if (new.target === Item) {
		  throw new TypeError("Cannot construct Item instances directly");
		}
	}
	export(exporter) {
		throw new Error('You have to implement the method!')
	}
}

class MarkdownDocumentItem extends Item {
	constructor(subItems) {
		super();
		this.subItems = subItems;
	}
	export(exporter) {
		exporter.beginExportMarkdownDocumentItem(this);
		this.subItems.forEach(item => {
			item.export(exporter);	
		})
		exporter.endExportMarkdownDocumentItem(this);
	}

}

class SectionItem extends MarkdownDocumentItem {
	constructor(titleItem, level, subItems) {
		super();
		this.titleItem = titleItem;
		this.level = level;
		this.subItems = subItems;
	}
	export(exporter) {
		exporter.beginExportSectionItem(this);
		this.titleItem.export(exporter);
		this.subItems.forEach(item => {
			item.export(exporter);	
		})
		exporter.endExportSectionItem(this);
	}		
}

class ParagraphItem extends Item {
	constructor(subItems) {
		super();
		this.subItems = subItems;
	}
	export(exporter) {
		exporter.beginExportParagraphItem(this);
		this.subItems.forEach(item => {
			item.export(exporter);
		});
		exporter.endExportParagraphItem(this);
	}		
}

class TitleItem extends Item {
	constructor(text, level) {
		super();
		this.text = text;
		this.level = level;
	}
	export(exporter) {
		exporter.exportTitleItem(this);
	}
}

class TextItem extends Item {
	constructor() {
		super();
		if (new.target === TextItem) {
		  throw new TypeError("Cannot construct TextItem instances directly");
		}
	  }
}

class PlainTextItem extends TextItem {
	constructor(text) {
		super();
		this.text = text;
	}
	export(exporter) {
		exporter.exportPlainTextItem(this);
	}	
}

class BoldTextItem extends TextItem {
	constructor(text) {
		super();
		this.text = text;
	}
	export(exporter) {
		exporter.exportBoldTextItem(this);	
	}	
}

class NewlineItem extends TextItem {
	constructor() {
		super();
	}
	export(exporter) {
		exporter.exportNewLineItem(this);
	}
}

export { MarkdownDocumentItem, SectionItem, ParagraphItem, TitleItem, PlainTextItem, BoldTextItem, NewlineItem };
