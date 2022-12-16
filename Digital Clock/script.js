// creating constant variable and assigning html valuse to the constant
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

// creating a function
function updateCLock() {
    let h = new Date().getHours()      // by using date() finction assingnig data to the new variable
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"


    if (h > 12) {    // using if statement to confirm correct meridiam is showing and resetting
        h = h - 12
        ampm = "PM"
    }


    //h = h < 10 ? "0" + h : h   using ternary operator to add "0" before single digit values
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    if (h < 10) {
        h = "0" + h              // using if statement to to perform above thing ||
    } else {
        h = h
    }


    hoursEl.innerText = h;          //changing innertext to show correct times
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(() => {        //this function used to reload  webpage every second
        updateCLock()
    }, 1000);

}


updateCLock()


