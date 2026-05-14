var myWindow = new Window("palette", "Checklist - v0.26.05.14", undefined);
myWindow.orientation = "column";

var text = myWindow.add("statictext", undefined, "This is my text");

var group = myWindow.add("group", undefined, "");
group.orientation = "row";
var buttonOne = group.add("button", undefined, "save");
var buttonTwo = group.add("button", undefined, "import");

// var panel = myWindow.add("panel", undefined, "my panel");
// panel.orientation = "row";
// var textBox = myWindow.add("edittext", undefined, "my list");
// textBox.size = [200, 150];

myWindow.center();
myWindow.show();

buttonTwo.onClick = function() {
  importTextFile();
}

function importTextFile() {
  var importedFile = File.openDialog("Please choose a file");
  var importedItem = app.project.importFile(new ImportOptions(importedFile));

 // app.project.activeItem.layers.add(importedItem)
  
}