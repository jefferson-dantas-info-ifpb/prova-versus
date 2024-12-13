import { $blueForm, $redForm, ctx, height, resetBalls, team_blue, team_red } from './elements.js'

/** Time */
export class Team {
  /**
   * Cria uma trave
   * @param {number} x Posição X da trave
   * @param {number} w Largura da trave
   * @param {number} h Altura da trave
   * @param {string} color Cor da trave
   * @param {number} balls_count Quantidade de bolas
   * @param {HTMLSpanElement} score_element Elemento de renderizar o placar
   */
  constructor(x, w, h, color, balls_count, balls_speed_x, balls_speed_y, score_element) {
    this.name = color
    this.x = x
    this.w = w
    this.h = h
    this.color = color
    this.balls_count = balls_count
    this.balls_speed_x = balls_speed_x
    this.balls_speed_y = balls_speed_y
    this.score = 0
    this.y = height / 2 - this.h / 2
    this.score_element = score_element
  }

  /** Desenha a trave na tela */
  draw() {
    this.y = height / 2 - this.h / 2
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  /** Gol */
  goal() {
    this.score++
    this.score_element.innerText = this.score

    if (this.score >= 10) {
      resetBalls()
      if (team_red.score > team_blue.score) {
        $redForm.classList.add('winner')
      } else {
        $blueForm.classList.add('winner')
      }
    }
  }
}
