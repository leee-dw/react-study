setInterval(logClockTime, 1000)

function logClockTime() {
  var time = getClockTime()
  console.clear()
  console.log(time)
}

function getClockTime() {
  const date = new Date()
  const [hour, min, sec] = 
  [
    date.getHours(), 
    date.getMinutes(), 
    date.getSeconds()
  ]

  const times = (time) => {
    const s = '00' + time
    return  s.substr(s.length -2, 2)
  }

  return `${times(hour)}:${times(min)}:${times(sec)}`
}