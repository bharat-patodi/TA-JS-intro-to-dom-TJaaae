// Clock outer body style
let body = document.querySelector("body");
let clock = document.createElement("div");
body.append(clock);
clock.style.width = "500px";
clock.style.height = "500px";
clock.style.border = "25px solid";
clock.style.borderImageSource = "linear-gradient(to left, #e66465, #9198e5)";
clock.style.borderImageSlice = 1;
clock.style.backgroundColor = "salmon";
clock.style.position = "relative";
clock.style.margin = "5rem auto";

// Clock hand creation
let secondHand = document.createElement("div");
let minuteHand = document.createElement("div");
let hourHand = document.createElement("div");
clock.append(hourHand, minuteHand, secondHand);

// Second hands' styling
secondHand.style.width = "1px";
secondHand.style.height = "40%";
secondHand.style.border = "3px solid black";
secondHand.style.position = "absolute";
secondHand.style.top = "10%";
secondHand.style.left = "50%";

// Minute hands' styling
minuteHand.style.width = "1px";
minuteHand.style.height = "30%";
minuteHand.style.border = "4px solid black";
minuteHand.style.position = "absolute";
minuteHand.style.top = "20%";
minuteHand.style.left = "50%";

// Hour hands' styling
hourHand.style.width = "1px";
hourHand.style.height = "20%";
hourHand.style.border = "5px solid black";
hourHand.style.position = "absolute";
hourHand.style.top = "30%";
hourHand.style.left = "50%";

// Date Object

setInterval(() => {
  let newDate = new Date();

  secondHand.style.transformOrigin = "center bottom";
  secondHand.style.transform = `rotate(${newDate.getSeconds() * 6}deg)`; // rotate 360 degrees every minute => rotate 6 deg every second

  minuteHand.style.transformOrigin = "center bottom";
  minuteHand.style.transform = `rotate(${
    (newDate.getMinutes() + newDate.getSeconds() / 60) * 6
  }deg)`; // rotate 6 degrees every minute => rotate 0.1 deg every second

  hourHand.style.transformOrigin = "center bottom";
  hourHand.style.transform = `rotate(${
    ((newDate.getMinutes() + newDate.getSeconds() / 60) / 60 +
      newDate.getHours()) *
    30
  }deg)`; // rotate 0.5 degrees every minute => rotate 0.00834 deg every second
}, 1000);
