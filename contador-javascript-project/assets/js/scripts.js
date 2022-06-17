var currentNumberWrapper  /*o elemento span */ = document.getElementById("currentNumber");
var currentNumber /* a declaração da tag span*/ = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML /* o html que esta dentro do whapper (tag span)*/ = currentNumber;

}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    
}