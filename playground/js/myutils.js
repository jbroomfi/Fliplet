class MyUtils {

  greeting = 'Hello';

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getGreeting(name) {
    //debugger;
    if (name == undefined || name == "") {
      console.log(`Hello ${this.name} at ${new Date().toISOString()}`);
    } else {
      console.log(`Hello ${name} at ${new Date().toISOString()}`);
    }
  }
  
}

