/*

author: jesse mann <jmann.design>
name: altNulls
description: automatically align text vertically.

written for adobe after effects cc 2026 (version 26.5.0 build 89)

license: this script is provided "as is," without warranty of any kind, expressed or implied.
-------- in no event shall the author be held liable for any damages arising in any way from the use of this script.

*/

function vAlignText() {

    app.beginUndoGroup("vAlignText");

    var project = app.project;
    var comp = app.project.activeItem;

    var layer = comp.selectedLayers[0];  
    var anchor = layer.transform.anchorPoint;
        anchor.expression = "var a = thisLayer.sourceRectAtTime();\nvar h = a.height;\nvar w = a.width;\nvar t = a.top;\nvar l = a.left;\r\rvar x = l + w / 2;\nvar y = t + h / 2;\r\r[x, y];";

    var position = layer.transform.position
        position.expression = "thisComp.width / 2, thisComp.height / 2;"
    
    app.endUndoGroup();

}

vAlignText()
