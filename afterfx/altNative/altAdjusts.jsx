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
    var adjustName = "\u25c9 altAdjust"

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

        var contents = shapeLayer.property("Contents").property(adjustName).property("Contents")
        var adjustRect = contents.addProperty("ADBE Vector Shape - Rect");
            pathGroup = adjustRect.property("ADBE Vector Rect Size");
            pathGroup.expression = "[thisComp.width, thisComp.height]";

        var fill = contents.addProperty("ADBE Vector Graphic - Fill");

    }

        app.endUndoGroup();
}

newAltAdjust()
