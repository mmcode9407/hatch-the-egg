export var EggState;
(function (EggState) {
    EggState["EGG"] = "egg";
    EggState["TAMAGOTCHI"] = "tamagotchi";
})(EggState || (EggState = {}));
export class Egg {
    constructor({ clicksToHatch, onEggHatch }) {
        this.eggClicks = 0;
        this.assets = new Map([
            [EggState.EGG, 'assets/egg.svg'],
            [EggState.TAMAGOTCHI, 'assets/tamagotchi.svg'],
        ]);
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
