/*

author: jesse mann <jmann.design>
name: altNulls
description: a shape layer alternative to native ae nulls.

written for adobe after effects cc 2026 (version 26.3.0 build 87)

license: This script is provided "as is," without warranty of any kind, expressed or implied.
-------- In no event shall the author be held liable for any damages arising in any way from the use of this script.

steps:
- copy selected layer name
- create null with selected layer name
    - guide layer ✓
    - dashed lines
    - null label colour ✓
    - shy ✓
- parent selected layer to null

*/

function newAltNull() {

    app.beginUndoGroup("create null alternative");

    var project = app.project;
    var comp = app.project.activeItem;


    if(comp == null) {
    alert("please select a layer in a comp!")
    }

    comp.openInViewer();

    // generate shape layer

    var shapeLayer = comp.layers.addShape();
        shapeLayer.name = "▣ altNull-"
        shapeLayer.guideLayer = true;
        shapeLayer.shy = true;
        shapeLayer.label = 14;

    var shapeGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group")
        shapeGroup.name = "▣ altNull";

    // add shape properties

    var pathGroup = shapeLayer.property("Contents").property("▣ altNull").property("Contents").addProperty("ADBE Vector Shape - Rect");

    // stroke

    var strokeGroup = shapeLayer.property("Contents").property("▣ altNull").property("Contents").addProperty("ADBE Vector Graphic - Stroke");
    var stroke=strokeGroup.property("ADBE Vector Stroke Width");
        stroke.setValue(1);
        stroke.expression = "value / Math.max(length(toComp([0,0]), toComp([0.7071,0.7071])), 0.001);";

    var strokeGroupDash = strokeGroup.property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Dash 1");
        strokeGroupDash.setValue(5);

    app.endUndoGroup();
}

newAltNull()
