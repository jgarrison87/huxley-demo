const phaseTwo = document.getElementById('phase-two');
const machineCity = document.getElementById('machine-city-enter');

phaseTwo.addEventListener('click', e => {
    machineCity.classList.add('machine-city-denied');
    machineCity.innerHTML('ACCESS DENIED');
});

function changeText() {
  machineCity.innerText('ACCESS DENIED');
}