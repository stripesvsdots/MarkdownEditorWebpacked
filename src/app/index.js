import {Parser} from './parser';
import {HtmlExporter, WikimediaExporter} from './export';

function exportTo(root, exporter) {
	root.export(exporter);
	document.querySelector('#output-area').innerHTML = exporter.getOutput();	
}
document.getElementById("input-area").onkeyup = function translateTo() {
	const selectElement = document.getElementById('outputs');
	let input = document.querySelector('#input-area').value;
	let parser = new Parser;
	let tokens = parser.tokenize(input);
	let cursor = {index: 0};
	let root = parser.parseMarkdownDocumentItem(tokens, cursor);
	console.log(root);
	if (root == undefined) {
		document.querySelector('#output-area').innerHTML = "Incomplete markdown format";
	} else {
		let option = selectElement.value;
		if (option == "html") {
			exportTo(root, new HtmlExporter);
		} else if (option == "Wikimedia") {
			exportTo(root, new WikimediaExporter);
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




