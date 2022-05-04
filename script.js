function timer() {
  const now = new Date();
  const eventFinish = new Date(2022, 05, 05, 12, 00);
  const diffTime = eventFinish.getTime() - now.getTime();
  if (diffTime <= 0) {
    return false;
  }

  let s = Math.floor(diffTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  s = s % 60;
  m = m % 60;
  h = h % 24;
  h = h < 10 ? '0' + h : h;
  s = s < 10 ? '0' + s : s;
  m = m < 10 ? '0' + m : m;

  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  setTimeout(timer, 1000);
}
timer();
