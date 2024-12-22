function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
  }
  if (h > 11) {
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  setTimeout(showTime, 1000);
}
showTime();
function showdate() {
  var obj = new Date();

  var m = obj.getMonth() + 1;

  var d = obj.getDate();

  var y = obj.getFullYear();

  var dy = obj.getDay();

  var mn = obj.getMonth();
  m = m < 10 ? "0" + m : m;
  dy = dy == 0 ? "Sunday" : dy;
  dy = dy == 1 ? "Monday" : dy;
  dy = dy == 2 ? "Tuesday" : dy;
  dy = dy == 3 ? "Wednesday" : dy;
  dy = dy == 4 ? "Thursday" : dy;
  dy = dy == 5 ? "Friday" : dy;
  dy = dy == 6 ? "Saturday" : dy;
  mn = mn == 0 ? "January" : mn;

  mn = mn == 1 ? "February" : mn;

  mn = mn == 2 ? "March" : mn;

  mn = mn == 3 ? "April" : mn;

  mn = mn == 4 ? "May" : mn;

  mn = mn == 5 ? "June" : mn;

  mn = mn == 6 ? "July" : mn;

  mn = mn == 7 ? "August" : mn;

  mn = mn == 8 ? "September" : mn;

  mn = mn == 9 ? "October" : mn;

  mn = mn == 10 ? "November" : mn;

  mn = mn == 11 ? "December" : mn;

  var date = d + "/" + m + "/" + y + "<br>" + dy + "," + mn + " " + y;

  document.getElementById("mydatedisplay").innerHTML = date;
}

showdate();
