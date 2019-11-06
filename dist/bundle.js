/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/document.js":
/*!*****************************!*\
  !*** ./src/app/document.js ***!
  \*****************************/
/*! exports provided: MarkdownDocumentItem, SectionItem, ParagraphItem, TitleItem, PlainTextItem, BoldTextItem, NewlineItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownDocumentItem", function() { return MarkdownDocumentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionItem", function() { return SectionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphItem", function() { return ParagraphItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleItem", function() { return TitleItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlainTextItem", function() { return PlainTextItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoldTextItem", function() { return BoldTextItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewlineItem", function() { return NewlineItem; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Item =
/*#__PURE__*/
function () {
  function Item() {
    _classCallCheck(this, Item);

    if ((this instanceof Item ? this.constructor : void 0) === Item) {
      throw new TypeError("Cannot construct Item instances directly");
    }
  }

  _createClass(Item, [{
    key: "export",
    value: function _export(exporter) {
      throw new Error('You have to implement the method!');
    }
  }]);

  return Item;
}();

var MarkdownDocumentItem =
/*#__PURE__*/
function (_Item) {
  _inherits(MarkdownDocumentItem, _Item);

  function MarkdownDocumentItem(subItems) {
    var _this;

    _classCallCheck(this, MarkdownDocumentItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MarkdownDocumentItem).call(this));
    _this.subItems = subItems;
    return _this;
  }

  _createClass(MarkdownDocumentItem, [{
    key: "export",
    value: function _export(exporter) {
      exporter.beginExportMarkdownDocumentItem(this);
      this.subItems.forEach(function (item) {
        item["export"](exporter);
      });
      exporter.endExportMarkdownDocumentItem(this);
    }
  }]);

  return MarkdownDocumentItem;
}(Item);

var SectionItem =
/*#__PURE__*/
function (_MarkdownDocumentItem) {
  _inherits(SectionItem, _MarkdownDocumentItem);

  function SectionItem(titleItem, level, subItems) {
    var _this2;

    _classCallCheck(this, SectionItem);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SectionItem).call(this));
    _this2.titleItem = titleItem;
    _this2.level = level;
    _this2.subItems = subItems;
    return _this2;
  }

  _createClass(SectionItem, [{
    key: "export",
    value: function _export(exporter) {
      exporter.beginExportSectionItem(this);
      this.titleItem["export"](exporter);
      this.subItems.forEach(function (item) {
        item["export"](exporter);
      });
      exporter.endExportSectionItem(this);
    }
  }]);

  return SectionItem;
}(MarkdownDocumentItem);

var ParagraphItem =
/*#__PURE__*/
function (_Item2) {
  _inherits(ParagraphItem, _Item2);

  function ParagraphItem(subItems) {
    var _this3;

    _classCallCheck(this, ParagraphItem);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ParagraphItem).call(this));
    _this3.subItems = subItems;
    return _this3;
  }

  _createClass(ParagraphItem, [{
    key: "export",
    value: function _export(exporter) {
      exporter.beginExportParagraphItem(this);
      this.subItems.forEach(function (item) {
        item["export"](exporter);
      });
      exporter.endExportParagraphItem(this);
    }
  }]);

  return ParagraphItem;
}(Item);

var TitleItem =
/*#__PURE__*/
function (_Item3) {
  _inherits(TitleItem, _Item3);

  function TitleItem(text, level) {
    var _this4;

    _classCallCheck(this, TitleItem);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(TitleItem).call(this));
    _this4.text = text;
    _this4.level = level;
    return _this4;
  }

  _createClass(TitleItem, [{
    key: "export",
    value: function _export(exporter) {
      exporter.exportTitleItem(this);
    }
  }]);

  return TitleItem;
}(Item);

var TextItem =
/*#__PURE__*/
function (_Item4) {
  _inherits(TextItem, _Item4);

  function TextItem() {
    var _this5;

    _classCallCheck(this, TextItem);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(TextItem).call(this));

    if ((this instanceof TextItem ? this.constructor : void 0) === TextItem) {
      throw new TypeError("Cannot construct TextItem instances directly");
    }

    return _this5;
  }

  return TextItem;
}(Item);

var PlainTextItem =
/*#__PURE__*/
function (_TextItem) {
  _inherits(PlainTextItem, _TextItem);

  function PlainTextItem(text) {
    var _this6;

    _classCallCheck(this, PlainTextItem);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(PlainTextItem).call(this));
    _this6.text = text;
    return _this6;
  }

  _createClass(PlainTextItem, [{
    key: "export",
    value: function _export(exporter) {
      exporter.exportPlainTextItem(this);
    }
  }]);

  return PlainTextItem;
}(TextItem);

var BoldTextItem =
/*#__PURE__*/
function (_TextItem2) {
  _inherits(BoldTextItem, _TextItem2);

  function BoldTextItem(text) {
    var _this7;

    _classCallCheck(this, BoldTextItem);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(BoldTextItem).call(this));
    _this7.text = text;
    return _this7;
  }

  _createClass(BoldTextItem, [{
    key: "export",
    value: function _export(exporter) {
      exporter.exportBoldTextItem(this);
    }
  }]);

  return BoldTextItem;
}(TextItem);

var NewlineItem =
/*#__PURE__*/
function (_TextItem3) {
  _inherits(NewlineItem, _TextItem3);

  function NewlineItem() {
    _classCallCheck(this, NewlineItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(NewlineItem).call(this));
  }

  _createClass(NewlineItem, [{
    key: "export",
    value: function _export(exporter) {
      exporter.exportNewLineItem(this);
    }
  }]);

  return NewlineItem;
}(TextItem);



/***/ }),

/***/ "./src/app/export.js":
/*!***************************!*\
  !*** ./src/app/export.js ***!
  \***************************/
/*! exports provided: HtmlExporter, WikimediaExporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlExporter", function() { return HtmlExporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikimediaExporter", function() { return WikimediaExporter; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Exporter =
/*#__PURE__*/
function () {
  function Exporter() {
    _classCallCheck(this, Exporter);
  }

  _createClass(Exporter, [{
    key: "exportMarkdownDocumentItem",
    value: function exportMarkdownDocumentItem(item) {}
  }, {
    key: "exportSectionItem",
    value: function exportSectionItem(item) {}
  }, {
    key: "exportParagraphItem",
    value: function exportParagraphItem(item) {}
  }, {
    key: "exportTitleItem",
    value: function exportTitleItem(item) {}
  }, {
    key: "exportTextItem",
    value: function exportTextItem(item) {}
  }, {
    key: "exportPlainTextItem",
    value: function exportPlainTextItem(item) {}
  }, {
    key: "exportBoldTextItem",
    value: function exportBoldTextItem(item) {}
  }, {
    key: "exportNewLineItem",
    value: function exportNewLineItem(item) {}
  }]);

  return Exporter;
}();

var HtmlExporter =
/*#__PURE__*/
function (_Exporter) {
  _inherits(HtmlExporter, _Exporter);

  function HtmlExporter() {
    var _this;

    _classCallCheck(this, HtmlExporter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HtmlExporter).call(this));
    _this.output = '';
    return _this;
  }

  _createClass(HtmlExporter, [{
    key: "beginExportMarkdownDocumentItem",
    value: function beginExportMarkdownDocumentItem(item) {
      this.output += "<html>";
    }
  }, {
    key: "endExportMarkdownDocumentItem",
    value: function endExportMarkdownDocumentItem(item) {
      this.output += "</html>";
    }
  }, {
    key: "beginExportSectionItem",
    value: function beginExportSectionItem(item) {
      this.output += "<section>";
    }
  }, {
    key: "endExportSectionItem",
    value: function endExportSectionItem(item) {
      this.output += "</section>";
    }
  }, {
    key: "beginExportParagraphItem",
    value: function beginExportParagraphItem(item) {
      this.output += "<p>";
    }
  }, {
    key: "endExportParagraphItem",
    value: function endExportParagraphItem(item) {
      this.output += "</p>";
    }
  }, {
    key: "exportTitleItem",
    value: function exportTitleItem(item) {
      this.output += "<h" + item.level + ">" + item.text + "</h" + item.level + ">";
    }
  }, {
    key: "exportPlainTextItem",
    value: function exportPlainTextItem(item) {
      this.output += item.text;
    }
  }, {
    key: "exportBoldTextItem",
    value: function exportBoldTextItem(item) {
      this.output += "<strong>" + item.text + "</strong>";
    }
  }, {
    key: "exportNewLineItem",
    value: function exportNewLineItem(item) {
      //	return '\n' + '\t'.repeat(indent);
      this.output += "\n";
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      return this.output;
    }
  }]);

  return HtmlExporter;
}(Exporter);
var WikimediaExporter =
/*#__PURE__*/
function (_Exporter2) {
  _inherits(WikimediaExporter, _Exporter2);

  function WikimediaExporter() {
    var _this2;

    _classCallCheck(this, WikimediaExporter);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(WikimediaExporter).call(this));
    _this2.output = '';
    return _this2;
  }

  _createClass(WikimediaExporter, [{
    key: "beginExportMarkdownDocumentItem",
    value: function beginExportMarkdownDocumentItem(item) {}
  }, {
    key: "endExportMarkdownDocumentItem",
    value: function endExportMarkdownDocumentItem(item) {}
  }, {
    key: "beginExportSectionItem",
    value: function beginExportSectionItem(item) {}
  }, {
    key: "endExportSectionItem",
    value: function endExportSectionItem(item) {}
  }, {
    key: "beginExportParagraphItem",
    value: function beginExportParagraphItem(item) {}
  }, {
    key: "endExportParagraphItem",
    value: function endExportParagraphItem(item) {}
  }, {
    key: "exportTitleItem",
    value: function exportTitleItem(item) {
      this.output += "=".repeat(item.level) + item.text + "=".repeat(item.level);
    }
  }, {
    key: "exportPlainTextItem",
    value: function exportPlainTextItem(item) {
      this.output += item.text;
    }
  }, {
    key: "exportBoldTextItem",
    value: function exportBoldTextItem(item) {
      this.output += "'''" + item.text + "'''";
    }
  }, {
    key: "exportNewLineItem",
    value: function exportNewLineItem(item) {
      this.output += "\n";
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      return this.output;
    }
  }]);

  return WikimediaExporter;
}(Exporter);

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! exports provided: eraseText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eraseText", function() { return eraseText; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./src/app/parser.js");
/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./export */ "./src/app/export.js");



function exportTo(root, exporter) {
  root["export"](exporter);
  document.querySelector('#output-area').innerHTML = exporter.getOutput();
}

document.getElementById("input-area").onkeyup = function translateTo() {
  var selectElement = document.getElementById('outputs');
  var input = document.querySelector('#input-area').value;
  var parser = new _parser__WEBPACK_IMPORTED_MODULE_0__["Parser"]();
  var tokens = parser.tokenize(input);
  var cursor = {
    index: 0
  };
  var root = parser.parseMarkdownDocumentItem(tokens, cursor);
  console.log(root);

  if (root == undefined) {
    document.querySelector('#output-area').innerHTML = "Incomplete markdown format";
  } else {
    var option = selectElement.value;

    if (option == "html") {
      exportTo(root, new _export__WEBPACK_IMPORTED_MODULE_1__["HtmlExporter"]());
    } else if (option == "Wikimedia") {
      exportTo(root, new _export__WEBPACK_IMPORTED_MODULE_1__["WikimediaExporter"]());
    } else {
      alert("Please pick an option");
    }
  }
};

function eraseText() {
  document.getElementById("output-area").value = "";
}

document.getElementById("download-button").onclick = function () {
  var content = document.getElementById('output-area').value;
  window.open("data:application/text," + encodeURIComponent(content), "_self");
}; //document.getElementById("clear-button").onclick = eraseText();

/***/ }),

/***/ "./src/app/parser.js":
/*!***************************!*\
  !*** ./src/app/parser.js ***!
  \***************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document */ "./src/app/document.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var HashToken = 0;
var TextToken = 1;
var BoldToken = 2;
var NewlineToken = 3;
var str1 = "0\n3**5**\n7#";
var str2 = "# Section 1\nSome **(bold) introduction** to Section 1.\n## Section 1.1\nA text describing Section 1.1Some conclusion to Section 1.\n# Section 2\nAn introduction to Section 2.\nSome conclusion to Section 2.";

var Parser =
/*#__PURE__*/
function () {
  function Parser() {
    _classCallCheck(this, Parser);
  }

  _createClass(Parser, [{
    key: "tokenize",
    value: function tokenize(text) {
      var tokens = [];
      var tokenValue = '';

      for (var i = 0; i < text.length; i++) {
        if (text[i] == "#") {
          if (tokenValue.length > 0) {
            tokens.push({
              type: TextToken,
              value: tokenValue
            });
            tokenValue = "";
          }

          tokens.push({
            type: HashToken
          });
        } else if (text[i] == "*" & text[i + 1] == "*") {
          if (tokenValue.length > 0) {
            tokens.push({
              type: TextToken,
              value: tokenValue
            });
            tokenValue = "";
          }

          tokens.push({
            type: BoldToken
          });
          i++;
        } else if (text[i] == "\n") {
          if (tokenValue.length > 0) {
            tokens.push({
              type: TextToken,
              value: tokenValue
            });
            tokenValue = "";
          }

          tokens.push({
            type: NewlineToken
          });
        } else {
          tokenValue += text[i];
        }
      } //handling the end of input case when we have text acumulated 


      if (tokenValue.length > 0) {
        tokens.push({
          type: TextToken,
          value: tokenValue
        });
      }

      return tokens;
    }
  }, {
    key: "parseTitleItem",
    value: function parseTitleItem(tokens, cursor) {
      var hashLevel = 0;

      for (var i = cursor.index; i < tokens.length; i++) {
        if (tokens[i].type == 0) {
          hashLevel++;
        } else {
          break;
        }
      }

      var newLineIndex = cursor.index + hashLevel + 1;

      if (hashLevel > 0 && tokens.length > newLineIndex) {
        if (tokens[cursor.index + hashLevel].type == TextToken && tokens[newLineIndex].type == NewlineToken) {
          var value = tokens[cursor.index + hashLevel].value;
          cursor.index += hashLevel + 2;
          return new _document__WEBPACK_IMPORTED_MODULE_0__["TitleItem"](value, hashLevel);
        }
      }
    }
  }, {
    key: "parsePlainTextItem",
    value: function parsePlainTextItem(tokens, cursor) {
      if (cursor.index >= tokens.length) {
        return undefined;
      }

      if (tokens[cursor.index].type == TextToken) {
        cursor.index++;
        return new _document__WEBPACK_IMPORTED_MODULE_0__["PlainTextItem"](tokens[cursor.index - 1].value);
      }
    }
  }, {
    key: "parseBoldTextItem",
    value: function parseBoldTextItem(tokens, cursor) {
      if (cursor.index + 2 >= tokens.length) {
        return undefined;
      }

      if (tokens[cursor.index].type == BoldToken && tokens[cursor.index + 1].type == TextToken && tokens[cursor.index + 2].type == BoldToken) {
        cursor.index += 3;
        return new _document__WEBPACK_IMPORTED_MODULE_0__["BoldTextItem"](tokens[cursor.index - 2].value);
      }
    }
  }, {
    key: "parseNewLineItem",
    value: function parseNewLineItem(tokens, cursor) {
      if (cursor.index >= tokens.length) {
        return undefined;
      }

      if (tokens[cursor.index].type == NewlineToken) {
        cursor.index++;
        return new _document__WEBPACK_IMPORTED_MODULE_0__["NewlineItem"]();
      }
    }
  }, {
    key: "parseParagraphSubitem",
    value: function parseParagraphSubitem(tokens, cursor) {
      var plainTextItem = this.parsePlainTextItem(tokens, cursor);

      if (plainTextItem != undefined) {
        return plainTextItem;
      }

      var boldTextItem = this.parseBoldTextItem(tokens, cursor);

      if (boldTextItem != undefined) {
        return boldTextItem;
      }

      var newLineItem = this.parseNewLineItem(tokens, cursor);

      if (newLineItem != undefined) {
        return newLineItem;
      }
    }
  }, {
    key: "parseParagraphItem",
    value: function parseParagraphItem(tokens, cursor) {
      var items = [];

      while (true) {
        var item = this.parseParagraphSubitem(tokens, cursor);

        if (item != undefined) {
          items.push(item);
        } else {
          break;
        }
      }

      if (items.length > 0) {
        return new _document__WEBPACK_IMPORTED_MODULE_0__["ParagraphItem"](items);
      }
    }
  }, {
    key: "parseSectionItem",
    value: function parseSectionItem(tokens, cursor, minLevel) {
      var oldCursor = cursor.index; // make an actual copy of the index (oldcursor = cursor would not work because of reference semantics)

      var titleItem = this.parseTitleItem(tokens, cursor);

      if (titleItem == undefined) {
        return undefined;
      }

      if (titleItem.level > minLevel) {
        var items = [];

        while (true) {
          var item = this.parseSectionSubItem(tokens, cursor, titleItem.level);

          if (item != undefined) {
            items.push(item);
          } else {
            break;
          }
        }

        if (items.length > 0) {
          return new _document__WEBPACK_IMPORTED_MODULE_0__["SectionItem"](titleItem, titleItem.level, items);
        } else {
          return titleItem;
        }
      }

      cursor.index = oldCursor;
    }
  }, {
    key: "parseSectionSubItem",
    value: function parseSectionSubItem(tokens, cursor, minLevel) {
      var paragraphItem = this.parseParagraphItem(tokens, cursor);

      if (paragraphItem != undefined) {
        return paragraphItem;
      }

      var sectionItem = this.parseSectionItem(tokens, cursor, minLevel);

      if (sectionItem != undefined) {
        return sectionItem;
      }
    }
  }, {
    key: "parseDocumentSubitem",
    value: function parseDocumentSubitem(tokens, cursor) {
      var sectionItem = this.parseSectionItem(tokens, cursor, 0);

      if (sectionItem != undefined) {
        return sectionItem;
      }

      var paragraphItem = this.parseParagraphItem(tokens, cursor);

      if (paragraphItem != undefined) {
        return paragraphItem;
      }
    }
  }, {
    key: "parseMarkdownDocumentItem",
    value: function parseMarkdownDocumentItem(tokens, cursor) {
      var items = [];

      while (true) {
        var item = this.parseDocumentSubitem(tokens, cursor);

        if (item != undefined) {
          items.push(item);
        } else {
          break;
        }
      }

      if (items.length > 0) {
        return new _document__WEBPACK_IMPORTED_MODULE_0__["MarkdownDocumentItem"](items);
      }
    }
  }]);

  return Parser;
}();


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJUeXBlRXJyb3IiLCJleHBvcnRlciIsIkVycm9yIiwiTWFya2Rvd25Eb2N1bWVudEl0ZW0iLCJzdWJJdGVtcyIsImJlZ2luRXhwb3J0TWFya2Rvd25Eb2N1bWVudEl0ZW0iLCJmb3JFYWNoIiwiaXRlbSIsImVuZEV4cG9ydE1hcmtkb3duRG9jdW1lbnRJdGVtIiwiU2VjdGlvbkl0ZW0iLCJ0aXRsZUl0ZW0iLCJsZXZlbCIsImJlZ2luRXhwb3J0U2VjdGlvbkl0ZW0iLCJlbmRFeHBvcnRTZWN0aW9uSXRlbSIsIlBhcmFncmFwaEl0ZW0iLCJiZWdpbkV4cG9ydFBhcmFncmFwaEl0ZW0iLCJlbmRFeHBvcnRQYXJhZ3JhcGhJdGVtIiwiVGl0bGVJdGVtIiwidGV4dCIsImV4cG9ydFRpdGxlSXRlbSIsIlRleHRJdGVtIiwiUGxhaW5UZXh0SXRlbSIsImV4cG9ydFBsYWluVGV4dEl0ZW0iLCJCb2xkVGV4dEl0ZW0iLCJleHBvcnRCb2xkVGV4dEl0ZW0iLCJOZXdsaW5lSXRlbSIsImV4cG9ydE5ld0xpbmVJdGVtIiwiRXhwb3J0ZXIiLCJIdG1sRXhwb3J0ZXIiLCJvdXRwdXQiLCJXaWtpbWVkaWFFeHBvcnRlciIsInJlcGVhdCIsImV4cG9ydFRvIiwicm9vdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImdldE91dHB1dCIsImdldEVsZW1lbnRCeUlkIiwib25rZXl1cCIsInRyYW5zbGF0ZVRvIiwic2VsZWN0RWxlbWVudCIsImlucHV0IiwidmFsdWUiLCJwYXJzZXIiLCJQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbml6ZSIsImN1cnNvciIsImluZGV4IiwicGFyc2VNYXJrZG93bkRvY3VtZW50SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJvcHRpb24iLCJhbGVydCIsImVyYXNlVGV4dCIsIm9uY2xpY2siLCJjb250ZW50Iiwid2luZG93Iiwib3BlbiIsImVuY29kZVVSSUNvbXBvbmVudCIsIkhhc2hUb2tlbiIsIlRleHRUb2tlbiIsIkJvbGRUb2tlbiIsIk5ld2xpbmVUb2tlbiIsInN0cjEiLCJzdHIyIiwidG9rZW5WYWx1ZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwidHlwZSIsImhhc2hMZXZlbCIsIm5ld0xpbmVJbmRleCIsInBsYWluVGV4dEl0ZW0iLCJwYXJzZVBsYWluVGV4dEl0ZW0iLCJib2xkVGV4dEl0ZW0iLCJwYXJzZUJvbGRUZXh0SXRlbSIsIm5ld0xpbmVJdGVtIiwicGFyc2VOZXdMaW5lSXRlbSIsIml0ZW1zIiwicGFyc2VQYXJhZ3JhcGhTdWJpdGVtIiwibWluTGV2ZWwiLCJvbGRDdXJzb3IiLCJwYXJzZVRpdGxlSXRlbSIsInBhcnNlU2VjdGlvblN1Ykl0ZW0iLCJwYXJhZ3JhcGhJdGVtIiwicGFyc2VQYXJhZ3JhcGhJdGVtIiwic2VjdGlvbkl0ZW0iLCJwYXJzZVNlY3Rpb25JdGVtIiwicGFyc2VEb2N1bWVudFN1Yml0ZW0iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QyxDQUF0QyxDQUFsQjs7QUFDQSxVQUFJeUMsV0FBVyxJQUFJcEMsU0FBbkIsRUFBOEI7QUFDN0IsZUFBT29DLFdBQVA7QUFDQTs7QUFDRCxVQUFJRixhQUFhLEdBQUcsS0FBS0Msa0JBQUwsQ0FBd0IxQyxNQUF4QixFQUFnQ0UsTUFBaEMsQ0FBcEI7O0FBQ0EsVUFBSXVDLGFBQWEsSUFBSWxDLFNBQXJCLEVBQWdDO0FBQy9CLGVBQU9rQyxhQUFQO0FBQ0E7QUFDRDs7OzhDQUV5QnpDLE0sRUFBUUUsTSxFQUFRO0FBQ3pDLFVBQUlpQyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxhQUFPLElBQVAsRUFBYTtBQUNaLFlBQUkxRSxJQUFJLEdBQUcsS0FBS29GLG9CQUFMLENBQTBCN0MsTUFBMUIsRUFBa0NFLE1BQWxDLENBQVg7O0FBQ0EsWUFBSXpDLElBQUksSUFBSThDLFNBQVosRUFBdUI7QUFDdEI0QixlQUFLLENBQUNWLElBQU4sQ0FBV2hFLElBQVg7QUFDQSxTQUZELE1BRU87QUFDTjtBQUNBO0FBQ0Q7O0FBQ0QsVUFBSTBFLEtBQUssQ0FBQ1gsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3JCLGVBQU8sSUFBSW5FLDhEQUFKLENBQXlCOEUsS0FBekIsQ0FBUDtBQUNBO0FBQ0Q7Ozs7OztBQUdGO0FBR0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgSXRlbSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGlmIChuZXcudGFyZ2V0ID09PSBJdGVtKSB7XG5cdFx0ICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnN0cnVjdCBJdGVtIGluc3RhbmNlcyBkaXJlY3RseVwiKTtcblx0XHR9XG5cdH1cblx0ZXhwb3J0KGV4cG9ydGVyKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIG1ldGhvZCEnKVxuXHR9XG59XG5cbmNsYXNzIE1hcmtkb3duRG9jdW1lbnRJdGVtIGV4dGVuZHMgSXRlbSB7XG5cdGNvbnN0cnVjdG9yKHN1Ykl0ZW1zKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN1Ykl0ZW1zID0gc3ViSXRlbXM7XG5cdH1cblx0ZXhwb3J0KGV4cG9ydGVyKSB7XG5cdFx0ZXhwb3J0ZXIuYmVnaW5FeHBvcnRNYXJrZG93bkRvY3VtZW50SXRlbSh0aGlzKTtcblx0XHR0aGlzLnN1Ykl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpdGVtLmV4cG9ydChleHBvcnRlcik7XHRcblx0XHR9KVxuXHRcdGV4cG9ydGVyLmVuZEV4cG9ydE1hcmtkb3duRG9jdW1lbnRJdGVtKHRoaXMpO1xuXHR9XG5cbn1cblxuY2xhc3MgU2VjdGlvbkl0ZW0gZXh0ZW5kcyBNYXJrZG93bkRvY3VtZW50SXRlbSB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlSXRlbSwgbGV2ZWwsIHN1Ykl0ZW1zKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRpdGxlSXRlbSA9IHRpdGxlSXRlbTtcblx0XHR0aGlzLmxldmVsID0gbGV2ZWw7XG5cdFx0dGhpcy5zdWJJdGVtcyA9IHN1Ykl0ZW1zO1xuXHR9XG5cdGV4cG9ydChleHBvcnRlcikge1xuXHRcdGV4cG9ydGVyLmJlZ2luRXhwb3J0U2VjdGlvbkl0ZW0odGhpcyk7XG5cdFx0dGhpcy50aXRsZUl0ZW0uZXhwb3J0KGV4cG9ydGVyKTtcblx0XHR0aGlzLnN1Ykl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpdGVtLmV4cG9ydChleHBvcnRlcik7XHRcblx0XHR9KVxuXHRcdGV4cG9ydGVyLmVuZEV4cG9ydFNlY3Rpb25JdGVtKHRoaXMpO1xuXHR9XHRcdFxufVxuXG5jbGFzcyBQYXJhZ3JhcGhJdGVtIGV4dGVuZHMgSXRlbSB7XG5cdGNvbnN0cnVjdG9yKHN1Ykl0ZW1zKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN1Ykl0ZW1zID0gc3ViSXRlbXM7XG5cdH1cblx0ZXhwb3J0KGV4cG9ydGVyKSB7XG5cdFx0ZXhwb3J0ZXIuYmVnaW5FeHBvcnRQYXJhZ3JhcGhJdGVtKHRoaXMpO1xuXHRcdHRoaXMuc3ViSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGl0ZW0uZXhwb3J0KGV4cG9ydGVyKTtcblx0XHR9KTtcblx0XHRleHBvcnRlci5lbmRFeHBvcnRQYXJhZ3JhcGhJdGVtKHRoaXMpO1xuXHR9XHRcdFxufVxuXG5jbGFzcyBUaXRsZUl0ZW0gZXh0ZW5kcyBJdGVtIHtcblx0Y29uc3RydWN0b3IodGV4dCwgbGV2ZWwpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0dGhpcy5sZXZlbCA9IGxldmVsO1xuXHR9XG5cdGV4cG9ydChleHBvcnRlcikge1xuXHRcdGV4cG9ydGVyLmV4cG9ydFRpdGxlSXRlbSh0aGlzKTtcblx0fVxufVxuXG5jbGFzcyBUZXh0SXRlbSBleHRlbmRzIEl0ZW0ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChuZXcudGFyZ2V0ID09PSBUZXh0SXRlbSkge1xuXHRcdCAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb25zdHJ1Y3QgVGV4dEl0ZW0gaW5zdGFuY2VzIGRpcmVjdGx5XCIpO1xuXHRcdH1cblx0ICB9XG59XG5cbmNsYXNzIFBsYWluVGV4dEl0ZW0gZXh0ZW5kcyBUZXh0SXRlbSB7XG5cdGNvbnN0cnVjdG9yKHRleHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdH1cblx0ZXhwb3J0KGV4cG9ydGVyKSB7XG5cdFx0ZXhwb3J0ZXIuZXhwb3J0UGxhaW5UZXh0SXRlbSh0aGlzKTtcblx0fVx0XG59XG5cbmNsYXNzIEJvbGRUZXh0SXRlbSBleHRlbmRzIFRleHRJdGVtIHtcblx0Y29uc3RydWN0b3IodGV4dCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0fVxuXHRleHBvcnQoZXhwb3J0ZXIpIHtcblx0XHRleHBvcnRlci5leHBvcnRCb2xkVGV4dEl0ZW0odGhpcyk7XHRcblx0fVx0XG59XG5cbmNsYXNzIE5ld2xpbmVJdGVtIGV4dGVuZHMgVGV4dEl0ZW0ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cdGV4cG9ydChleHBvcnRlcikge1xuXHRcdGV4cG9ydGVyLmV4cG9ydE5ld0xpbmVJdGVtKHRoaXMpO1xuXHR9XG59XG5cbmV4cG9ydCB7IE1hcmtkb3duRG9jdW1lbnRJdGVtLCBTZWN0aW9uSXRlbSwgUGFyYWdyYXBoSXRlbSwgVGl0bGVJdGVtLCBQbGFpblRleHRJdGVtLCBCb2xkVGV4dEl0ZW0sIE5ld2xpbmVJdGVtIH07XG4iLCJjbGFzcyBFeHBvcnRlciB7XG5cdGV4cG9ydE1hcmtkb3duRG9jdW1lbnRJdGVtKGl0ZW0pIHtcblxuXHR9XG5cdGV4cG9ydFNlY3Rpb25JdGVtKGl0ZW0pIHtcblxuXHR9XG5cdGV4cG9ydFBhcmFncmFwaEl0ZW0oaXRlbSkge1xuXG5cdH1cblx0ZXhwb3J0VGl0bGVJdGVtKGl0ZW0pIHtcblxuXHR9XG5cdGV4cG9ydFRleHRJdGVtKGl0ZW0pIHtcblxuXHR9XG5cdGV4cG9ydFBsYWluVGV4dEl0ZW0oaXRlbSkge1xuXG5cdH1cblx0ZXhwb3J0Qm9sZFRleHRJdGVtKGl0ZW0pIHtcblxuXHR9XG5cdGV4cG9ydE5ld0xpbmVJdGVtKGl0ZW0pIHtcblxuXHR9XG59XG5leHBvcnQgY2xhc3MgSHRtbEV4cG9ydGVyIGV4dGVuZHMgRXhwb3J0ZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3V0cHV0ID0gJyc7XG5cdH1cblxuXHRiZWdpbkV4cG9ydE1hcmtkb3duRG9jdW1lbnRJdGVtKGl0ZW0pIHtcblx0XHR0aGlzLm91dHB1dCArPSBcIjxodG1sPlwiO1x0XG5cdH1cblx0ZW5kRXhwb3J0TWFya2Rvd25Eb2N1bWVudEl0ZW0oaXRlbSkge1xuXHRcdHRoaXMub3V0cHV0ICs9IFwiPC9odG1sPlwiO1xuXHR9XG5cdGJlZ2luRXhwb3J0U2VjdGlvbkl0ZW0oaXRlbSkge1xuXHRcdHRoaXMub3V0cHV0ICs9IFwiPHNlY3Rpb24+XCI7XG5cdH1cblx0ZW5kRXhwb3J0U2VjdGlvbkl0ZW0oaXRlbSkge1xuXHRcdHRoaXMub3V0cHV0ICs9IFwiPC9zZWN0aW9uPlwiXHRcblx0fVxuXHRiZWdpbkV4cG9ydFBhcmFncmFwaEl0ZW0oaXRlbSkge1xuXHRcdHRoaXMub3V0cHV0ICs9IFwiPHA+XCJcdFxuXHR9XG5cdGVuZEV4cG9ydFBhcmFncmFwaEl0ZW0oaXRlbSkge1xuXHRcdHRoaXMub3V0cHV0ICs9IFwiPC9wPlwiXHRcblx0fVxuXHRleHBvcnRUaXRsZUl0ZW0oaXRlbSkge1xuXHRcdHRoaXMub3V0cHV0ICs9IFwiPGhcIiArIGl0ZW0ubGV2ZWwgKyBcIj5cIisgaXRlbS50ZXh0ICsgXCI8L2hcIiArIGl0ZW0ubGV2ZWwgKyBcIj5cIjtcblx0fVxuXHRleHBvcnRQbGFpblRleHRJdGVtKGl0ZW0pIHtcblx0XHR0aGlzLm91dHB1dCArPSBpdGVtLnRleHQ7XG5cdH1cblx0ZXhwb3J0Qm9sZFRleHRJdGVtKGl0ZW0pIHtcblx0XHR0aGlzLm91dHB1dCArPSBcIjxzdHJvbmc+XCIgKyBpdGVtLnRleHQgKyBcIjwvc3Ryb25nPlwiO1xuXHR9XG5cdGV4cG9ydE5ld0xpbmVJdGVtKGl0ZW0pIHtcblx0Ly9cdHJldHVybiAnXFxuJyArICdcXHQnLnJlcGVhdChpbmRlbnQpO1xuXHRcdHRoaXMub3V0cHV0ICs9ICBcIlxcblwiO1xuXHR9XG5cdGdldE91dHB1dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5vdXRwdXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpa2ltZWRpYUV4cG9ydGVyIGV4dGVuZHMgRXhwb3J0ZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3V0cHV0ID0gJyc7XG5cdH1cblxuXHRiZWdpbkV4cG9ydE1hcmtkb3duRG9jdW1lbnRJdGVtKGl0ZW0pIHtcblx0XHRcblx0fVxuXHRlbmRFeHBvcnRNYXJrZG93bkRvY3VtZW50SXRlbShpdGVtKSB7XG5cdFx0XG5cdH1cblx0YmVnaW5FeHBvcnRTZWN0aW9uSXRlbShpdGVtKSB7XG5cdFx0XG5cdH1cblx0ZW5kRXhwb3J0U2VjdGlvbkl0ZW0oaXRlbSkge1xuXHRcdFxuXHR9XG5cdGJlZ2luRXhwb3J0UGFyYWdyYXBoSXRlbShpdGVtKSB7XG5cdFx0XG5cdH1cblx0ZW5kRXhwb3J0UGFyYWdyYXBoSXRlbShpdGVtKSB7XG5cdFx0XHRcblx0fVxuXHRleHBvcnRUaXRsZUl0ZW0oaXRlbSkge1xuXHRcdHRoaXMub3V0cHV0ICs9IFwiPVwiLnJlcGVhdChpdGVtLmxldmVsKSArIGl0ZW0udGV4dCArIFwiPVwiLnJlcGVhdChpdGVtLmxldmVsKTtcblx0fVxuXHRleHBvcnRQbGFpblRleHRJdGVtKGl0ZW0pIHtcblx0XHR0aGlzLm91dHB1dCArPSBpdGVtLnRleHQ7XG5cdH1cblx0ZXhwb3J0Qm9sZFRleHRJdGVtKGl0ZW0pIHtcblx0XHR0aGlzLm91dHB1dCArPSBcIicnJ1wiICsgaXRlbS50ZXh0ICsgXCInJydcIjtcblx0fVxuXHRleHBvcnROZXdMaW5lSXRlbShpdGVtKSB7XG5cdFx0dGhpcy5vdXRwdXQgKz0gIFwiXFxuXCI7XG5cdH1cblx0Z2V0T3V0cHV0KCkge1xuXHRcdHJldHVybiB0aGlzLm91dHB1dDtcblx0fVxufVxuXG4iLCJpbXBvcnQge1BhcnNlcn0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHtIdG1sRXhwb3J0ZXIsIFdpa2ltZWRpYUV4cG9ydGVyfSBmcm9tICcuL2V4cG9ydCc7XG5cbmZ1bmN0aW9uIGV4cG9ydFRvKHJvb3QsIGV4cG9ydGVyKSB7XG5cdHJvb3QuZXhwb3J0KGV4cG9ydGVyKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dHB1dC1hcmVhJykuaW5uZXJIVE1MID0gZXhwb3J0ZXIuZ2V0T3V0cHV0KCk7XHRcbn1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtYXJlYVwiKS5vbmtleXVwID0gZnVuY3Rpb24gdHJhbnNsYXRlVG8oKSB7XG5cdGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0cycpO1xuXHRsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtYXJlYScpLnZhbHVlO1xuXHRsZXQgcGFyc2VyID0gbmV3IFBhcnNlcjtcblx0bGV0IHRva2VucyA9IHBhcnNlci50b2tlbml6ZShpbnB1dCk7XG5cdGxldCBjdXJzb3IgPSB7aW5kZXg6IDB9O1xuXHRsZXQgcm9vdCA9IHBhcnNlci5wYXJzZU1hcmtkb3duRG9jdW1lbnRJdGVtKHRva2VucywgY3Vyc29yKTtcblx0Y29uc29sZS5sb2cocm9vdCk7XG5cdGlmIChyb290ID09IHVuZGVmaW5lZCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdXRwdXQtYXJlYScpLmlubmVySFRNTCA9IFwiSW5jb21wbGV0ZSBtYXJrZG93biBmb3JtYXRcIjtcblx0fSBlbHNlIHtcblx0XHRsZXQgb3B0aW9uID0gc2VsZWN0RWxlbWVudC52YWx1ZTtcblx0XHRpZiAob3B0aW9uID09IFwiaHRtbFwiKSB7XG5cdFx0XHRleHBvcnRUbyhyb290LCBuZXcgSHRtbEV4cG9ydGVyKTtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbiA9PSBcIldpa2ltZWRpYVwiKSB7XG5cdFx0XHRleHBvcnRUbyhyb290LCBuZXcgV2lraW1lZGlhRXhwb3J0ZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhbGVydChcIlBsZWFzZSBwaWNrIGFuIG9wdGlvblwiKTtcblx0XHR9XHRcblx0fVx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcmFzZVRleHQoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0LWFyZWFcIikudmFsdWUgPSBcIlwiO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25sb2FkLWJ1dHRvblwiKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dC1hcmVhJykudmFsdWU7XG5cdHdpbmRvdy5vcGVuKFwiZGF0YTphcHBsaWNhdGlvbi90ZXh0LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGNvbnRlbnQpLCBcIl9zZWxmXCIpO1xufVxuXG5cblxuLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyLWJ1dHRvblwiKS5vbmNsaWNrID0gZXJhc2VUZXh0KCk7XG5cblxuXG5cbiIsImltcG9ydCB7IE1hcmtkb3duRG9jdW1lbnRJdGVtLCBTZWN0aW9uSXRlbSwgUGFyYWdyYXBoSXRlbSwgVGl0bGVJdGVtLCBQbGFpblRleHRJdGVtLCBCb2xkVGV4dEl0ZW0sIE5ld2xpbmVJdGVtIH0gZnJvbSAnLi9kb2N1bWVudCc7XG5cbmNvbnN0IEhhc2hUb2tlbiA9IDA7XG5jb25zdCBUZXh0VG9rZW4gPSAxO1xuY29uc3QgQm9sZFRva2VuID0gMjtcbmNvbnN0IE5ld2xpbmVUb2tlbiA9IDM7XG5sZXQgc3RyMSA9IFwiMFxcbjMqKjUqKlxcbjcjXCJcbmxldCBzdHIyID0gXCIjIFNlY3Rpb24gMVxcblNvbWUgKiooYm9sZCkgaW50cm9kdWN0aW9uKiogdG8gU2VjdGlvbiAxLlxcbiMjIFNlY3Rpb24gMS4xXFxuQSB0ZXh0IGRlc2NyaWJpbmcgU2VjdGlvbiAxLjFTb21lIGNvbmNsdXNpb24gdG8gU2VjdGlvbiAxLlxcbiMgU2VjdGlvbiAyXFxuQW4gaW50cm9kdWN0aW9uIHRvIFNlY3Rpb24gMi5cXG5Tb21lIGNvbmNsdXNpb24gdG8gU2VjdGlvbiAyLlwiXG5cbmNsYXNzIFBhcnNlciB7XG5cdHRva2VuaXplKHRleHQpIHtcblx0XHRsZXQgdG9rZW5zID0gW107XG5cdFx0bGV0IHRva2VuVmFsdWUgPSAnJztcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRleHRbaV0gPT0gXCIjXCIpIHtcbiAgICAgICAgXHRcdGlmICh0b2tlblZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgXHRcdFx0dG9rZW5zLnB1c2goe3R5cGUgOiBUZXh0VG9rZW4sIHZhbHVlIDogdG9rZW5WYWx1ZX0pO1xuICAgICAgICAgICBcdFx0XHR0b2tlblZhbHVlID0gXCJcIjtcbiAgICAgICAgIFx0XHR9XG4gICAgICAgIFx0XHR0b2tlbnMucHVzaCh7dHlwZSA6IEhhc2hUb2tlbn0pO1xuICAgICAgXHRcdH0gZWxzZSBpZiAodGV4dFtpXSA9PSBcIipcIiAmIHRleHRbaSsxXSA9PSBcIipcIikge1xuICAgICAgICAgIFx0XHRpZiAodG9rZW5WYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIFx0XHR0b2tlbnMucHVzaCh7dHlwZSA6IFRleHRUb2tlbiwgdmFsdWUgOiB0b2tlblZhbHVlfSk7XG4gICAgICAgICAgICAgIFx0XHR0b2tlblZhbHVlID0gXCJcIjtcbiAgICAgICAgICBcdFx0fVxuICAgICAgICAgIFx0XHR0b2tlbnMucHVzaCh7dHlwZSA6IEJvbGRUb2tlbn0pO1xuICAgICAgICAgIFx0XHRpKys7XG4gICAgICBcdFx0fSBlbHNlIGlmICh0ZXh0W2ldID09IFwiXFxuXCIpIHtcbiAgICAgICAgICBcdFx0aWYgKHRva2VuVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgXHRcdHRva2Vucy5wdXNoKHt0eXBlIDogVGV4dFRva2VuLCB2YWx1ZSA6IHRva2VuVmFsdWV9KTtcbiAgICAgICAgICAgIFx0XHR0b2tlblZhbHVlID0gXCJcIjtcbiAgICAgICAgIFx0XHR9XG4gICAgICAgICAgXHRcdHRva2Vucy5wdXNoKHt0eXBlIDogTmV3bGluZVRva2VufSk7XG4gICAgICBcdFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdHRva2VuVmFsdWUgKz0gdGV4dFtpXTtcbiAgICAgIFx0XHR9XG5cdFx0fVxuXHRcdC8vaGFuZGxpbmcgdGhlIGVuZCBvZiBpbnB1dCBjYXNlIHdoZW4gd2UgaGF2ZSB0ZXh0IGFjdW11bGF0ZWQgXG5cdFx0aWYgKHRva2VuVmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dG9rZW5zLnB1c2goe3R5cGUgOiBUZXh0VG9rZW4sIHZhbHVlIDogdG9rZW5WYWx1ZX0pO1xuXHRcdH1cbiAgICBcdHJldHVybiB0b2tlbnM7XG5cdH1cblxuXHRwYXJzZVRpdGxlSXRlbSh0b2tlbnMsIGN1cnNvcikge1xuXHRcdGxldCBoYXNoTGV2ZWwgPSAwO1xuXHRcdGZvciAobGV0IGkgPSBjdXJzb3IuaW5kZXg7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHsgXG5cdFx0XHRpZiAodG9rZW5zW2ldLnR5cGUgPT0gMCkge1xuXHRcdFx0XHRoYXNoTGV2ZWwrKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuICAgICAgICB9IFxuXG5cdFx0bGV0IG5ld0xpbmVJbmRleCA9IGN1cnNvci5pbmRleCArIGhhc2hMZXZlbCArIDE7XG5cdFx0aWYgKGhhc2hMZXZlbCA+IDAgJiYgdG9rZW5zLmxlbmd0aCA+IG5ld0xpbmVJbmRleCkge1xuXHRcdFx0aWYgKHRva2Vuc1tjdXJzb3IuaW5kZXggKyBoYXNoTGV2ZWxdLnR5cGUgPT0gVGV4dFRva2VuICYmIHRva2Vuc1tuZXdMaW5lSW5kZXhdLnR5cGUgPT0gTmV3bGluZVRva2VuKSB7IFxuXHRcdFx0XHRsZXQgdmFsdWUgPSB0b2tlbnNbY3Vyc29yLmluZGV4ICsgaGFzaExldmVsXS52YWx1ZTtcblx0XHRcdFx0Y3Vyc29yLmluZGV4ICs9IGhhc2hMZXZlbCArIDI7XG5cdFx0XHRcdHJldHVybiBuZXcgVGl0bGVJdGVtKHZhbHVlLCBoYXNoTGV2ZWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHBhcnNlUGxhaW5UZXh0SXRlbSh0b2tlbnMsIGN1cnNvcikge1xuXHRcdGlmIChjdXJzb3IuaW5kZXggPj0gdG9rZW5zLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9IFxuXHRcdGlmICh0b2tlbnNbY3Vyc29yLmluZGV4XS50eXBlID09IFRleHRUb2tlbikge1xuXHRcdFx0Y3Vyc29yLmluZGV4Kys7XG5cdFx0XHRyZXR1cm4gbmV3IFBsYWluVGV4dEl0ZW0odG9rZW5zW2N1cnNvci5pbmRleC0xXS52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VCb2xkVGV4dEl0ZW0odG9rZW5zLCBjdXJzb3IpIHtcblx0XHRpZiAoY3Vyc29yLmluZGV4ICsgMiA+PSB0b2tlbnMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH0gXG5cdFx0aWYgKHRva2Vuc1tjdXJzb3IuaW5kZXhdLnR5cGUgPT0gQm9sZFRva2VuICYmIHRva2Vuc1tjdXJzb3IuaW5kZXgrMV0udHlwZSA9PSBUZXh0VG9rZW4gJiYgdG9rZW5zW2N1cnNvci5pbmRleCsyXS50eXBlID09IEJvbGRUb2tlbikge1xuXHRcdFx0Y3Vyc29yLmluZGV4ICs9IDM7XG5cdFx0XHRyZXR1cm4gbmV3IEJvbGRUZXh0SXRlbSh0b2tlbnNbY3Vyc29yLmluZGV4LTJdLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZU5ld0xpbmVJdGVtKHRva2VucywgY3Vyc29yKSB7XG5cdFx0aWYgKGN1cnNvci5pbmRleCA+PSB0b2tlbnMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH0gXG5cdFx0aWYgKHRva2Vuc1tjdXJzb3IuaW5kZXhdLnR5cGUgPT0gTmV3bGluZVRva2VuKSB7XG5cdFx0XHRjdXJzb3IuaW5kZXgrKztcblx0XHRcdHJldHVybiBuZXcgTmV3bGluZUl0ZW0oKTtcblx0XHR9XG5cdH1cblx0XG5cdHBhcnNlUGFyYWdyYXBoU3ViaXRlbSh0b2tlbnMsIGN1cnNvcikge1xuXHRcdGxldCBwbGFpblRleHRJdGVtID0gdGhpcy5wYXJzZVBsYWluVGV4dEl0ZW0odG9rZW5zLCBjdXJzb3IpO1xuXHRcdGlmIChwbGFpblRleHRJdGVtICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHBsYWluVGV4dEl0ZW07XG5cdFx0fVxuXHRcdGxldCBib2xkVGV4dEl0ZW0gPSB0aGlzLnBhcnNlQm9sZFRleHRJdGVtKHRva2VucywgY3Vyc29yKTtcblx0XHRpZiAoYm9sZFRleHRJdGVtICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGJvbGRUZXh0SXRlbTtcblx0XHR9XG5cdFx0bGV0IG5ld0xpbmVJdGVtID0gdGhpcy5wYXJzZU5ld0xpbmVJdGVtKHRva2VucywgY3Vyc29yKTtcblx0XHRpZiAobmV3TGluZUl0ZW0gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbmV3TGluZUl0ZW07XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VQYXJhZ3JhcGhJdGVtKHRva2VucywgY3Vyc29yKSB7XG5cdFx0bGV0IGl0ZW1zID0gW107XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGxldCBpdGVtID0gdGhpcy5wYXJzZVBhcmFncmFwaFN1Yml0ZW0odG9rZW5zLCBjdXJzb3IpO1xuXHRcdFx0aWYgKGl0ZW0gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBuZXcgUGFyYWdyYXBoSXRlbShpdGVtcyk7XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VTZWN0aW9uSXRlbSh0b2tlbnMsIGN1cnNvciwgbWluTGV2ZWwpIHtcblx0XHRsZXQgb2xkQ3Vyc29yID0gY3Vyc29yLmluZGV4OyAvLyBtYWtlIGFuIGFjdHVhbCBjb3B5IG9mIHRoZSBpbmRleCAob2xkY3Vyc29yID0gY3Vyc29yIHdvdWxkIG5vdCB3b3JrIGJlY2F1c2Ugb2YgcmVmZXJlbmNlIHNlbWFudGljcylcblx0XHRsZXQgdGl0bGVJdGVtID0gdGhpcy5wYXJzZVRpdGxlSXRlbSh0b2tlbnMsIGN1cnNvcik7XG5cdFx0aWYgKHRpdGxlSXRlbSA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICh0aXRsZUl0ZW0ubGV2ZWwgPiBtaW5MZXZlbCkge1xuXHRcdFx0bGV0IGl0ZW1zID0gW107XG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRsZXQgaXRlbSA9IHRoaXMucGFyc2VTZWN0aW9uU3ViSXRlbSh0b2tlbnMsIGN1cnNvciwgdGl0bGVJdGVtLmxldmVsKTtcblx0XHRcdFx0aWYgKGl0ZW0gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0aXRlbXMucHVzaChpdGVtKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBTZWN0aW9uSXRlbSh0aXRsZUl0ZW0sIHRpdGxlSXRlbS5sZXZlbCwgaXRlbXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRpdGxlSXRlbTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y3Vyc29yLmluZGV4ID0gb2xkQ3Vyc29yO1xuXHR9XG5cblx0cGFyc2VTZWN0aW9uU3ViSXRlbSh0b2tlbnMsIGN1cnNvciwgbWluTGV2ZWwpIHtcblx0XHRsZXQgcGFyYWdyYXBoSXRlbSA9IHRoaXMucGFyc2VQYXJhZ3JhcGhJdGVtKHRva2VucywgY3Vyc29yKTtcblx0XHRpZiAocGFyYWdyYXBoSXRlbSAhPSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBwYXJhZ3JhcGhJdGVtO1xuXHRcdH1cblx0XHRsZXQgc2VjdGlvbkl0ZW0gPSB0aGlzLnBhcnNlU2VjdGlvbkl0ZW0odG9rZW5zLCBjdXJzb3IsIG1pbkxldmVsKTtcblx0XHRpZiAoc2VjdGlvbkl0ZW0gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gc2VjdGlvbkl0ZW07XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VEb2N1bWVudFN1Yml0ZW0odG9rZW5zLCBjdXJzb3IpIHtcblx0XHRsZXQgc2VjdGlvbkl0ZW0gPSB0aGlzLnBhcnNlU2VjdGlvbkl0ZW0odG9rZW5zLCBjdXJzb3IsIDApO1xuXHRcdGlmIChzZWN0aW9uSXRlbSAhPSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBzZWN0aW9uSXRlbTtcblx0XHR9XG5cdFx0bGV0IHBhcmFncmFwaEl0ZW0gPSB0aGlzLnBhcnNlUGFyYWdyYXBoSXRlbSh0b2tlbnMsIGN1cnNvcik7XG5cdFx0aWYgKHBhcmFncmFwaEl0ZW0gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gcGFyYWdyYXBoSXRlbTtcblx0XHR9XHRcblx0fVxuXG5cdHBhcnNlTWFya2Rvd25Eb2N1bWVudEl0ZW0odG9rZW5zLCBjdXJzb3IpIHtcblx0XHRsZXQgaXRlbXMgPSBbXTtcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnBhcnNlRG9jdW1lbnRTdWJpdGVtKHRva2VucywgY3Vyc29yKTtcblx0XHRcdGlmIChpdGVtICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpdGVtcy5wdXNoKGl0ZW0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE1hcmtkb3duRG9jdW1lbnRJdGVtKGl0ZW1zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHtQYXJzZXJ9O1xuXG5cbi8qXG4gIyBTZWN0aW9uIDFcXG5Tb21lICoqKGJvbGQpIGludHJvZHVjdGlvbioqIHRvIFNlY3Rpb24gMS5cXG4jIyBTZWN0aW9uIDEuMVxcbkEgdGV4dCBkZXNjcmliaW5nIFNlY3Rpb24gMS4xXFxuU29tZSBjb25jbHVzaW9uIHRvIFNlY3Rpb24gMS5cXG4jIFNlY3Rpb24gMlxcbkFuIGludHJvZHVjdGlvbiB0byBTZWN0aW9uIDIuXFxuU29tZSBjb25jbHVzaW9uIHRvIFNlY3Rpb24gMi4gXG4gSEFTSCBURVhUIE5FV0xJTkUgQk9MRCBURVhUIEJPTEQgVEVYVCBORVdMSU5FIEhBU0ggSEFTSCBURVhUIE5FV0xJTkUgVEVYVCBORVdMSU5FIFRFWFQgTkVXTElORSBIQVNIIFRFWFQgTkVXTElORSBURVhUIE5FV0xJTkUgVEVYVFxuXG5tYXJrdXBfZG9jdW1lbnRfaXRlbVxuXHRbZG9jdW1lbnRfc3ViaXRlbV1cblxuZG9jdW1lbnRfc3ViaXRlbVxuXHRzZWN0aW9uX2l0ZW1cblx0cGFyYWdyYXBoX2l0ZW1cblxuc2VjdGlvbl9pdGVtIFxuXHR0aXRsZV9pdGVtIFtzZWN0aW9uX3N1Yml0ZW1dXG5cbnRpdGxlX2l0ZW1cblx0SEFTSCBURVhUIE5FV0xJTkVcblxuc2VjdGlvbl9zdWJpdGVtXG5cdHBhcmFncmFwaF9pdGVtXG5cdHNlY3Rpb25faXRlbVxuXG5wYXJhZ3JhcGhfaXRlbVxuXHRbcGFyYWdyYXBoX3N1Yml0ZW1dXG5cbnBhcmFncmFwaF9zdWJpdGVtXG5cdHBsYWludGV4dF9pdGVtXG5cdGJvbGR0ZXh0X2l0ZW1cblx0bmV3bGluZV9pdGVtXG5cbnBsYWludGV4dF9pdGVtXG5cdFRFWFRcblxuYm9sZHRleHRfaXRlbVxuXHRCT0xEIFRFWFQgQk9MRFxuXG5uZXdsaW5lX2l0ZW1cblx0TkxcbiAqLyJdLCJzb3VyY2VSb290IjoiIn0=