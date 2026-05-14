// np productions - ae scripting beginners tutorial [2022]
// link to original video: https://youtu.be/DTBtfFiyjNU?si=dovIPzF_yKU7MUM1

var myWindow = new Window("palette", "My Window", undefined);
myWindow.orientation = "column";

var text = myWindow.add("statictext", undefined, "This is my text");

var group = myWindow.add("group", undefined, "");
group.orientation = "column";
var buttonOne = group.add("button", undefined, "Button 01");
var buttonTwo = group.add("button", undefined, "Button 02");

var array = ["test 01", "test 02", "test 03"];

var dropdown = myWindow.add("dropdownlist", undefined, array);
dropdown.selection = 0;
dropdown.size = [180, 25];

var panel = myWindow.add("panel", undefined, "my panel");
panel.orientation = "row";
var radio = panel.add("radiobutton", undefined, "radio");
var checkbox = panel.add("checkbox", undefined, "checkbox");

var textBox = myWindow.add("edittext", undefined, "my input");
textBox.size = [180, 25];

var slider = myWindow.add("slider", undefined, "");

dropdown.add("item", "my extra item")

myWindow.center();
myWindow.show();

buttonOne.onClick = function() {
  modifyLayers();
}

buttonTwo.onClick = function() {
  importAndAdd();
}

function modifyLayers() {
  if(app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
  alert("you have no comp selected");
  return false;
  }
  
  app.beginUndoGroup("my process");

  var composition = app.project.activeItem;
  var layer = composition.layer(1);
  
  layer.property("ADBE Transform Group").property("ADBE Position").setValue([1000, 1000]);
  layer.property("ADBE Transform Group").property("ADBE Scale").setValue([200, 200]);
  layer.property("ADBE Transform Group").property("ADBE Opacity").expression = 'wiggle(3, 30)';
  
  composition.width = 500;
  composition.height = 1000;
  composition.name = "my composition";
  
  var myEffect = layer.Effects.addProperty("ADBE Exposure2");
  myEffect.property(3).setValue(2);
  
  app.endUndoGroup("");
}

function importAndAdd() {
  var myVideoFile = File("/Users/jessemann/Desktop/vhs-overlay-02.mp4");
  var videoItem = app.project.importFile(new ImportOptions(myVideoFile));
  
  for(var i = 0; i < 100; i++) {
    app.project.activeItem.layers.add(videoItem);
  }

}