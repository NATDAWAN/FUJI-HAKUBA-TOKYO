// Countdown to Trip
const tripDate = new Date("2027-02-17T20:00:00");
function updateCountdown() {
    const now = new Date();
    const diff = tripDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const mins = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const countdown = document.getElementById("countdown");
    if (countdown) {
        countdown.innerHTML =
        "⏳ " + days +
        " Days " +
        hours +
        " Hours " +
        mins +
        " Minutes";
    }
}
setInterval(updateCountdown,1000);
updateCountdown();
