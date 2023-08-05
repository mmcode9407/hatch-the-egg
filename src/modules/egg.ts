export enum EggState {
	EGG = 'egg',
	TAMAGOTCHI = 'tamagotchi',
}

interface EggParams {
	clicksToHatch: number;
	onEggHatch: () => void;
}

export class Egg {
	eggClicks: number = 0;
	clicksToHatch: number;
	assets = new Map([
		[EggState.EGG, 'assets/egg.svg'],
		[EggState.TAMAGOTCHI, 'assets/tamagotchi.svg'],
	]);
	onEggHatch: () => void;

	constructor({ clicksToHatch, onEggHatch }: EggParams) {
		this.clicksToHatch = clicksToHatch;
		this.onEggHatch = onEggHatch;
	}

	tapEgg() {
		if (this.eggClicks >= this.clicksToHatch) {
			return;
		}

		this.eggClicks++;

		if (this.eggClicks >= this.clicksToHatch) {
			this.onEggHatch();
		}
	}
}
