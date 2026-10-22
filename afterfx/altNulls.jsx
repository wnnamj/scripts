/*

author: jesse mann <jmann.design>
name: altNulls
description: a shape layer alternative to native ae nulls.

written for adobe after effects cc 2026 (version 26.5.0 build 89)

license: this script is provided "as is," without warranty of any kind, expressed or implied.
-------- in no event shall the author be held liable for any damages arising in any way from the use of this script.

*/


var project = app.project;
var comp = app.project.activeItem;
var nullName = "\u25a3 altNull";
var selectedLayer = comp.selectedLayers;

var r = 237 / 255;
var g = 109 / 255;
var b = 122 / 255;

function newAltNull() {
    app.beginUndoGroup("create null alternative");

    if(comp == null) {
        alert("Please select a in a comp!");
        return;
    } else {
        comp.openInViewer();

        function createAltNull (nullLayerName, nullPosValue) {
            var nullCtrlFFX = new File("~/Documents/Projects/repositories/scripts/afterfx/altNative/altNulls.ffx");

            var shapeLayer = comp.layers.addShape();
                shapeLayer.guideLayer = true;
                shapeLayer.name = nullLayerName
                shapeLayer.shy = true;
                shapeLayer.label = 14;
                shapeLayer.applyPreset(nullCtrlFFX);
                shapeLayer.property("Transform").property("Position").setValue(nullPosValue);

            var shapeGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group");
                shapeGroup.name = nullName;

            var nullVisibility = shapeGroup.property("ADBE Vector Transform Group").property("ADBE Vector Group Opacity");
                nullVisibility.expression = 'try{\n\tvar $checkBox = effect("altNull")("visible");\n\tif ($checkBox == 1) 100\n\t\telse 0;\n} catch (e) { value };'

            var pathGroup = shapeLayer.property("Contents").property(nullName).property("Contents").addProperty("ADBE Vector Shape - Rect");

            var nullSize = pathGroup.property("ADBE Vector Rect Size");
                nullSize.expression = 'try {\n\t[effect("altNull")("width"), effect("altNull")("height")];\n} catch (e) { value };'

            var nullPos = pathGroup.property("ADBE Vector Rect Position");
                nullPos.expression = 'try {\n\t[effect("altNull")("offset - x"), effect("altNull")("offset - y")];\n} catch (e) { value };'

            var nullRoundness = pathGroup.property("ADBE Vector Rect Roundness");
                nullRoundness.expression = 'try {\n\teffect("altNull")("roundess");\n} catch (e) { value };'

            var strokeGroup = shapeLayer.property("Contents").property(nullName).property("Contents").addProperty("ADBE Vector Graphic - Stroke");

            var strokeCol = strokeGroup.property("ADBE Vector Stroke Color");
               strokeCol.setValue([r, g, b]);
            
            var stroke = strokeGroup.property("ADBE Vector Stroke Width");
                stroke.setValue(3);
                stroke.expression = "value / Math.max(length(toComp([0,0]), toComp([0.7071,0.7071])), 0.001);";

            var strokeGroupDash = strokeGroup.property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Dash 1");
                strokeGroupDash.setValue(7);

            app.executeCommand(2387);
        }

        if (comp.selectedLayers.length === 0) {
            // not selected
            var compCenter = [comp.width / 2, comp.height / 2];

            createAltNull(nullName, compCenter);
            // shapeLayer.moveToBeginning()
        } else {
            // selected
            var nullPos = selectedLayer[0].property("Transform").property("Position").value;
            var selLayerNull = nullName + "-" + selectedLayer[0].name;
            createAltNull(selLayerNull, nullPos);
        }
    }
    app.endUndoGroup();
}

newAltNull()
