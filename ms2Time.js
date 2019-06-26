// milliseconds: new Date() 差值

// 按进制，先取余数（得到本位的数），再减去该余数并除以进制（得到上一位的数）
const ms2Time = (milliseconds) => {
  let time = milliseconds
  const ms = milliseconds % 1000
  time = (milliseconds - ms) / 1000
  const seconds = time % 60
  time = (time - seconds) / 60
  const minutes = time % 60
  const hours = (time - minutes) / 60

  const result = `${add0(hours, 2)} : ${add0(minutes, 2)} : ${add0(seconds, 2)} . ${add0(ms, 3)}`
  return result
}

const add0 = (num, len) => {
  let str = num.toString()
  while (str.length < len) {
    str += '0'
  }
  return str
}
