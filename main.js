var imageSF = document.querySelectorAll('.trip-image');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');


function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

imageSF[0].addEventListener('click', openModal);
imageSF[1].addEventListener('click', openModal);


// imageSF.onclick = openModal;
backdrop.onclick = closeModal;

console.log(imageSF);