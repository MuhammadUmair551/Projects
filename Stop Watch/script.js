
jsMin = 0;
jsSec = 0;
jsMsec = 0;
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var minDot = document.getElementById("min-dot");
var play = document.getElementById("play")
var pause = document.getElementById("pause")
var resetbtn = document.getElementById("reset-btn");
var isRunning = false;
var interval;

function startStop() {
    if (!isRunning) {
        interval = setInterval(function () {
            jsMsec++;
            msec.innerHTML = jsMsec;

            if (jsMsec >= 100) {
                jsSec++;
                sec.innerHTML = jsSec;
                jsMsec = 0;
            }
            if (jsSec >= 59) {
                jsMin++;
                min.style.display = "block";
                minDot.style.display = "block";
                min.innerHTML = jsMin;
                jsSec = 0;
            }
        }, 10)

        pause.style.display = "block"
        play.style.display = "none";
    }
    else {
        clearInterval(interval);
        pause.style.display = "none";
        play.style.display = "block";
    }

    isRunning = !isRunning;
}

function reset(){
    clearInterval(interval);
    jsMin = 0;
    jsSec = 0;
    jsMsec = 0;
    min.innerText = jsMin;
    sec.innerHTML = jsSec;
    msec.innerHTML = jsMsec + "0";

    isRunning = false;
    pause.style.display = "none";
    play.style.display = "block";
}
