function GameWorld() {

  this.worldSections = null;
  this.worldWidth = 15;
  this.worldHeight = 10;
  this.sectionID = 1;
  this.pushWorldSections();
  this.terrainTiles = new Array();
  this.riverTiles = new Array();
  this.boundaries = new Array();
  this.enemies = new Array();
  this.frontDecorations = new Array();
  this.backDecorations = new Array();
  this.tilesX = 26;
  this.tilesY = 11;
  this.tileWidth = sprites.tiles['grass'].basic.width * 0.5;
  this.tileHeight = sprites.tiles['grass'].basic.height * 0.5;
  var index = 0
  for (var col=0; col<this.tilesY; col++) {
    for (var row=0; row<this.tilesX; row++) {
      index += 1;
      this.terrainTiles.push(new Tile('grass', new Vector2(row * this.tileWidth - 50, col * this.tileHeight + 75), index));
    }
  }
  this.drawWaterLayout(this.sectionID)
  this.drawDecoLayout(this.sectionID)
  this.drawBoundaryLayout(this.sectionID)
  this.drawBoundaryTiles()

  this.background = null;
  this.characters = new Array()
  this.characters.push(new Character("prototype"))
  this.inventory = new Inventory(4)
  this.defineEnemies();
  this.clearWaterTiles()
  this.drawWaterLayout(this.sectionID)
this.drawDecoLayout(this.sectionID)
this.drawBoundaryLayout(this.sectionID)
}

GameWorld.prototype.handleInputs = function() {
  if (Keyboard.down(37)) {
    this.characters[0].move('left')
  }
  else if (Keyboard.down(38)) {
    this.characters[0].move('up')
  }
  else if (Keyboard.down(39)) {
    this.characters[0].move('right')
  }
  else if (Keyboard.down(40)) {
    this.characters[0].move('down')
  }

  
}

GameWorld.prototype.clearEnemies = function() {
  for (var i=0; i<this.enemies.length; i++) {
    this.enemies[i] = null;
  }
  this.enemies = this.enemies.filter((a) => a)
}

GameWorld.prototype.defineEnemies = function() {
  this.clearEnemies()
  if (this.sectionID === 1) {
    this.enemies.push(new MeleeEnemy("prototype", new Vector2(400, 400), new Vector2(150, 0)))
  }

}

GameWorld.prototype.update = function(delta) {
  for (var i=0; i < this.characters.length; i++) {
    this.characters[i].update(delta)
  }
  for (var i=0; i < this.enemies.length; i++) {
    this.enemies[i].update(delta)
  }
}

GameWorld.prototype.draw = function() {
  
  for (var i = 0; i<this.terrainTiles.length; i++) {
    this.terrainTiles[i].draw()
  } 
  for (var i = 0; i<this.riverTiles.length; i++) {
    this.riverTiles[i].draw()
  } 

  for (var i = 0; i<this.backDecorations.length; i++) {
    this.backDecorations[i].draw()
  } 

  for (var i=0; i < this.characters.length; i++) {
    this.characters[i].draw()
  }

  for (var i=0; i < this.enemies.length; i++) {
    this.enemies[i].draw()
  } 

  for (var i = 0; i<this.frontDecorations.length; i++) {
    this.frontDecorations[i].draw()
  } 
  // for (var k=0; k< this.boundaries.length; k++) {
  //    Canvas.context.fillStyle = 'white'
  //    Canvas.context.fillRect(this.boundaries[k].position.x, this.boundaries[k].position.y, this.boundaries[k].range.x * 2, 
  //    this.boundaries[k].range.y * 2)
  //  }
  this.inventory.draw()
}