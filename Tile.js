function createTile(P, N, W, H, E) {
  let T = {
    pos: P,
    num: N,
    w: W,
    h: H,
    col:color(0),
    empty: E,
    display: function() {
      if (this.num != this.empty) {
        rectMode(CORNER);
        fill(this.col)
        rect(this.pos.x * this.w, this.pos.y * this.h, this.w, this.h);
        textAlign(CENTER, CENTER);
        textSize(min(3 * this.w,this.h) - 40);
        fill(0);
        text(str(this.num), (this.pos.x + 0.5) * this.w, (this.pos.y + 0.5) * this.h);
      }
    },
    goTo: function(num) {
      this.num = num;
    },
    changeCol:function(nC) {
      this.col = nC;
    }
  };
  return T;
}
