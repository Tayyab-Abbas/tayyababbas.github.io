var tday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var tmonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function GetClock() {
  var d = new Date();
  var nday = d.getDay(),
    nmonth = d.getMonth(),
    ndate = d.getDate();
  
  var nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = d.getSeconds(),
    ap;

  if (nhour == 0) {
    ap = " AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = " AM";
  } else if (nhour == 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour -= 12;
  }

  if (nmin <= 9) nmin = "0" + nmin;
  if (nsec <= 9) nsec = "0" + nsec;

  var islamicDate = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());

  var clocktext =
    // "" +
    // tday[nday] +
    // " " +
    // ndate +
    // " " +
    // tmonth[nmonth] +
    // ", " +
    nhour +
    ":" +
    nmin +
    ":" +
    nsec +
    ap;
    
  document.getElementById("clockbox").innerHTML = clocktext;
  document.getElementById("islamic-date").innerHTML = islamicDate;
}

GetClock();
setInterval(GetClock, 1000);
