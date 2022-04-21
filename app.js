const phaseTwo = document.getElementById('phase-two');
const machineCity = document.getElementById('machine-city-enter');

phaseTwo.addEventListener('click', e => {
    machineCity.classList.add('machine-city-denied');
    machineCity.innerHTML('ACCESS DENIED');
});

function changeText() {
  machineCity.innerText('ACCESS DENIED');
}


// burger

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navItems = document.querySelector('.nav-items');

  burger.addEventListener('click', () => {
    navItems.classList.toggle('nav-active');
  });
}

navSlide();