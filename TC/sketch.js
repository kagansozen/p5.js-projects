function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  stroke(200,0,0)
  noFill()
  triangle(100, 300, 300, 300, 200, 100)
  
  stroke(200,0,0)
  noFill()
  triangle(300, 100, 100, 100, 200, 300)
  saveFrames()
}