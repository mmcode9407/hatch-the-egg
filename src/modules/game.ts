﻿import { Egg, EggState } from './egg.js';

interface GameParams {
	eggElement: HTMLImageElement | null;
	counterElement: HTMLParagraphElement | null;
	resultElement: HTMLParagraphElement | null;
}

interface IGame extends GameParams {}

export class Game implements IGame {
	eggElement: HTMLImageElement | null = null;
	resultElement: HTMLParagraphElement | null = null;
	counterElement: HTMLParagraphElement | null = null;
	stopWatch: number | null = null;
	secondsPassed: number = 0;
	eggInstance: Egg = new Egg({
		clicksToHatch: 30,
		onEggHatch: this.hatchEgg.bind(this),
	});

	init(params: GameParams) {
		if (!params.counterElement || !params.eggElement) {
			throw new Error('One of elements not found');
		}

		this.counterElement = params.counterElement;
		this.eggElement = params.eggElement;
		this.resultElement = params.resultElement;
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
			this.secondsPassed = this.secondsPassed + 100;
		}, 100);
	}

	stopStopWatch() {
		if (!this.stopWatch) {
			throw new Error('Stop watch not found');
		}

		clearInterval(this.stopWatch);
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

	hatchEgg() {
		if (!this.eggElement) {
			throw new Error('Egg element not found');
		}

		const eggImageSrc = this.eggInstance.assets.get(EggState.TAMAGOTCHI);

		if (!eggImageSrc) {
			throw new Error('Egg image src not found');
		}

		if (!this.resultElement) {
			throw new Error('Result element not found');
		}

		this.eggElement.src = eggImageSrc;
		this.resultElement.innerText =
			(this.secondsPassed / 1000).toString() + ' seconds';

		this.stopStopWatch();
	}
}
