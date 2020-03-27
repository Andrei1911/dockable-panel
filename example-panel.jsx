function createDockableUI(thisObj) {
    var dialog =
        thisObj instanceof Panel
            ? thisObj
            : new Window("window", undefined, undefined, { resizeable: true });
    dialog.onResizing = dialog.onResize = function() {
        this.layout.resize();
    };
    return dialog;
}
function showWindow(myWindow) {
    if (myWindow instanceof Window) {
        myWindow.center();
        myWindow.show();
    }
    if (myWindow instanceof Panel) {
        myWindow.layout.layout(true);
        myWindow.layout.resize();
    }
}
//Paste code here
// WIN
// ===

var win = createDockableUI(this);
win.text = "My Script";
win.orientation = "column";
win.alignChildren = ["center", "top"];
win.spacing = 10;
win.margins = 16;

var statictext1 = win.add("statictext", undefined, undefined, {
    name: "statictext1"
});
statictext1.text = "Was this good?";

// GROUP1
// ======
var group1 = win.add("group", undefined, { name: "group1" });
group1.orientation = "row";
group1.alignChildren = ["left", "center"];
group1.spacing = 10;
group1.margins = 0;

var radiobutton1 = group1.add("radiobutton", undefined, undefined, {
    name: "radiobutton1"
});
radiobutton1.text = "Yes";
radiobutton1.value = true;

var radiobutton2 = group1.add("radiobutton", undefined, undefined, {
    name: "radiobutton2"
});
radiobutton2.text = "No";
//===============
showWindow(win);
