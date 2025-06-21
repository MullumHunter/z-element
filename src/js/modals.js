const body = document.querySelector('.body');
const letsTalkBtn = document.querySelector('.cooperation__btn');
const modals = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form');
const modalSuccess = document.querySelector('.modal__success');
const modalCloseBtn= document.querySelectorAll('.modal__close');
const modalBlackbox = document.querySelectorAll('.modal__blackbox');

function onOpenModalForm() {
    clearModalContainer();
    modals.classList.add('modal__visible');
    modalForm.classList.add('modal__form--visible');
    body.classList.add('body__modal-opened');
}
function onCloseModals() {
    modals.classList.remove('modal__visible');
    body.classList.remove('body__modal-opened');
}
function clearModalContainer() {
    modalForm.classList.remove('modal__form--visible');
    modalSuccess.classList.remove('modal__success--visible');
}
export function openSuccessModal() {
    modalForm.classList.remove('modal__form--visible');
    modalSuccess.classList.add('modal__success--visible');
}

letsTalkBtn.addEventListener('click', onOpenModalForm);
modalCloseBtn.forEach(modal => modal.addEventListener('click', onCloseModals));
modalBlackbox.forEach(modal => modal.addEventListener('click', onCloseModals));
