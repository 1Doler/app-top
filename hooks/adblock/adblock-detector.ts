import { Loop } from "./loop";

const AD_CLASSES = "content-list__ad-label ad banner adriver tracker analitics ads reklama ad-sidebar adsbox adblock-blocker";
const INTERVAL = 50;
const TIMEOUT = 1000;
const SIZE = "1px";
const OPACITY = "1";

class AdblockDetector {

    public static check(): Promise<boolean> {
        const adElement = this.createAdElement();

        return new Promise((resolve) => {
            const loop = new Loop(() => {
                if (this.checkStyles(adElement)) {
                    clearTimeout(timeoutId);
                    adElement.remove();
                    loop.stop();
                    resolve(true);
                }
            }, INTERVAL);

            adElement.className = AD_CLASSES;

            const timeoutId = setTimeout(() => {
                adElement.remove();
                loop.stop();
                resolve(false);
            }, TIMEOUT);

            loop.start();

        });
    }

    private static createAdElement(): HTMLDivElement {
        const adElement = document.createElement("div");

        adElement.style.width = SIZE;
        adElement.style.height = SIZE;
        adElement.style.opacity = OPACITY;
        adElement.style.display = "block";
        adElement.style.visibility = "visible";

        document.body.append(adElement);
        return adElement;
    }

    private static checkStyles(element: HTMLElement): boolean {

        const elementStyles = window.getComputedStyle(element);
        return (
            elementStyles.display === "none" ||
            elementStyles.visibility === "hidden" ||
            elementStyles.height !== SIZE ||
            elementStyles.width !== SIZE ||
            elementStyles.opacity !== OPACITY
        );
    }

}

export default AdblockDetector;
