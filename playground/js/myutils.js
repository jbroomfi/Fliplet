class MyUtils {

  greeting = 'Hello';

  constructor(name = 'Dummy User') {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getGreeting(name = this.name) {
    //debugger;
    console.log(`Hello ${name} at ${new Date().toISOString()}`);
  }
  
}

