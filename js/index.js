import { Ball } from './ball.js'
import {
  $blueForm,
  $buttonStart,
  $redForm,
  $scoreBlue,
  $scoreRed,
  balls,
  ctx,
  height,
  resetBalls,
  team_blue,
  team_red,
  width
} from './elements.js'
import './events.js'
import { random } from './helpers.js'

$buttonStart.addEventListener('click', start)

/** Inicia o jogo */
function start() {
  // Reseta as pontuações e remove as bolas
  resetBalls()
  team_blue.score = 0
  team_red.score = 0
  $scoreRed.innerText = '0'
  $scoreBlue.innerText = '0'
  $redForm.classList.remove('winner')
  $blueForm.classList.remove('winner')

  for (let i = 0; i < team_red.balls_count; i++) {
    const size = random(10, 20)
    const ball_red = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size), // x
      random(0 + size, height - size), // y
      team_red.balls_speed_x, // velX
      team_red.balls_speed_y, // velY
      'red', // color
      size // size
    )
    balls.push(ball_red)
  }
  for (let i = 0; i < team_blue.balls_count; i++) {
    const size = random(10, 20)
    const ball_blue = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size), // x
      random(0 + size, height - size), // y
      team_blue.balls_speed_x, // velX
      team_blue.balls_speed_y, // velY
      'blue', // color
      size // size
    )
    balls.push(ball_blue)
  }
}

/** Executa a cada frame do jogo */
function loop() {
  ctx.fillStyle = 'rgba(101, 250, 100, 0.25)'
  ctx.fillRect(0, 0, width, height)

  team_red.draw()

  team_blue.draw()

  for (const ball of balls) {
    ball.draw()
    ball.update()
    ball.collisionDetect(team_red, team_blue)
  }

  requestAnimationFrame(loop)
}

loop()
