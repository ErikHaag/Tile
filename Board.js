function createBoard() {
  const B = {
    board: [],
    c: 4,
    r: 4,
    tiles: 16,
    setup: function(C, R) {
      this.c = C;
      this.r = R;
      this.tiles = C * R;
      this.board = [];
      for (let i = 0; i < this.tiles; i++) {
        let x = i % this.c;
        let y = (i - x) / this.c;
        this.board.push(createTile(createVector(x, y), i + 1, width / this.c, height / this.r, this.tiles));
      }
      for (let i = 0; i < 4 * this.tiles; i++) {
        let r = random([0, 1, 2, 3]);
        switch (r) {
          case 0:
            this.L();
            break;
          case 1:
            this.U();
            break;
          case 2:
            this.R();
            break;
          case 3:
            this.D();
            break;
        }
      }
      this.updateColor();
    },
    display: function() {
      for (let i = 0; i < this.board.length; i++) {
        this.board[i].display();
      }
    },
    L: function() {
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i].num == this.tiles) {
          if (this.board[i].pos.x != 0) {
            let p1 = this.board[i].num;
            let p2 = this.board[i - 1].num;
            this.board[i].goTo(p2);
            this.board[i - 1].goTo(p1);
            this.updateColor();
            break;
          }
        }
      }
    },
    U: function() {
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i].num == this.tiles) {
          if (this.board[i].pos.y != 0) {
            let p1 = this.board[i].num;
            let p2 = this.board[i - this.c].num;
            this.board[i].goTo(p2);
            this.board[i - this.c].goTo(p1);
            this.updateColor();
            break;
          }
        }
      }
    },
    R: function() {
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i].num == this.tiles) {
          if (this.board[i].pos.x != this.c - 1) {
            let p1 = this.board[i].num;
            let p2 = this.board[i + 1].num;
            this.board[i].goTo(p2);
            this.board[i + 1].goTo(p1);
            this.updateColor();
            break;
          }
        }
      }
    },
    D: function() {
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i].num == this.tiles) {
          if (this.board[i].pos.y != this.r - 1) {
            let p1 = this.board[i].num;
            let p2 = this.board[i + this.c].num;
            this.board[i].goTo(p2);
            this.board[i + this.c].goTo(p1);
            this.updateColor();
            break;
          }
        }
      }
    },
    updateColor: function() {
      for (let i = 0; i < this.board.length; i++) {
        let I = this.board[i].num - 1;
        let CX = (I) % this.c;
        let CY = (I - CX) / this.c;
        let nColor = color(map(CX, 0, this.c - 1, 0, 255), map(CY, 0, this.r - 1, 0, 255),map(CX, 0, this.c - 1, 255, 0));
        this.board[i].changeCol(nColor);
      }
    }
  };
  return B;
}