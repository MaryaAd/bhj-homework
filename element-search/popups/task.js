const popup = document.querySelector('#modal_main');
const close = document.querySelectorAll('div.modal__close');
const successBtn = document.querySelector('.show-success');
const success = document.querySelector('#modal_success');

popup.className = 'modal modal_active';

function closePopup() {
    for (let i = 0; i < close.length; i++) {
        let eachClose = close[i];

        let closeFunc = () => {
            success.style.display = "none";
            popup.style.display = "none";
        };

        eachClose.onclick = closeFunc;
    }
}

successBtn.onclick = function successOpen() {
    popup.className = "modal";
    success.className = "modal modal_active";
};

closePopup();
