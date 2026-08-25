/*

author: jesse mann <jmann.design>
name: altNulls
description: an alternative to native ae nulls.

written for adobe after effects cc 2026 (version 26.3.0 build 87)

license: This script is provided "as is," without warranty of any kind, expressed or implied.
-------- In no event shall the author be held liable for any damages arising in any way from the use of this script.

*/

var project = app.project;
var comp = project.activeItem;

app.beginUndoGroup("process");

if(comp == null) {
    alert("please select a comp!")
}

comp.openInViewer();

// generate shape layer

var shapeLayer = comp.layers.addShape();
    shapeLayer.name = "▣ altNull - "

var shapeGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group")
    shapeGroup.name = "▣ altNull";

// add shape properties

var pathGroup = shapeLayer.property("Contents").property("▣ altNull").property("Contents").addProperty("ADBE Vector Shape - Rect");

// stroke

var strokeGroup = shapeLayer.property("Contents").property("▣ altNull").property("Contents").addProperty("ADBE Vector Graphic - Stroke");
    strokeGroup.property("ADBE Vector Stroke Width").setValue(1);

app.endUndoGroup();
