function Character(character) {
  this.sprite = null;
  this.character = character;
  this.origin = new Vector2()
  this.position = new Vector2(600, 600);
  this.velocity = new Vector2(0, 0);
  this.lives = 6;
  this.specifyCharacter();
}

Character.prototype.update = function(delta) {
  
}

Character.prototype.specifyCharacter = function() {
  if (this.character === "prototype") {
    this.sprite = sprites.characters['prototype'].idle;
  }
  this.origin = new Vector2(this.sprite.width / 8, this.sprite.height / 8)
}

Character.prototype.draw = function() {
  Canvas.drawImage(this.sprite, this.position.subtract(this.origin), 0, 0.25, this.origin)
}

Character.prototype.move = function(dir) {
  if (dir === 'up') {
    this.velocity = new Vector2(0, -3)
  }
  else if (dir === 'down') {
    this.velocity = new Vector2(0, 3);
  }
  else if (dir === 'left') {
    this.velocity = new Vector2(-3, 0)
  }
  else if (dir === 'right') {
    this.velocity = new Vector2(3, 0)
  }

  this.position.addTo(this.velocity);


  for (var i=0; i < Game.gameWorld.boundaries.length; i++) {
    Game.gameWorld.boundaries[i].repel(this);
  }
 
  if (this.position.y < 100) {
    this.position.y = 650
    Game.gameWorld.selectNextWorld('up');
  }
  if (this.position.y > 650) {
    this.position.y = 100
    Game.gameWorld.selectNextWorld('down');
  }
  if (this.position.x < 0) {
    this.position.x = Canvas.canvas.width;
    Game.gameWorld.selectNextWorld('left');
  }
  if (this.position.x > Canvas.canvas.width) {
    this.position.x = 0
    Game.gameWorld.selectNextWorld('right');
  }
  
}
