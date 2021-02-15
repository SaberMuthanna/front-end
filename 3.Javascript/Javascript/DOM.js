//Finding HTML elements by id
// function  dom1() {
//     var num = 5;
//     document.getElementById("dom").innerHTML= num*num;
// }
// dom1();
//
// function  dom2() {
//     var num = 6 ;
//     document.getElementById('d').innerHTML= num*num;
// }
// dom2();
//==============Finding HTML Elements by Name
// function info() {
//     var nodes = document.getElementsByName("myname");
//     var fname = nodes[0].innerHTML= "saber";
//     var lname =nodes[1].innerHTML= "Muthanna";
//     var age =nodes[2].innerHTML=100;
//     document.write("fName  :"+fname+"<br>"+"lName:" + lname+"<br>" + "ade :" + age);
//
// }
// info();
document.write("<br>=========================================================<br>")
function info1() {
    var nodes = document.getElementsByName("myname1");
     var fname1 = nodes[0].value;
    var lname1 =nodes[1].value;
    var age1 =nodes[2].value;
    document.write("fName1  :"+fname1+"<br>"+"lName1:" + lname1+"<br>" + "age1 :" + age1);
}
