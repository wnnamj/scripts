/*

author: jesse mann <jmann.design>
name: aeCalc
description: a basic calculator pop-up.

written for adobe after effects cc 2026 (version 26.0.0 build 67)

license: This script is provided "as is," without warranty of any kind, expressed or implied.
-------- In no event shall the author be held liable for any damages arising in any way from the use of this script.

*/

var panelMargin = 20;
var panelSpacing = 12 * 1.13;

var buttonSizeW = 130;
var buttonSizeH = 30;

// window

var myWindow = new Window("palette", "ae calc", undefined);
myWindow.orientation = "column";
myWindow.alignChildren = ["center", "center"];
myWindow.margins = panelMargin;
myWindow.spacing = panelSpacing;

var text = myWindow.add("statictext", undefined, "calc is short for calculator",);

var groupOne = myWindow.add("group", undefined, "");
groupOne.orientation = "row";

// first number input

var calcInputOne = groupOne.add('edittext {justify: "center", properties: {name: "calcInputOne", borderless: true}}',);
calcInputOne.text = 0;
calcInputOne.preferredSize.width = buttonSizeW / 2.5;
calcInputOne.preferredSize.height = buttonSizeH;

// math symbol

var mathSymbolArray = ["addition", "subtraction", "multiplication", "division",];

//var mathSymbolText = groupOne.add("statictext", undefined, "+");
var mathSymbolText = groupOne.add("statictext", undefined, "+");
// var mathSymbolText = groupOne.add("statictext", undefined, "-");
// var mathSymbolText = groupOne.add("statictext", undefined, "x");
// var mathSymbolText = groupOne.add("statictext", undefined, "÷");

// second number input

var calcInputTwo = groupOne.add('edittext {justify: "center", properties: {name: "calcInputTwo", borderless: true}}',);
calcInputTwo.text = 0;
calcInputTwo.preferredSize.width = buttonSizeW / 2.5;
calcInputTwo.preferredSize.height = buttonSizeH;
calcInputTwo.alignment = ["center", "center"];

// new group: buttons

var groupTwo = myWindow.add("group", undefined, "");
groupTwo.orientation = "column";

// calculation button

var calcButton = groupTwo.add("button", undefined, "");
calcButton.text = "calculate";
calcButton.preferredSize.width = buttonSizeW;
calcButton.preferredSize.height = buttonSizeH;

// divider

var divider = myWindow.add("panel", undefined, undefined, { name: "divider" });
divider.alignment = "fill";

// dropdown menu

var mathTypeDropdownArray = ["addition", "subtraction", "multiplication", "division",];

var mathTypeDropdown = myWindow.add("dropdownlist", undefined, undefined, { name: "mathTypeDropdown", items: mathTypeDropdownArray, });
mathTypeDropdown.selection = "0";
mathTypeDropdown.preferredSize.width = buttonSizeW;
mathTypeDropdown.preferredSize.height = buttonSizeH;

myWindow.center();
myWindow.show();

// final calculation

calcButton.onClick = getEquation;

// functions

// final calculation

function getEquation() {
    var a = Number(calcInputOne.text);
    var b = Number(calcInputTwo.text);
    // var a = 5;
    // var b = 3;
    var calculation = calc(a, b);

    alert(calculation);
}

// calculation formula

function calc(calcNum1, calcNum2) {
    if (mathTypeDropdown.selection == "0") {
        return calcNum1 + calcNum2;
    } else if (mathTypeDropdown.selection == "1") {
        return calcNum1 - calcNum2;
    } else if (mathTypeDropdown.selection == "2") {
        return calcNum1 * calcNum2;
    } else if (mathTypeDropdown.selection == "3") {
        return calcNum1 / calcNum2;
    }
}

function mathSymbol() {
    if (mathTypeDropdown.selection == "0") {
        groupOne.add("statictext", undefined, "+");
    } else if (mathTypeDropdown.selection == 1) {
        groupOne.add("statictext", undefined, "-");
    } else if (mathTypeDropdown.selection == "2") {
        groupOne.add("statictext", undefined, "x");
    } else if (mathTypeDropdown.selection == "3") {
        groupOne.add("statictext", undefined, "/");
    }
}
