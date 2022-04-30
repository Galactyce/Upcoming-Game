GameWorld.prototype.pushWorldSections = function() {
  var n = 'empty';  // start coordinates: column 8, row 7
  this.worldSections = new Array(
    n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  // row 1
    n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  // row 2
    n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  // row 3
    n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  // row 4
    n,  n,  n,  n,  n,  n,  6,  3,  7,  n,  n,  n,  n,  n,  n,  // row 5
    n,  n,  n,  n,  n,  n,  5,  2,  8,  n,  n,  n,  n,  n,  n,  // row 6
    n,  n,  n,  n,  n,  n,  4,  1,  9,  n,  n,  n,  n,  n,  n,  // row 7
    n,  n,  n,  n,  n,  n, 14, 15, 10,  n,  n,  n,  n,  n,  n,  // row 8
    n,  n,  n,  n,  n,  n, 13, 12, 11,  n,  n,  n,  n,  n,  n,  // row 9
    n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  n,  // row 10
  )
}


// IDs 1 - #: Grassland



GameWorld.prototype.selectNextWorld = function (dir) {
  var sections = this.worldSections.length;

  for (var i = 0; i < sections; i++) {
    var row = Math.floor(i / sections);
    var col = i % sections 

    if (this.worldSections[i] === this.sectionID) {
    
    if (dir === "up" && this.worldSections[(row - 1) * this.worldWidth + col] !== 'empty') {
      this.sectionID = this.worldSections[(row - 1) * this.worldWidth + col];
      break;
    }
    if (dir === "down" && this.worldSections[(row + 1) * this.worldWidth + col] !== 'empty') {
      this.sectionID = this.worldSections[(row + 1) * this.worldWidth + col];
      break;
    }
    if (dir === "left" && this.worldSections[i - 1] !== 'empty') {
      this.sectionID = this.worldSections[i - 1];
      break;
    }
    if (dir === "right" && this.worldSections[i + 1] !== 'empty') {
      this.sectionID = this.worldSections[i + 1];
      break;
    }
   }
  }
  for (var i=0; i < this.boundaries.length; i++) {
    this.boundaries[i] = null;
  }
  this.boundaries = this.boundaries.filter((a) => a)

  this.clearWaterTiles()
  this.drawWaterLayout(this.sectionID)
  this.drawDecoLayout(this.sectionID)
  this.drawBoundaryLayout(this.sectionID)
  this.defineEnemies()

};