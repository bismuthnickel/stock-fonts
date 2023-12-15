const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = screen.width;
canvas.height = screen.height;

var eurostile = new FontFace("eurostile","url(eurostileextendedblack.otf)")
var microgramma = new FontFace("microgramma","url(Microgramma.ttf)")
var futura = new FontFace("futura medium","url(FuturaMedium.otf)")

eurostile.load().then(function(font){

    // with canvas, if this is ommited won't work
    document.fonts.add(font);
    console.log('Font loaded');
  
});

microgramma.load().then(function(font){

    // with canvas, if this is ommited won't work
    document.fonts.add(font);
    console.log('Font loaded');
  
});

futura.load().then(function(font){

    // with canvas, if this is ommited won't work
    document.fonts.add(font);
    console.log('Font loaded');
  
});

function createText() {
    var tex = document.getElementById("tex")
    var sel = document.getElementById("fonts")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "72px ".concat(sel.value);
    ctx.fillText(tex.value, 0, 47);
}