function Boundary(position, range) {
  this.position = position;
  this.range = new Vector2(range.x, range.y)
}


Boundary.prototype.repel = function(character) {
    if ((this.position.x) <= (character.position.x + character.origin.x * 2) &&   // left
    (this.position.x + this.range.x * 2) >=  (character.position.x) &&   // right
    (this.position.y) <= (character.position.y + character.origin.y * 2) &&  // top
    (this.position.y + this.range.y * 2) >= (character.position.y)){   // bottom
      character.position.x -= character.velocity.x
      character.position.y -= character.velocity.y
    }
}



GameWorld.prototype.drawBoundaryTiles = function() {


  this.boundaries = this.boundaries.filter((a) => a)

  for (var i=0; i < this.boundaryLayout.length; i++) {


    var row = Math.floor(i / this.tilesX) + 3;
    var col = i % this.tilesX;

    var position = new Vector2(col * this.tileWidth, row * this.tileHeight)
    if (this.boundaryLayout[i] === 1) {
      this.boundaries.push(new Boundary(position, new Vector2(25, 25)))
    }



   
  }

}

GameWorld.prototype.drawBoundaryLayout = function(sectionID) {


  var g = 0;
  var b = 1;

  
  if (sectionID === 1) {
    this.boundaryLayout = new Array(
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g
    )
  }
  
  else if (sectionID === 2) {
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
    g,g,g,b,b,b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g
  }

  else {
    this.boundaryLayout = new Array(
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
 

  this.drawBoundaryTiles()

}




