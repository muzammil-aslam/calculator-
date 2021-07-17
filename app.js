function getValue(value){
    var box=document.getElementById('box');
    box.value=box.value+value
}

function calculate(){
    var box=document.getElementById('box');
    var total=eval(box.value)
    box.value=total
}
