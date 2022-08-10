const secondsHand = document.getElementById('seconds-hand')
const minutesHand= document.getElementById('minutes-hand')
const hoursHand= document.getElementById('hours-hand')

const secondsText = document.getElementById('seconds')
const minutesText= document.getElementById('minutes')
const hoursText = document.getElementById('hours')

function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const timeInterval = 6

    hoursText.textContent = hours + ":"
    minutesText.textContent = minutes + ':'

    if(seconds < 10){
        secondsText.textContent = '0' + seconds
    }
    else{
        secondsText.textContent = seconds
    }

    if(minutes < 10){
        minutesText.textContent = '0' + minutes + ':'
    }
    else{
        secondsText.textContent = seconds + ':'
    }

    secondsHand.style.transform = 'rotate(' + seconds * timeInterval + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds/ 10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)'
}

setInterval(getTime, 100)




