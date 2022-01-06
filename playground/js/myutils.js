class MyUtils {

  static #COMPONENT_NAME = 'MyUtils';
  static #VERSION = "0.2";

  #nameValue;

  greeting = 'Hello';

  constructor(name = 'Dummy User') {
    this.#nameValue = name;
  }

  get name() {
    return this.#nameValue;
  }

  set name(name) {
    if (name === '') {
      throw new Error (`name field of MyUtils cannot be empty`);
    }
    this.#nameValue = name;
  }

  getGreeting(name = this.#nameValue) {
    //debugger;
    console.log(`Hello ${name} at ${new Date().toISOString()}`);
  }

  getVersion() {
    console.log(`${this.#COMPONENT_NAME} v${this.#VERSION}`)
  }
}

