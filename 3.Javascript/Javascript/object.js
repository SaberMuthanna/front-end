//Real Life Objects, Properties, and Methods
/* ====================This first object================================================
person = {
    fName:"saber",
    lName:"Mohammed",
    age:29
}
document.write( "fName :"+person.fName+"<br>lName" + person.lName+"<br>brAge : " + person.age);
*/
//===============THis seconde object===================================================
// var car = new Object();
// car.name = "ford";
// car.model= "mustang";
// car.year= 2019;
// document.write("carName  :" + car.name+"<br>" + "Model : "+ car.model+"<br>"
//     +"carYear"+car.year +"<br>");
//===============This  3 object ======================================================
function myEmployee( id , fName , lName ,age ,salary) {
    this.id = id;
    this.fName= fName;
    this.lName = lName;
    this.age=  age;
    this.salary= salary;
}
emp = new myEmployee(1,"saber","Mohammed",29,15000);
document.write(emp.id +"<br>"+ emp.fName+"<br> " + emp.lName +" <br>"+ emp.age);
//=====================================================================================
