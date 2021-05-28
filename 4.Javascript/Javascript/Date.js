
function myWatch() {
    var myday = new Date();
    var myHour = myday.getHours();
    var mymin = myday.getMinutes();
    var mysec = myday.getSeconds();
    document.getElementById("myp").innerHTML =
        "<h1>MyWatch</h1> " + "<br>"+ myHour + ":" + mymin + ":" + mysec;
   // document.write(myHour + ":" + mymin + ":" + mysec + "<br>");
    setTimeout(function () {
        myWatch();
    }, 1000)
}
myWatch()
//============================================================================================
// var  mydate = new Date();
// document.write("<br>");
// var mydate1 = mydate.getDate();
// document.write("Date : " + mydate1 );
// document.write("<br>");
// var myday = mydate.getDay()
// document.write("day : " + myday);
// document.write("<br>");
// var myfullYeay= mydate.getFullYear()
// document.write("fullYeay : " + myfullYeay);
// document.write("<br>");
// var myHours = mydate.getHours()
// document.write("Hours : " + myHours);
// document.write("<br>");
// var myMilliseconds = mydate.getMilliseconds()
// document.write("Milliseconds : " + myMilliseconds);
// document.write("<br>");
// var myMinutes = mydate.getMinutes()
// document.write("Minutes : " + myMinutes);
// document.write("<br>");
// var myMonth = mydate.getMonth();
// document.write("Month : " + myMonth);
// document.write("<br>");
