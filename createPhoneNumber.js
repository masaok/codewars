// https://www.codewars.com/kata/525f50e3b73515a6db000b83
function createPhoneNumber(numbers){
  result = "("
  numbers.forEach((number, index) => {
    result += number
    if (index === 2) {
      result += ") "
    }
    if (index === 5) {
      result += "-"
    }
    
  })
  return result
}
