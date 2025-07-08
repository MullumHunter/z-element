export default class Modal {
    constructor(container, modal, onOpen = () => {}, onClose = () => {}) {
        this.container = container;

        this.open = () => {
            onOpen();

            if (!container || !modal) return;

            container.innerHTML = '';
            container.appendChild(modal);
        };
        this.close = () => {
            onClose();

            if (!container || !modal) return;

            container.innerHTML = '';
        };
    }
}
