function Decoration(type, position, origin, scale) {
  this.type = type;
  this.position = position;
  this.origin = origin;
  this.scale = scale;
}

Decoration.prototype.draw = function() {
  Canvas.drawImage(this.type, this.position, 0, this.scale, this.origin);
}

GameWorld.prototype.executeLayout = function() {
 
  for (var i=0; i < this.decoLayout.length; i++) {

    var row = Math.floor(i / this.tilesX);
    var col = i % this.tilesX;

    var position = new Vector2(col * this.tileWidth, row * this.tileHeight + 100)
    if (this.decoLayout[i] === 1) {
    var origin = new Vector2(0, 0)
    this.frontDecorations.push(new Decoration(sprites.decoration['bush1_top'].green, position, origin, 0.5));
    this.backDecorations.push(new Decoration(sprites.decoration['bush1_bottom'].green, 
    new Vector2(position.x, position.y + 20), origin, 0.5));
    this.boundaries.push(new Boundary(new Vector2(position.x + 20, position.y + 40), new Vector2(20.25, 3.25)));
  }
  
  else if (this.decoLayout[i] === 2) {
    var origin = new Vector2(0, 0)
    this.backDecorations.push(new Decoration(sprites.decoration['tree_trunk'], 
    new Vector2(position.x + 20, position.y + 85), origin, 0.5));
    this.frontDecorations.push(new Decoration(sprites.decoration['tree_top'].green, position, origin, 0.5))
    this.boundaries.push(new Boundary(new Vector2(position.x + 40, position.y + 120), new Vector2(41.5, 10.5)))
  }

  else if (this.decoLayout[i] === 4) {
    
    var origin = new Vector2(0, 0);
    this.backDecorations.push(new Decoration(sprites.decoration['weeds1'].green, position, origin, 0.15))
  }
  else if (this.decoLayout[i] === 5) {
    
    var origin = new Vector2(0, 0);
    this.backDecorations.push(new Decoration(sprites.decoration['weeds2'].green, position, origin, 0.5))
  }
  else if (this.decoLayout[i] === 6) {
    this.origin = new Vector2(0, 0)
    this.backDecorations.push(new Decoration(sprites.decoration['rock1'], position, origin, 0.50))
    this.boundaries.push(new Boundary(new Vector2(position.x + 20, position.y + 30), new Vector2(47 * 0.5, 25 * 0.5)))

  }

  else if (this.decoLayout[i] === 7) {
    this.origin = new Vector2(0, 0);
    this.backDecorations.push(new Decoration(sprites.decoration["bush2_bottom"].green, position, origin, 0.20));
    this.frontDecorations.push(new Decoration(sprites.decoration["bush2_top"].green, position, origin, 0.20));
    this.boundaries.push(new Boundary(new Vector2(position.x + 18, position.y + 40), new Vector2(20.25, 3.25)));

  }
  
  else if (this.decoLayout[i] === 8) {
    this.origin = new Vector2(0, 0);
    this.backDecorations.push(new Decoration(sprites.decoration["pine_tree_bottom"].green, position, origin, 0.5));
    this.frontDecorations.push(new Decoration(sprites.decoration["pine_tree_top"].green, position, origin, 0.5));
    this.boundaries.push(new Boundary(new Vector2(position.x + 35, position.y + 130), new Vector2(20, 5)))
  }

}
}


GameWorld.prototype.drawDecoLayout = function(sectionID) {
for (var i=0; i<this.frontDecorations.length; i++) {
  this.frontDecorations[i] = null
}
for (var i=0; i<this.backDecorations.length; i++) {
  this.backDecorations[i] = null
}
this.backDecorations = this.backDecorations.filter((a) => a);
this.frontDecorations = this.frontDecorations.filter((a) => a)
var g = 0;
var r = 0;
  var a = 1,
      b = 2,
      c = 3,
      d = 4,
      e = 5,
      f = 6,
      h = 7,
      i = 8
if (sectionID === 1) {
  this.decoLayout = new Array(
    g,d,g,r,r,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,r,r,r,g,g,b,g,g,g,g,h,g,g,g,g,g,g,g,a,g,g,g,g,
    e,a,g,r,r,r,g,g,g,g,g,g,g,g,g,g,i,g,g,g,d,g,g,g,g,g,
    g,g,g,r,r,r,g,e,g,g,g,a,g,g,d,g,g,g,g,d,g,g,b,g,d,g,
    b,g,g,r,r,r,g,g,e,g,g,g,g,e,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,r,r,r,g,g,g,g,g,g,b,g,g,g,g,e,g,g,g,g,g,g,h,g,
    g,g,g,r,r,r,g,g,g,d,g,g,g,g,g,a,g,g,g,g,b,g,g,g,g,g,
    g,g,e,r,r,r,g,i,g,g,g,g,g,g,g,f,g,g,g,g,g,g,g,g,g,g,
    g,a,g,r,r,r,g,g,g,g,g,g,e,g,g,g,g,b,g,g,g,g,g,g,g,g,
    d,g,g,r,r,r,g,g,g,d,g,g,g,h,g,g,e,g,g,g,g,g,g,e,g,g,
    g,h,g,r,r,r,g,g,a,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g

  )                               // f = rock 1
}

else {
  this.decoLayout = new Array(
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,

  )         
}
  this.executeLayout()
}

