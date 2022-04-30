function Game() {
  this.size = {x: 1300, y: 700};
  this.spritesStillLoading = 0;
}

Game.prototype.start = function() {
  Canvas.initialize();
  Game.loadAssets();
  Game.assetLoadingLoop();
}

Game.prototype.assetLoadingLoop = function() {
  if (Game.spritesStillLoading > 0) {
    setTimeout(Game.assetLoadingLoop, 1000/60);
  }
  else {
    console.log("Sprites loaded.");
    Game.gameWorld = new GameWorld();

    Game.mainLoop();
  }
}

Game.prototype.loadAssets = function() {

}

Game.prototype.loadImage = function(imageName) {
  var image = new Image();
  image.src = imageName;
  Game.spritesStillLoading += 1;
  console.log("Loading: " + imageName);
  image.onload = function() {
    console.log("Loaded: " + imageName);
    Game.spritesStillLoading -= 1;
  }
  return image;
  }

Game.prototype.mainLoop = function() {
  var delta = 1 / 60;
  Canvas.clear();
  Game.gameWorld.handleInputs()
  Game.gameWorld.update(delta);
  Keyboard.reset();
  Mouse.reset()
  Game.gameWorld.draw();
  setTimeout(Game.mainLoop, 1000/60);
}


var Game = new Game()