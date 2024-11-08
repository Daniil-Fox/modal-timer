document.addEventListener('DOMContentLoaded', function () {
    let timerElement = document.getElementById('timer');
    let progressBar = document.getElementById('progress-bar');
    let timeLeft = 300; // 5 minutes in seconds
    let flag = true;
    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        progressBar.style.width = `${(timeLeft / 300) * 100}%`;

        if (timeLeft > 0 && !flag) {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        }
    }

    function modal(){
        const modal = document.querySelector('.modal')
        if(modal){
            const modalBtn = document.querySelector('.modal-btn-f')
            const modalBody = modal.querySelector('.modal__body')
            modalBtn?.addEventListener('click', e => {
                e.preventDefault()
                modal.classList.add('active')
                flag = false
                updateTimer();
            })
            modalBody.addEventListener('click', e => {
                e.stopPropagation()
            })
            modal.addEventListener('click', e => {
                modal.classList.remove('active')
                flag = true
                timeLeft = 300
            })
        }
    }
    modal()
});