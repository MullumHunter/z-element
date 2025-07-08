export default class SendForm {
    constructor(formElement) {
        this.form = formElement;
        this.submit = formElement.querySelector('button');
        this.inputs = Array.from(formElement.querySelectorAll('input, textarea'));
    }
    getFormData() {
        const formData = {};

        this.inputs.forEach((input, inputIndex) => {
            formData[input?.name ?? `input_${inputIndex}`] = input.value.trim();
        });

        return JSON.stringify(formData, null, 2);
    }
    clearForm() {
        this.inputs.forEach((input, inputIndex) => {
            input.value = '';
        });
    }
    async send() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const json = this.getFormData();

        this.submit.disabled = true;

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: json,
            });

            if (!response.ok) {
                this.submit.disabled = false;

                throw new Error(`Response status: ${response.status}`);
            }

            this.submit.disabled = false;
            this.clearForm();

            return true;
        } catch (error) {
            this.submit.disabled = false;

            console.error(error.message);
        }
    }
}
