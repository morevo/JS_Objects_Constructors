/* Some interesting operations at objects and constructors, i'm sure it's will useful for you */
/* I would like to starting from simple objects */

/* Simple objects */

/* The variable "calculator" create link to object in our memory. It sums and multiply two numbes which had create in methods "a and b" */
let calculator = { 
    read() {
      calculator.a = 3;
      calculator.b = 3;
    },
    sum() {
      return (this.a + this.b);
    },
    mult() {
      return (this.a * this.b);
    },
  };

  calculator.read()
  console.log(calculator.sum())
  console.log(calculator.mult())


  /* Example was a little change, namely was added user input  */
  let calculator = {   
    read() {
      this.a = +prompt("a", 0); 
      this.b = +prompt("b", 0); 
    },
    sum() {
      return (this.a + this.b);
    },
    mult() {
      return (this.a * this.b);
    },
  };
 
  calculator.read()
  console.log(calculator.sum())
  console.log(calculator.mult())


  /* This expression increase and decrease property "step" in methods up() and down() which we can see after call method showStep() */
  let ladder = {   
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep() {
      alert( this.step );
    }
  }
  ladder.showStep(); // 0
  ladder.up();
  ladder.up();
  ladder.up();
  ladder.showStep(); // 3
  ladder.down();
  ladder.down();
  ladder.showStep(); // 1

    /* This variant identical the first, but it has more comfortable call, bacause we return link of object after each method */
  let ladder = {  
    step: 0,
    up() {
      this.step++;
      return this;  
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  }
  
  ladder.up().up().down().up().down().showStep(); // 1


  /* Objects with Constructors */

  /* let create Constructor "Calculator" which will make arithmetic operations on numbers */
  /* The example sums and multiply two numbes which defined as propertys in method of object "read()" */

  function Calculator() {          //Can to add the other arithmetic operations.. 
    this.read = function() {
      this.a = +prompt("Write a:", 0);
      this.b = +prompt("Write b:", 0);
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.mult = function() {
      return this.a * this.b;
    };
    this.devide = function() {
      return this.a / this.b
    }
  }
  
  let calculator = new Calculator(); //We can delete this brackets "()" because constructor Calculator don't have parametrs, but This is not desirable
 
  
  calculator.read();
  console.log(calculator.sum());
  console.log(calculator.mult());
  console.log(calculator.decide())


  /* Created ladder which get up() and down() with the help Constructor */

  function CreateObj() {       
    this.step = 0;
    this.up = function() {
      this.step++;
    };
    this.down = function() {
      this.step--;
    };
    this.showStep = function() {
      console.log(this.step);
    }
  }
  
  let ladder = new CreateObj();
  
  ladder.showStep(); // 0
  ladder.up();
  ladder.up();
  ladder.up();
  ladder.showStep(); // 3
  ladder.down();
  ladder.down();
  ladder.showStep(); // 1

  /* Improved way to use code of methods created ladder which get up() and down() with the help Constructor */

  function CreateObj() { 
    this.step = 0;
    this.up = function() {
      this.step++;
      return this;
    };
    this.down = function() {
      this.step--;
      return this;
    };
    this.showStep = function() {
      console.log(this.step);
      return this;
    }
  }
  
  let ladder = new CreateObj();
  
  ladder.showStep().up().up().up().down().down(); // 1


/* Recursive deep copy function using a costructor and objects */

function Constructor() {
  this.name = "Ivan";
  this.data = {
      name: {
        age: 22,
      }
    }
  };

let user = new Constructor();

let admin = {};

function getObj(admin,user) { // Meaning return admin[key] and user[key]
  for(key in user) {  
    if(typeof user[key] !== "object") { //If propertyes, keys in object user don't be equally the object 
      admin[key] = user[key];     //Then we coppy this propertyes in new object admin[key].
    }else {
      admin[key] = {};   //Otherwise, If property transmitted to admin from user will be equally the object.
     return getObj(admin[key],user[key]); // Then return, transmitte propertyes from this object (admin[key]) to parametrs of function, and property inside object user[key] also transmitte whatever to find next values inside, pull and copy from it.
    } 
  }
}

getObj(admin,user)

admin.data.name.age = 2

console.log(user) // 22
console.log(admin) // 2

/* Also one more solve without Constructor */

let user = {
  name: "Ivan",
  data: {
    name: {
      age: 22,
    }
  }
};

let admin = {};

function getObj(admin,user) {
  for(key in user) {
    if(typeof user[key] !== "object") { 
      admin[key] = user[key];     
    }else {
      admin[key] = {};   
     return getObj(admin[key],user[key]); 
    } 
  }
}

getObj(admin,user)

admin.data.name.age = 2

console.log(user) // 22
console.log(admin) // 2


  /* Thank you for attention! */