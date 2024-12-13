import { $blueForm, $buttonReset, $redForm, team_blue, team_red } from './elements.js'
import { Team } from './team.js'

$redForm.addEventListener('submit', (e) => {
  e.preventDefault()
  updateTeam(e.target, team_red)
})

$blueForm.addEventListener('submit', (e) => {
  e.preventDefault()
  updateTeam(e.target, team_blue)
})

$buttonReset.addEventListener('click', reset)

/**
 * Atualiza as configurações do time
 * @param {HTMLFormElement} form Formulário
 * @param {Team} team Time
 */
function updateTeam(form, team) {
  team.h = Number(form.elements.teamSize.value)
  team.balls_count = Number(form.elements.ballQuantity.value)
  const ballSpeed = Number(form.elements.ballSpeed.value)
  team.balls_speed_x = ballSpeed
  team.balls_speed_y = ballSpeed
}

/**
 * Reseta as configurações dos times
 */
function reset() {
  $redForm.reset()
  $blueForm.reset()
  updateTeam($redForm, team_red)
  updateTeam($blueForm, team_blue)
}
