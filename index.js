/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btn = document.getElementById("btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

btn.addEventListener("click", function() {
    length.innerHTML = `${numInput.value} meters = ${(numInput.value * 3.281).toFixed(3)} feet | ${numInput.value} feet = ${(numInput.value / 3.281).toFixed(3)} meters`
    
    volume.innerHTML = `${numInput.value} liters = ${(numInput.value * 0.264).toFixed(3)} galons | ${numInput.value} galons = ${(numInput.value / 0.264).toFixed(3)} liters`
    
    mass.innerHTML = `${numInput.value} kilos = ${(numInput.value * 2.204).toFixed(3)} pounds | ${numInput.value} pounds = ${(numInput.value / 2.204).toFixed(3)} kilos`
})


