import {Parser} from './parser';
import {HtmlExporter, WikimediaExporter} from './export';

document.getElementById("input-area").onchange = function translateTo() {
	const selectElement = document.getElementById('outputs');
	let input = document.querySelector('#input-area').value;
	let parser = new Parser;
	let tokens = parser.tokenize(input);
	let cursor = {index: 0};
	let root = parser.parseMarkdownDocumentItem(tokens, cursor);
	console.log(root);
	let htmlExporter = new HtmlExporter;
	let wikimediaExporter =  new WikimediaExporter;
	if (root == undefined) {
		document.querySelector('#output-area').innerHTML = "Incomplete markdown format";
	} else {
		root.export(htmlExporter);
		let option = selectElement.value;
		if (option == "html") {
			document.querySelector('#output-area').innerHTML = htmlExporter.getOutput();			
		} else if (option == "Wikimedia") {
			document.querySelector('#output-area').innerHTML = wikimediaExporter.getOutput();
		} else {
			alert("Please pick an option");
		}	
	}	
}

export function eraseText() {
	document.getElementById("output-area").value = "";
}

document.getElementById("download-button").onclick = function() {
	let content = document.getElementById('output-area').value;
	window.open("data:application/text," + encodeURIComponent(content), "_self");
}



//document.getElementById("clear-button").onclick = eraseText();




