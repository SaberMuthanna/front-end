//============this 1 way ==========================================
var  arr= [1 , "saber" , "Mohammed" , 29];
for (var index = 0; index < arr.length ; index++){
   var result = arr[index];
   document.write(result + "<br>");
}
document.write("=========================================<br>");
//=======this 2  way ==============================================
var arr1 = new Array();
arr1[0]= 1;
for(var index = 0; index < arr1.length ; index++){
    var result1 = arr1[index];
    arr1[1]= 2;
    arr1[2]= 3;
    arr1[3]= 4;
    document.write(result1 + "<br>");
}
//=========This 3 way ==============================================
document.write("=========================================<br>");
var arr2 = new Array(1 , "saber","Mohummed" , 13000);
for(var index = 0; index < arr2.length ; index++){
    var result2 = arr2[index];
    document.write(result2 + "<br>");
}
//=====================================================================