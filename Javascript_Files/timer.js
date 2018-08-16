Timer()
{
    var now = new.Date()
    var eventDate = new.Date(2018,11,25);

    var = currentTime = now.getTime();

    var = remTime = eventTime - currentTime;

    var s = Math.floor(remTime/ 1000)

    s = 60
    s = (s<10) ? "0" + s: s;

    document.getElementsByClassName('timer').innerHTML = s, "Seconds";
    document.getElementsByClassName('timer').textContent = s, "Seconds";

    setTimeout(Timer, 5000)
  }
