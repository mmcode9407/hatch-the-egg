export var EggState;
(function (EggState) {
    EggState["EGG"] = "egg";
    EggState["TAMAGOTCHI"] = "tamagotchi";
})(EggState || (EggState = {}));
export class Egg {
    constructor() {
        this.eggClicks = 0;
        this.assets = new Map([
            [EggState.EGG, 'assets/egg.svg'],
            [EggState.TAMAGOTCHI, 'assets/tamagotchi.svg'],
        ]);
    }
    tapEgg() {
        this.eggClicks++;
    }
}
