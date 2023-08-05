export enum EggState {
	EGG = 'egg',
	TAMAGOTCHI = 'tamagotchi',
}

export class Egg {
	eggClicks: number = 0;
	assets = new Map([
		[EggState.EGG, 'assets/egg.svg'],
		[EggState.TAMAGOTCHI, 'assets/tamagotchi.svg'],
	]);
}
