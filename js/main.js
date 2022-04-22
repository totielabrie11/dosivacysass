const d = document
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	let valorDiaNoche = d.body.classList.toggle('dark');
	 btnSwitch.classList.toggle('active');
	 
});