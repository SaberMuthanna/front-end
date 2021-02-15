/* Variable Declaration
 In JavaScript, a variable can be declared using any one of the following keywords.
1.  var
    -fuction scope
    - can be Reddeclare
2.  let
    -  -Block scope
    - can not  be Reddeclare
3. const
      -Block scope
    - can noot be Reddeclare

*/
/*==========================================
var a;
let b;
console.log(a); // undefined
console.log(b); // undefined
*/

function varTest() {
    var x = 1; {
        var x = 2; // same variable!
        console.log(x); // 2
    }
    console.log(x); // 2
}

function letTest() {
    let x = 1; {
        let x = 2; // different variable
        console.log(x); // 2
    }
    console.log(x); // 1
}

varTest();
console.log("=================================");
letTest();