class Test {
    constructor() {
        this.button = document.getElementById('button');
console.log("constructor", this)
        this.button.addEventListener("click", this.onClick.bind("hello"))
    }

    onClick() {
        console.log("method: ", this)
    }
}

let test = new Test();