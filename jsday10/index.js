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

