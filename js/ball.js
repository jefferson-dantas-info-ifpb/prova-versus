import { ctx, height, removeBall, width } from './elements.js'

/** Bola */
export class Ball {
  /**
   * Cria uma bola
   * @param {number} x Posição X da bola
   * @param {number} y Posição Y da bola
   * @param {number} velX Velocidade da bola no eixo X
   * @param {number} velY Velocidade da bola no eixo Y
   * @param {string} color Cor da bola
   * @param {number} size Tamanho da bola
   */
  constructor(x, y, velX, velY, color, size) {
    this.x = x
    this.y = y
    this.velX = velX
    this.velY = velY
    this.color = color
    this.size = size
  }

  /** Desenha a bola na tela */
  draw() {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
  }

  /** Atualiza a posição da bola */
  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX)
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX)
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY)
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY)
    }

    this.x += this.velX
    this.y += this.velY
  }

  /**
   * Detecta a colisão da bola com a trave
   * @param {Team} goal1 Trave do primeiro time
   * @param {Team} goal2 Trave do segundo time
   */
  collisionDetect(goal1, goal2) {
    if (
      this.x - this.size < goal1.x + 1 &&
      this.y - this.size > goal1.y &&
      this.y < goal1.y + goal1.h &&
      this.color !== goal1.color
    ) {
      goal2.goal()
      removeBall(this)
    }

    if (
      this.x - this.size > goal2.x &&
      this.y - this.size > goal2.y &&
      this.y < goal1.y + goal1.h &&
      this.color !== goal2.color
    ) {
      goal1.goal()
      removeBall(this)
    }
  }
}
