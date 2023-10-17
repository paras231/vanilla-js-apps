const url =
  "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&w=500";

const text_elem = document.getElementById("text_elem");

function getFabricValue() {
  const f = window.fabric;
  const rect = new f.Rect({
    width: 1400,
    height: 400,
    fill: "Yellow",
  });
  const canvas = new fabric.Canvas("c", {
    backgroundColor: "rgb(100,100,200)",
    selectionColor: "blue",
    selectionLineWidth: 2,
    width: 800,
    height: 400,
    // ...
  });
  rect.set("selectable", false);
  canvas.add(rect);
  drawImage(url, f, canvas);
  writeText(f, canvas);

  createGroup(f, canvas);
  canvas.renderAll();
}

// draws image on canvas
function drawImage(img_url, fabric, canvas) {
  let img;
  fabric.Image.fromURL(img_url, function (oImg) {
    canvas.add(oImg);
    img = oImg;
  });
  return img;
}

function writeText(fabric, canvas) {
  let t;
  text_elem.oninput = function () {
    console.log(text_elem.value);
    const text = new fabric.Text(text_elem.value, {
      left: 100,
      top: 100,
    });
    text.bringToFront();
    canvas.add(text);
    t = text;
  };
  return t;
}

function createGroup(fabric, canvas, img, text) {
  const group = new fabric.Group([url, "hello world"], {
    left: 50,
    top: 50,
  });
  canvas.add(group);
}

window.addEventListener("DOMContentLoaded", getFabricValue);
