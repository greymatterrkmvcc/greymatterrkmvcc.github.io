window.addEventListener('load', () => {
    // adds the fullpage effect
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3', 'section4'],
        navigationTooltips: ['Home', 'About', 'Events', 'Contact'],
        showActiveTooltip: false,
    });

    // removes the loading animation
    document.querySelector('.loader').classList.add('loading-finish');
});

// code for the countdown timer
const endDate = new Date("Mar 20, 2020 00:00:00").getTime();

// will execute the function after every 1000ms i.e 1s
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

        document.querySelector(".timer").innerHTML = "<p class='label_finished'>The day has finally arrived. ENJOY!<br>[Registration has been closed.]</p>";

    }

}, 1000);