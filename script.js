function timer() {
    var now = new Date();
    var eventFinish = new Date(2020, 06, 10, 14, 31);
    var diffTime = eventFinish.getTime() - now.getTime();
    if(diffTime <= 0){
        return false;
    }
    var s = Math.floor(diffTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    s = s % 60;
    m = m % 60;
    h = h % 24;
    h = (h < 10) ? "0" + h : h;
    s = (s < 10) ? "0" + s : s;
    m = (m < 10) ? "0" + m : m;

    var days = document.getElementById('days');
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    hours.textContent = h;
    hours.innerHTML = h;
    minutes.textContent = m;
    minutes.innerHTML = m;
    seconds.textContent = s;
    seconds.innerHTML = s;
    setTimeout(timer,1000)
}
timer();