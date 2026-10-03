/*

author: jesse mann <jmann.design>
name: altSolids
description: a shape layer alternative to native ae solids.

written for adobe after effects cc 2026 (version 26.5.0 build 89)

license: this script is provided "as is," without warranty of any kind, expressed or implied.
-------- in no event shall the author be held liable for any damages arising in any way from the use of this script.

*/

function newAltSolid() {

    app.beginUndoGroup("create adjustment layer alternative");

    var project = app.project;
    var comp = app.project.activeItem;
    var solidName = "◈ altSolid"

    if(comp == null) {
        alert("Please select a comp!");
        return;
    } else {

        comp.openInViewer();

        // generate shape layer

        var shapeLayer = comp.layers.addShape();
            shapeLayer.name = solidName;
            shapeLayer.shy = true;
            shapeLayer.label = 14;

        var shapeGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group")
            shapeGroup.name = solidName;
        
        // add shape properties

        var contents = shapeLayer.property("Contents").property(solidName).property("Contents")
        var solidRect = contents.addProperty("ADBE Vector Shape - Rect");
            pathGroup = solidRect.property("ADBE Vector Rect Size");
            pathGroup.expression = "[thisComp.width, thisComp.height]";

        var fill = contents.addProperty("ADBE Vector Graphic - Fill");
            fill.property("ADBE Vector Fill Color").setValue([1, 0, 0]);
            fill.property("ADBE Vector Fill Opacity").setValue(100);
           // layer("Shape Layer 1")("ADBE Root Vectors Group")("ADBE Vector Group")("ADBE Vectors Group")("ADBE Vector Graphic - Fill")

    }

        app.endUndoGroup();
}

newAltSolid()
