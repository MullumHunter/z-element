import {openSuccessModal} from '/src/js/modals.js';

const modalSubmitBtn = document.querySelector('.modal__submit');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');

async function sendFormData(obj) {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj)
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        return true;
    } catch (error) {
        console.error(error.message);
    }
}
async function onSubmitForm() {
    if (!inputName.value) {
        return inputName.focus();
    } else if (!inputEmail.value) {
        return inputEmail.focus();
    } else if (!inputMessage.value) {
        return inputMessage.focus();
    }
    
    const success = await sendFormData({
        name: inputName.value,
        email: inputEmail.value,
        message: inputMessage.value
    });
    
    if (success) {
        clearForm();
        openSuccessModal();
    }
}
function clearForm() {
    inputName.value = '';
    inputEmail.value = '';
    inputMessage.value = '';
}

modalSubmitBtn.addEventListener('click', onSubmitForm);
