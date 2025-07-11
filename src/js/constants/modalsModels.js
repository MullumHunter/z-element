function getModalElement(string, containerClass) {
    const temp = document.createElement('div');

    temp.className = containerClass;
    temp.innerHTML = string;

    return temp;
}

export const modalForm = getModalElement(`
    <h2 class="modal__title">SEND US MESSAGE</h2>
    <form class="modal__data" id="modal-form">
        <div class="modal__block">
            <label class="modal__label" for="name">Full Name</label>
            <input class="modal__input" type="text" name="name" id="name" placeholder="Your Name">
        </div>
        <div class="modal__block">
            <label class="modal__label" for="email">Email</label>
            <input class="modal__input" type="email" name="email" id="email" placeholder="Your Email">
        </div>
        <div class="modal__block">
            <label class="modal__label" for="message">Message</label>
            <textarea class="modal__input modal__area" name="message" id="message" placeholder="Your Message"></textarea>
        </div>
        <button class="modal__submit" name="submit">SUBMIT</button>
    </form>
    <button class="modal__close">
        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
          <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"></path>
        </svg>
    </button>
`, 'modal__form');
export const modalSuccess = getModalElement(`
    <svg class="modal__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
        <path style="fill:#D7EBFF;" d="M256,512C114.837,512,0,397.157,0,256S114.837,0,256,0s256,114.843,256,256S397.163,512,256,512z"/>
        <path style="fill:#C4E2FF;" d="M512,256C512,114.843,397.163,0,256,0v512C397.163,512,512,397.157,512,256z"/>
        <path style="fill:#88CC2A;" d="M256,478.609c-122.75,0-222.609-99.864-222.609-222.609S133.25,33.391,256,33.391  S478.609,133.256,478.609,256S378.75,478.609,256,478.609z"/>
        <path style="fill:#7FB335;" d="M478.609,256c0-122.744-99.859-222.609-222.609-222.609v445.217  C378.75,478.609,478.609,378.744,478.609,256z"/>
        <path style="fill:#FFFFFF;" d="M233.739,356.174c-8.544,0-17.087-3.261-23.609-9.783l-68.804-68.804  c-13.044-13.038-13.044-34.179,0-47.218c13.044-13.044,34.174-13.044,47.218,0l45.195,45.19l95.282-95.278  c13.044-13.044,34.174-13.044,47.218,0c13.044,13.038,13.044,34.179,0,47.218L257.348,346.391  C250.827,352.913,242.283,356.174,233.739,356.174z"/>
        <path style="fill:#EDF0F2;" d="M329.021,180.283L256,253.3v94.192c0.435-0.393,0.928-0.681,1.348-1.101l118.891-118.891  c13.044-13.038,13.044-34.179,0-47.218C363.196,167.239,342.065,167.239,329.021,180.283z"/>
    </svg>
    <h2 class="modal__message">Your Message Successfully Sent</h2>
    <button class="modal__close">
        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
          <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"></path>
        </svg>
    </button>
`, 'modal__success');
export const modalError = getModalElement(`
    <svg class="modal__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
        <path style="fill:#FF7855;" d="M0,256c0,141.384,114.615,256,256,256l22.261-256L256,0C114.615,0,0,114.615,0,256z"/>
        <path style="fill:#FF562B;" d="M256,0v512c141.384,0,256-114.616,256-256S397.384,0,256,0z"/>
        <polygon style="fill:#FFFFFF;" points="161.555,114.333 114.333,161.555 208.778,256 114.333,350.445 161.555,397.667 256,303.222   278.261,256 256,208.778 "/>
        <polygon style="fill:#FFEAC3;" points="397.667,161.555 350.445,114.333 256,208.778 256,303.222 350.445,397.667 397.667,350.445   303.222,256 "/>
    </svg>
    <h2 class="modal__message">Oops! Something went wrong.<br>Try again later.</h2>
    <button class="modal__close">
        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
          <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"></path>
        </svg>
    </button>
`, 'modal__error');
