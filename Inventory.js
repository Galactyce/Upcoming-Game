function Inventory(slots) {
  this.lifeSlots = slots
}

Inventory.prototype.draw = function() {
  var lives = Game.gameWorld.characters[0].lives;
  var fullSlots = Math.floor(lives / 2)
  var halfSlots = lives % 2;
  
  for (var i=0; i < this.lifeSlots; i++) {
    Canvas.drawImage(sprites.extras["life_marker"].empty, new Vector2(100 + (i * (sprites.extras["life_marker"].empty.width / 2 + 5)), 40),
    0, 0.5)
  }

  for (var i=0; i < fullSlots; i++) {
    Canvas.drawImage(sprites.extras["life_marker"].full, new Vector2(100 + (i * (sprites.extras["life_marker"].full.width / 2 + 5)), 40),
    0, 0.5)
  }
  for (var i=0; i < halfSlots; i++) {
    Canvas.drawImage(sprites.extras["life_marker"].half, new Vector2(100 + (sprites.extras["life_marker"].half.width / 2 * fullSlots + 5 * fullSlots), 40),
    0, 0.5)
  }

  
}