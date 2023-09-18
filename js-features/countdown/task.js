const timer = document.getElementById("timer");
console.log(timer.textContent);
let intervalId = setInterval(() => {
    timer.textContent -=1;
    if (timer.textContent === "0") {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!")
    }
}, 1000)