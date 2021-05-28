var str = 'Hello World';
document.write("<br>");
str.substr()
 var r= str.substr(1,5);
document.write("R  :" + r);
document.write("<br>=======================================");
document.write("<br>");
for(var index = 0; index < str.length ; index++){
    var result = str[index];
    document.write(result + "<br>");
}