/*

author: jesse mann <jmann.design>
name: wiggleRig
description: applies wiggle expression to position and adds controls.

written for adobe after effects cc 2026 (version 26.5.0 build 89)

license: this script is provided "as is," without warranty of any kind, expressed or implied.
-------- in no event shall the author be held liable for any damages arising in any way from the use of this script.

*/

var project = app.project;
var comp = app.project.activeItem;
var selectedLayer = comp.selectedLayers;

function wiggleRig() {
    app.beginUndoGroup("create wiggle rig");
    app.endUndoGroup();
}

wiggleRig()
