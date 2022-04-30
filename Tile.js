function Tile(type, position, index) {
  this.type = type;
  this.index = index
  this.position = position;
  this.rand = Math.floor(Math.random() * 4);
  this.rotation = 0
  this.origin = new Vector2(50, 50)
  this.applyChanges()
}

Tile.prototype.applyChanges = function() {
  if (this.type === 'grass') {
  if (this.rand === 0)
      this.rotation = Math.PI;
    else if (this.rand === 1) {
      this.rotation = Math.PI / 2;
    }
    else if (this.rand === 2) {
      this.rotation = -Math.PI / 2; 
    }
    else if (this.rand >= 3) {
      this.rotation = 0;     
    }
  }
}



Tile.prototype.draw = function () {
  if (this.type === "grass") {
    Canvas.drawImage(
      sprites.tiles["grass"].basic, new Vector2(this.position.x + this.origin.x, this.position.y + this.origin.y),
      this.rotation, 0.5, this.origin)
  }
  if (this.type === "water_center") {
    Canvas.drawImage(
      sprites.tiles["water"].center,
      new Vector2(this.position.x, this.position.y),
      0, 0.5,
      this.origin
    );
  }
  if (this.type === 'water_center_side') {
    Canvas.drawImage(
      sprites.tiles["water"].center,
      new Vector2(this.position.x, this.position.y),
      Math.PI / 2,
      0.5,
      this.origin
    );
  }

  if (this.type === "river_right") {
    Canvas.drawImage(
      sprites.tiles["water"].right,
      new Vector2(this.position.x, this.position.y),
      0, 
      0.5,
      this.origin
    );
  }

  if (this.type === "river_left") {
    Canvas.drawImage(
      sprites.tiles["water"].right,
      new Vector2(this.position.x, this.position.y),
      Math.PI,
      0.5,
      this.origin
    );
  }

  if (this.type === 'river_bottom') {
    Canvas.drawImage(
      sprites.tiles["water"].left,
      new Vector2(this.position.x + this.origin.x, this.position.y + this.origin.y),
      -Math.PI / 2,
      0.5,
      this.origin
    )
  }
  if (this.type === 'river_top') {
    Canvas.drawImage(
      sprites.tiles["water"].right,
      new Vector2(this.position.x + this.origin.x, this.position.y + this.origin.y),
      -Math.PI / 2,
      0.5,
      this.origin
    )
  }
  if (this.type === 'river_corner_top_left') {
    Canvas.drawImage(
      sprites.tiles["water"].corner,
      new Vector2(this.position.x + this.origin.x, this.position.y + this.origin.y),
      0,
      0.5,
      this.origin
    )
  }
  if (this.type === 'river_corner_top_right') {
    Canvas.drawImage(
      sprites.tiles["water"].corner,
      new Vector2(this.position.x + this.origin.x, this.position.y + this.origin.y),
      Math.PI / 2,
      0.5,
      this.origin
    )
  } 
  if (this.type === 'river_corner_bottom_right') {
    Canvas.drawImage(
      sprites.tiles["water"].corner,
      new Vector2(this.position.x + this.origin.x, this.position.y + this.origin.y),
      Math.PI,
      0.5,
      this.origin
    )
  }
  if (this.type === 'river_bottom_right_piece') {
    Canvas.drawImage(
      sprites.tiles["water"].piece,
      new Vector2(this.position.x + this.origin.x, this.position.y + this.origin.y),
      0,
      0.5,
      this.origin
    )
  }
  if (this.type === 'river_top_right_piece') {
    Canvas.drawImage(
      sprites.tiles["water"].piece,
      new Vector2(this.position.x + this.origin.x, this.position.y + this.origin.y),
      -Math.PI / 2,
      0.5,
      this.origin
    )
  }
  if (this.type === 'river_top_left_piece') {
    Canvas.drawImage(
      sprites.tiles["water"].piece,
      new Vector2(this.position.x + this.origin.x, this.position.y + this.origin.y),
      Math.PI,
      0.5,
      this.origin
    )
  }
};
