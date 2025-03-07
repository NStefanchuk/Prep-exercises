/**
 * @typedef {Object} GridCell
 * @property {number} x
 * @property {number} y
 * @property {boolean} alive
 * @property {boolean} [nextAlive]
 */

export default class Cell {
  static size

  constructor(x, y) {
    this.x = x
    this.y = y
    this.alive = Math.random() > 0.5
    this.nextAlive = false
    this.lifeTime = 1
  }

  draw(context) {
    // Draw this background
    context.fillStyle = '#303030'
    context.fillRect(
      this.x * Cell.size,
      this.y * Cell.size,
      Cell.size,
      Cell.size
    )

    if (this.alive) {
      // Draw living this inside background
      context.fillStyle = `rgba(24, 215, 236, ${this.lifeTime / 4})`
      context.fillRect(
        this.x * Cell.size + 1,
        this.y * Cell.size + 1,
        Cell.size - 2,
        Cell.size - 2
      )
    }
  }

  liveAndLetDie(aliveNeighbors) {
    if (aliveNeighbors === 2) {
      // Living cell remains living, dead cell remains dead
      this.nextAlive = this.alive
      this.lifeTime = 1
    } else if (aliveNeighbors === 3) {
      // Dead cell becomes living, living cell remains living
      this.nextAlive = true
      this.lifeTime += 1
    } else {
      // Living cell dies, dead cell remains dead
      this.nextAlive = false
      this.lifeTime = 0
    }
  }

  update() {
    this.alive = this.nextAlive
  }
}
