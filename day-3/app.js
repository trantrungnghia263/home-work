class Store {
  constructor(initial = 0, min = 0, max = 100) {
    this.count = initial;
    this.min = min;
    this.max = max;
  }

  increment() {
    if (this.count == this.max) {
      this.count = this.max;
    } else {
      this.count++;
    }
  }

  decrement() {
    if (this.count == this.min) {
      this.count = this.min;
    } else {
      this.count--;
    }
  }

  setCount(count) {
    this.count = count;
  }

  getCount() {
    return this.count;
  }
}

class DemoCount extends HTMLElement {
  constructor() {
    super();
    this.store = new Store();
  }

  updateCount(count) {
    const countEl = document.querySelector(".count");
    countEl.innerText = count;
  }

  handleIncrement() {
    this.store.increment();
  }

  handleDecrement() {
    this.store.decrement();
  }
}
