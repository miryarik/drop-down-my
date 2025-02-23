export default class DropDown {
    constructor(selector, inactiveTxt = "Show", activeTxt = "Hide") {
        this.dropDown = document.querySelector(selector);
        if (!this.dropDown) return;

        this.toggleBtn = this.dropDown.querySelector("button");
        this.itemContainer = this.dropDown.querySelector("div");
        this.isHidden = true;
        this.inactiveTxt = inactiveTxt;
        this.activeTxt = activeTxt;

        this.init();
    }

    init() {
        // hide items initially
        this.itemContainer.style.visibility = "hidden";
        this.itemContainer.style.position = "absolute";

        // attach toggle behaviour to button
        this.toggleBtn.innerText = this.inactiveTxt;
        this.toggleBtn.addEventListener("click", () => this.toggle());
    }

    toggle() {
        // toggle behavior for the button
        this.isHidden = !this.isHidden;

        if (this.isHidden) {
            this.itemContainer.style.visibility = "hidden";
            this.itemContainer.style.position = "absolute";
            this.toggleBtn.innerText = this.inactiveTxt;
        } else {
            this.itemContainer.style.visibility = "visible";
            this.itemContainer.style.position = "static";
            this.toggleBtn.innerText = this.activeTxt;
        }
    }
}

