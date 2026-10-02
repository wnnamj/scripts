/*

author: jesse mann <jmann.design>
name: altAdjusts
description: a shape layer alternative to native ae adjustment layers.

written for adobe after effects cc 2026 (version 26.5.0 build 89)

license: this script is provided "as is," without warranty of any kind, expressed or implied.
-------- in no event shall the author be held liable for any damages arising in any way from the use of this script.

*/

function newAltAdjust() {

    app.beginUndoGroup("create adjustment layer alternative");

    var project = app.project;
    var comp = app.project.activeItem;
    var adjustName = "◉ altAdjust"

    if(comp == null) {
        alert("Please select a comp!");
        return;
    } else {

        comp.openInViewer();

        // generate shape layer

        var shapeLayer = comp.layers.addShape();
            shapeLayer.name = adjustName;
            shapeLayer.adjustmentLayer = true;
            shapeLayer.shy = true;
            shapeLayer.label = 14;

        var shapeGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group")
            shapeGroup.name = adjustName;
        

        // add shape properties

        var pathGroup = shapeLayer.property("Contents").property(adjustName).property("Contents").addProperty("ADBE Vector Shape - Rect");
        var pathGroupGroup = pathGroup.property("ADBE Vector Rect Size");
            pathGroupGroup.expression = "[thisComp.width, thisComp.height]";

    }

        app.endUndoGroup();
}

newAltAdjust()
