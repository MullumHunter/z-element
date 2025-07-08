export default class ValidationForm {
    constructor(formElement, onFormValid, onSuccess, onError) {
        this.form = formElement;
        this.submit = formElement.querySelector('button');
        this.inputs = Array.from(formElement.querySelectorAll('input, textarea') ?? []);
        this.onFormValid = onFormValid;
        this.onSuccess = onSuccess;
        this.onError = onError;

        this.initListeners();
        this.onCheckOfValues.call(this);
    }
    initListeners() {
        this.form?.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (this.validate()) {
                const isOk = await this.onFormValid();

                if (!isOk) {
                    return this.onError();
                }

                return this.onSuccess();
            }
        });
        this.inputs.forEach(input => {
            input?.addEventListener('input', this.onCheckOfValues.bind(this));
        });
    }
    onCheckOfValues() {
        const isAnyInputEmpty = this.inputs.find((i) => {
            switch(i.type) {
                case 'checkbox':
                    return !i.checked;
                case 'text':
                    return !i.value;
                default:
                    return !i.value;
            }
        });

        if (!isAnyInputEmpty) {
            return this.submit.disabled = false;
        }

        return this.submit.disabled = true;
    }
    isValidEmail(email) {
        const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regExp.test(email);
    }

    isValidFullName(fullName) {
        return fullName.trim().split(/\s+/).length >= 2;
    }
    validate() {
        if (this.form.elements.name) {
            if (!this.isValidFullName(this.form.elements.name.value)) {
                return this.form.elements.name.focus();
            }
        } else if (this.form.elements.email) {
            if (!this.isValidEmail(this.form.elements.email.value)) {
                return this.form.elements.email.focus();
            }
        } else if (this.submit.disabled) {
            return false;
        }

        return true;
    }
}
