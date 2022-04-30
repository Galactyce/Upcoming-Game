


GameWorld.prototype.drawWaterLayout = function(id) { // 26 by 14
  var g = 0,
  r = 1,
  c = 2,
  l = 3,
  t = 4,
  b = 5,
  i = 6,
  k = 7,
  n = 8,
  s = 9,
  m = 10,
  e = 11,
  y = 12

    if (id === 1) {
      this.waterLayout = new Array( 
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // l = left side
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // c = center 
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // r = right side
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // t = top side
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // b = bottom side
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // i = corner top left
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // k = corner top right
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // n = bottom right piece
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // s = center sideways
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,  // m = top right piece
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g   // e = corner bottom right
    );                                                      // y = top left piece
    }

    else if (id === 2) {
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,
      g,g,g,l,c,r,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g
    }
   
    else {
      this.waterLayout = new Array(
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

      );      
    }  
         
  this.drawWaterTiles()                 
 }

GameWorld.prototype.clearWaterTiles = function() {
  for (var i=0; i < this.riverTiles.length; i++) {
    this.riverTiles[i] = null;
  
  }
  this.riverTiles = this.riverTiles.filter((a) => a)

}

GameWorld.prototype.drawWaterTiles = function() {
 
  this.riverTiles = this.riverTiles.filter((a) => a)

  for (var i=0; i < this.waterLayout.length; i++) {
    var index = this.terrainTiles[i].index;
    if (index < 0) {
      index = 0
    }

    var row = Math.floor(i / this.tilesX) + 3;
    var col = i % this.tilesX;

    var position = new Vector2(col * this.tileWidth, row * this.tileHeight - 25)

    if (this.waterLayout[i] === 1) {
      this.riverTiles.push(new Tile('river_right', position, index))

    }
    if (this.waterLayout[i] === 2) {
      this.riverTiles.push(new Tile('water_center', position, index))

    }
    if (this.waterLayout[i] === 3) {
      this.riverTiles.push(new Tile('river_left', position, index))


    }
    if (this.waterLayout[i] === 4) {
      this.riverTiles.push(new Tile('river_top', position, index))


    }
    if (this.waterLayout[i] === 5) {
      this.riverTiles.push(new Tile('river_bottom', position, index))

    }
    if (this.waterLayout[i] === 6) {
      this.riverTiles.push(new Tile('river_corner_top_left', position, index))

    }
    if (this.waterLayout[i] === 7) {
      this.riverTiles.push(new Tile('river_corner_top_right', position, index))

    }
    if (this.waterLayout[i] === 8) {
      this.riverTiles.push(new Tile('river_bottom_right_piece', position, index))
    }
    if (this.waterLayout[i] === 9) {
      this.riverTiles.push(new Tile('water_center_side', position, index))
    }
    if (this.waterLayout[i] === 10) {
      this.riverTiles.push(new Tile('river_top_right_piece', position, index))
    }
    if (this.waterLayout[i] === 11) {
      this.riverTiles.push(new Tile('river_corner_bottom_right', position, index))
    }
    if (this.waterLayout[i] === 12) {
      this.riverTiles.push(new Tile('river_top_left_piece', position, index))
    
    }
   }
  }


