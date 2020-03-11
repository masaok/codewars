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
