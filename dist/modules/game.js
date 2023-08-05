import { Egg, EggState } from './egg.js';
export class Game {
    constructor() {
        this.eggElement = null;
        this.counterElement = null;
        this.stopWatch = null;
        this.secondsPassed = 0;
        this.eggInstance = new Egg();
    }
    init(params) {
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
