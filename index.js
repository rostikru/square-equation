var a = Number(prompt ('Enter a'));
var b = Number(prompt ('Enter b'));
var c = Number(prompt ('Enter c'));


function squareEquation(a,b,c) {
    var result;
    if (a===0){
        result = 'Please insert other "a". ';
        return  result;
    }
    var d= desc(a,b,c);
    if (d<0){
        return 'There are no real roots, becouse d<0'}
    var x1= (-b+Math.sqrt(d))/2*a;
    var x2= (-b-Math.sqrt(d))/2*a;
    return 'x1 =' + x1 +"<br>"+ 'x2 = ' + x2;
}
function desc(a,b,c) {
    return b*b-4*a*c;
}
document.write(squareEquation(a,b,c));