const lengthMeasurement = document.getElementById("length-measurements")
const volumeMeasurement = document.getElementById( "volume-measurements")
const massMeasurement = document.getElementById("mass-measurements")
const convertBtn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number-box")

convertBtn.addEventListener("click", function() {
  const number = numberInput.value
  lengthMeasurement.textContent = `${number} meters = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters`
  
  volumeMeasurement.textContent = `${number} liters = ${(number * 0.264).toFixed(3)} gallons | ${number} gallons = ${(number / 0.264).toFixed(3)} liters`
  
  massMeasurement.textContent = `${number} kilos = ${(number * 2.205).toFixed(3)} pounds | ${number} pounds = ${(number / 2.204).toFixed(3)} kilos`
})
