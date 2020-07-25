function jump() {
  var d = new Date();
  var d = new Date();
  var d = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("month").innerHTML = months [d.getMonth()];
  document.getElementById("day").innerHTML = d.getDate();
  document.getElementById("year").innerHTML = d.getFullYear();
}
function vball(){
  var now  = new Date();
  	var weekday = new Array(7);
  weekday[0]=  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var day = weekday[now.getDay()];

  	document.writeln("<p>Today is " + day + "</p>");

  	if (day == "Monday") {
        document.writeln("<h2>There is volleyball today.</h2>");
      }
  	else if(day = "Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"){
        document.writeln("<h2>There's no volleyball today</h2>");
      }
      setTimeout(function() {
      location.reload();
      }, 10000);
}
function gallery2(){
  window.open("gallery2.html");
}
function gallery3(){
  window.open("gallery3.html");
}
function gallery(){
  window.open("gallery.html");
}
function gallery4(){
  window.open("gallery4.html")
}
function gallery7(){
  window.open("gallery7.html");
}
function gallery6(){
  window.open("gallery6.html");
}
function gallery5(){
  window.open("gallery5.html");
}
function gallery8(){
  window.open("gallery8.html");
}
function gallery9(){
  window.open("gallery9.html");
}
function gallery10(){
  window.open("gallery10.html");
}
function gallery11(){
  window.open("gallery11.html");
}
function gallery12(){
  window.open("gallery12.html");
}
function gallery13(){
  window.open("gallery13.html");
}
function gallery14(){
  window.open("gallery14.html");
}
function gallery15(){
  window.open("gallery15.html");
}
function gallery16(){
  window.open("gallery16.html");
}
function gallery17(){
  window.open("gallery17.html");
}
function gallery18(){
  window.open("gallery18.html");
}
function gallery19(){
  window.open("gallery19.html");
}
