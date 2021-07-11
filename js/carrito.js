const agregarCarritoButtom = document.querySelector('#agregarCarrito');
agregarCarritoButtom.array.forEach(agregarCarrito => {
    agregarCarrito.addEventListener('click', () => console.log('click'))
});
