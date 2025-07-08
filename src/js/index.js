import Modal from './createModal.js';
import ValidationForm from './validationForm.js';
import SendForm from './sendForm.js';
import {
    modalError,
    modalForm,
    modalSuccess
} from './constants/modalsModels.js';

const modalContainer = document.getElementById('modal-container');
const modalBlackbox = document.getElementById('modal-blackbox');
const modals = document.getElementById('modal');
const letsTalkBtn = document.getElementById('lets-talk-btn');
const form = modalForm.querySelector('#modal-form');
const onOpenModal = () => {
    modals?.classList.add('modal__visible');
    document.body.classList.add('body__modal-opened');
};
const onCloseModal = () => {
    modals?.classList.remove('modal__visible');
    document.body.classList.remove('body__modal-opened');
};
const onForceCloseModal = () => {
    onCloseModal();

    modalContainer.innerHTML = '';
};

const modalFormInstance = new Modal(
    modalContainer,
    modalForm,
    onOpenModal,
    onCloseModal
);
const successSendFormInstance = new Modal(
    modalContainer,
    modalSuccess,
    onOpenModal,
    onCloseModal
);
const errorSendFormInstance = new Modal(
    modalContainer,
    modalError,
    onOpenModal,
    onCloseModal
);
const formDataSender = new SendForm(form);

new ValidationForm(
    form,
    formDataSender.send.bind(formDataSender),
    () => {
        successSendFormInstance.open();
    },
    () => {
        errorSendFormInstance.open();
    },
);

modalBlackbox?.addEventListener('click', onForceCloseModal);
modalForm.querySelector('.modal__close')?.addEventListener('click', onForceCloseModal);
modalSuccess.querySelector('.modal__close')?.addEventListener('click', onForceCloseModal);
modalError.querySelector('.modal__close')?.addEventListener('click', onForceCloseModal);

letsTalkBtn?.addEventListener('click', modalFormInstance.open);
