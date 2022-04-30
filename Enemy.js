function MeleeEnemy(type, position, pattern) {
  this.type = type;
  this.lives = undefined
  this.sprite = undefined;
  this.velocity = new Vector2(0, 0);
  this.position = position;
  this.origin = new Vector2(0, 0);
  this.pattern = pattern; // vector
  this.speed = undefined;
  this.progress = new Vector2(0, 0);
  this.moving = true;
  this.lastAttack = Date.now()
  this.define();
}

MeleeEnemy.prototype.define = function() {
  if (this.type === 'prototype') {
    this.speed = 3;
    this.sprite = sprites.characters['prototype_enemy'].idle;
  }
  if (this.type === "green_slime") {
    this.speed = 2;
    this.sprite = sprites.characters['green_slime'].idle;
  }
  this.velocity = new Vector2(this.speed, this.speed);
  this.origin = new Vector2(this.sprite.width / 8, this.sprite.height / 8);

}

MeleeEnemy.prototype.draw = function() {
  Canvas.drawImage(this.sprite, this.position, 0, 0.25, this.origin);
}

MeleeEnemy.prototype.update = function() {
  for (var i=0; i < Game.gameWorld.characters.length; i++) {
    var distanceX = this.position.x - Game.gameWorld.characters[i].position.x + Game.gameWorld.characters[i].origin.x;
    var distanceY = this.position.y - Game.gameWorld.characters[i].position.y + Game.gameWorld.characters[i].origin.y;

    if (Math.abs(distanceX) < 50 && Math.abs(distanceY) < 50) {
      this.moving = false
      this.attack()
    }
    else {
      this.moving = true
      this.lastAttack = Date.now()
    } 



  }
  
  if (this.moving === true) {
  if (this.pattern.x > 0) {
  this.position.x += this.velocity.x
  this.progress.x += this.speed
  }
  if (this.pattern.y > 0) {
  this.position.y += this.velocity.y;
  this.progress.y += this.speed
  }
  if (this.progress.x > this.pattern.x) {
    this.velocity.x *= -1;
    this.progress.x = 0
  }
  if (this.progress.y > this.pattern.y) {
    this.velocity.y *= -1;
    this.progress.y = 0
  }
  }
}

MeleeEnemy.prototype.attack = function() {
  if (Date.now() > this.lastAttack + 1000) {
    Game.gameWorld.characters[0].lives -= 1
    this.lastAttack = Date.now();
  }
}