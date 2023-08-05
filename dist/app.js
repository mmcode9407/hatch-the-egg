import { Game } from './modules/game.js';
document.addEventListener('DOMContentLoaded', function () {
    const counter = document.querySelector('#counter');
    const egg = document.querySelector('#egg');
    const game = new Game();
    game.init({ eggElement: egg, counterElement: counter });
});
