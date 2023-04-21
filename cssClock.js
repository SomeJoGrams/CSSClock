

var amountOfLines = 12;
var circleDeg = 360;

var clocks = document.getElementsByClassName("clock")

for (let ind = 0; ind < clocks.length; ind+=1){
    let curClock = clocks[ind]
    for (let curDeg = circleDeg; curDeg > 0; curDeg-=circleDeg/amountOfLines){
        let div = document.createElement("div")
        div.classList.add("timeLine")
        div.style.rotate = curDeg + "deg"
        curClock.appendChild(div)
        setTime(curClock,0,0)
    }
}

function setTime(clockElement,timeHours,timeMinutes){
    // 180 deg added to set the rotation to the start 0:00
    let hourDeg = 180 + (360 / 12) * timeHours
    let minuteDeg = 180 + (360 / 60) * timeMinutes
    // clockElement.getElementsByClassName("longPointer")[0].style = " rotate:" + minuteDeg +"deg"
    // clockElement.getElementsByClassName("shortPointer")[0].style = " rotate:" + hourDeg +"deg"
    clockElement.style.setProperty("--shortPointerDeg",minuteDeg +"deg")
    clockElement.style.setProperty("--longPointerDeg",hourDeg +"deg")
}
