var sprites = {};

Game.loadAssets = function() {
  var loadImage = function(img) {
    return Game.loadImage('Sprites/' + img)
  }

  
  sprites.tiles = {
    'grass': {'basic': loadImage('grass_tile.png')},
    'water': {'center': loadImage("water_tile.png"), 'right': loadImage("river_right.png"), 'left': loadImage('river_left.png'),
    'corner': loadImage("river_corner.png"), 'piece': loadImage("river_piece.png")},
    'wood-planks': {'center': loadImage("wood_planks.png"), "right_edge": loadImage("wood_planks_right.png"), 
    "left_edge": loadImage("wood_planks_left.png")}
  }

  sprites.decoration = {
    'bush1_top': {'green': loadImage("bush_green1_top.png")},
    'bush1_bottom': {'green': loadImage("bush_green1_bottom.png")},
    'bush2_top': {'green': loadImage("bush_green2_top.png")},
    'bush2_bottom': {'green': loadImage("bush_green2_bottom.png")},
    'tree_top': {'green': loadImage('tree1_top.png')},
    'tree_trunk':loadImage('tree1_trunk.png'),
    'pine_tree_top': {'green': loadImage("pine_tree1-top.png")},
    'pine_tree_bottom': {'green': loadImage("pine_tree1-bottom.png")},
    'weeds1': {'green': loadImage('weeds1.png')},
    'weeds2': {'green': loadImage('weeds2.png')},
    'rock1': loadImage('rock1.png')
  }

  sprites.extras = {
    'life_marker': {"full": loadImage("heart.png"), "half": loadImage("half_heart.png"), "empty": loadImage("heart_slot.png") }
  }

  sprites.characters = {
    'prototype': {'idle': loadImage('prototype_hitbox.png')},
    'prototype_enemy': {'idle': loadImage('prototype_enemy_hitbox.png')},
    'green_slime': {'idle': loadImage('green-slime-front.png')}
  }
}