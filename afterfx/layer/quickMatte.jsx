/*

author: jesse mann <jmann.design>
name: quickMatte
description: set the selected layer's track matte to the layer directly above.

written for adobe after effects cc 2026 (version 26.5.0 build 89)

license: this script is provided "as is," without warranty of any kind, expressed or implied.
-------- in no event shall the author be held liable for any damages arising in any way from the use of this script.

*/

function matteLayer() {

    app.beginUndoGroup("set track matte");

    var comp = app.project.activeItem;
    var currentLayer = comp.selectedLayers[0];
    var matteName = "\u25D1 matte-" + currentLayer.name;

    // matte layer properties

    var matteLayer = comp.layer(currentLayer.index - 1);
        matteLayer.shy = true;
        matteLayer.label = 14;
        matteLayer.name = matteName;

    // set colour if matte later is a shape layer

    if (matteLayer instanceof ShapeLayer) {

        var r = 237 / 255;
        var g = 109 / 255;
        var b = 122 / 255;

        var matteGroup = comp.layer(1).property("ADBE Root Vectors Group").property(1);
            matteGroup.name = matteName;

        var matteFill = matteGroup.property("ADBE Vectors Group").property(2).property("ADBE Vector Fill Color");
            matteFill.setValue([r, g, b]);

    }

    // set track matte

    var layers = comp.selectedLayers;
    var numLayers = layers.length;

    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
            layer.setTrackMatte(comp.layers[layer.index - 1], TrackMatteType.ALPHA);
    }

    app.endUndoGroup();
}

matteLayer();
