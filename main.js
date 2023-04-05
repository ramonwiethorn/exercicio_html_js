const btn = document.querySelector('#btnvalidar');

function maiorQue (n1,n2){
    if (n1>=n2){
        console.log("Não Autorizado");
    }else{
        console.log("Autorizado");
    }
}


btn = addEventListener('click', function(e){
    e.preventDefault();

    const n1 = document.querySelector('#n1');
    const n2 = document.querySelector('#n2');
    const value1 = n1.value;
    const value2 = n2.value;

    console.log(value1);
    console.log(value2);
    maiorQue(value1,value2);
});
