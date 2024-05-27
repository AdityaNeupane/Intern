const radio = () => {
    console.log("speaker");
    console.log("buttons");
    setTimeout(() => {
        
    console.log("volume");  

    }, 3000);
    console.log("antenna");
};

 const tv = async () => {
  await radio();
  console.log("remote");
  setTimeout(() => {
    console.log("this is last line of code");
  }, 5000);
  console.log("screen");
  console.log("display");
};

const mobile = () => {
    tv();
    console.log("calling");
    console.log("camera");
    console.log("switch");
};  

mobile();



//////////////////////////

const interval = 5000;
setTimeout(() => {
  console.log("welcome");
}, interval);

//////////////////////////


const bike = () => {
    console.log("running");
    console.log("wheels");
    console.log("suspension");
    setTimeout(() => {
        console.log("this is the last line of code");
    })
    console.log("brake");
    console.log("engine");
};

const car =async () => {
   await bike ();
    console.log("doors");
    console.log("wipers");
    console.log("lights");
};

const bus =  () => {
     car ();
     console.log("windows");
    console.log("biggerseats");
    console.log("ac");
};

bus();

// ************************* 

const hello =  async () => {
    console.log("good morning");
     console.log("good evening");
     setTimeout(() => {
         console.log("this is the last line of code");
     })
    await console.log("good night");
    console.log("good afternoon");
};

hello();
console.log("helo there !!");


 function myDisplayer(some) {
  console.log("i need to print before hi");
  console.log(some);
}

function myFirst() {
  console.log("welcome");
  myDisplayer("Hello");
  console.log("hi");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();



function myDisplayer() {
    console.log("message");
}
myDisplayer();

function hello() {
    console.log("gooda morning");
}
hello();

