window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('loading-finish');
});

const endDate = new Date("Mar 20, 2020 00:00:00").getTime();

const timer = setInterval(() => {

    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.querySelector(".timer-days").innerHTML = days +
            "<p class='label'>DAY(S)</p>";

        document.querySelector(".timer-hours").innerHTML = ("0" + hours).slice(-2) +
            "<p class='label'>HR(S)</p>";

        document.querySelector(".timer-mins").innerHTML = ("0" + mins).slice(-2) +
            "<p class='label'>MIN(S)</p>";

        document.querySelector(".timer-secs").innerHTML = ("0" + secs).slice(-2) +
            "<p class='label'>SEC(S)</p>";

    } else {

        document.querySelector(".timer").innerHTML = "<p class='label_finished'>The day has finally arrived. ENJOY!</p>";

    }

}, 1000);