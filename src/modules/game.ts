﻿import { Egg, EggState } from './egg.js';

interface GameParams {
	eggElement: HTMLImageElement | null;
	counterElement: HTMLParagraphElement | null;
}

interface IGame extends GameParams {}

export class Game implements IGame {
	eggElement: HTMLImageElement | null = null;
	counterElement: HTMLParagraphElement | null = null;
	stopWatch: number | null = null;
	secondsPassed: number = 0;
	eggInstance: Egg = new Egg();

	init(params: GameParams) {
		if (!params.counterElement || !params.eggElement) {
			throw new Error('One of elements not found');
		}

		this.counterElement = params.counterElement;
		this.eggElement = params.eggElement;
		this.displayEggClicks();
		this.mountEgg();
	}

	displayEggClicks() {
		if (!this.counterElement) {
			throw new Error('Counter element not found');
		}

		this.counterElement.innerText = String(this.eggInstance.eggClicks);
	}

	startStopWatch() {
		this.stopWatch = setInterval(() => {
			this.secondsPassed++;
		}, 1000);
	}

	updateEggClick() {
		this.eggInstance.tapEgg();
		this.displayEggClicks();

		switch (this.eggInstance.eggClicks) {
			case 1:
				this.startStopWatch();
				break;
		}
	}

	mountEgg() {
		if (!this.eggElement) {
			throw new Error('Egg element not found');
		}

		const eggImageSrc = this.eggInstance.assets.get(EggState.EGG);

		if (!eggImageSrc) {
			throw new Error('Egg image src not found');
		}

		this.eggElement.src = eggImageSrc;
		this.eggElement.addEventListener('click', this.updateEggClick.bind(this));
	}
}
