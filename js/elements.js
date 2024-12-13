import { random } from './helpers.js'
import { Team } from './team.js'

/** Formulário do time vermelho */
export const $redForm = document.querySelector('.teamForm#red')

/** Formulário do time azul */
export const $blueForm = document.querySelector('.teamForm#blue')

/** Pontuação do time vermelho */
export const $scoreRed = document.querySelector('.teamForm #scoreRed')

/** Pontuação do time azul */
export const $scoreBlue = document.querySelector('.teamForm #scoreBlue')

/** Botão para iniciar o jogo */
export const $buttonStart = document.querySelector('#buttonStart')

/** Botão para reiniciar o jogo */
export const $buttonReset = document.querySelector('#buttonReset')

/** Tela do jogo */
export const canvas = document.querySelector('canvas')

/** Contexto 2D da tela do jogo */
export const ctx = canvas.getContext('2d')

/** Largura da tela do jogo */
export const width = (canvas.width = window.innerWidth)

/** Altura da tela do jogo */
export const height = (canvas.height = window.innerHeight)

/** Bolas dentro do jogo */
export let balls = []

/** Time vermelho */
export let team_red = new Team(0, 30, 100, 'red', 1, random(1, 20), random(-7, 7), $scoreRed)

/** Time azul */
export let team_blue = new Team(width - 30, 30, 100, 'blue', 1, random(1, 20), random(-7, 7), $scoreBlue)

/** Exclui todas as bolas */
export function resetBalls() {
  balls = []
}

/** Remove uma bola */
export function removeBall(ball) {
  balls = balls.filter((b) => b !== ball)
}
