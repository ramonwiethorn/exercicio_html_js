const form = document.getElementById('formulario');
	

	function maiorQue (n1,n2){
    if (n1>=n2){
	alert("Não Autorizado");
    n1 ='';
    n2 ='';
	}else{
	alert("Autorizado");
    n1 ='';
    n2 ='';
	}
}
	
form.addEventListener('submit',function(e){
    e.preventDefault();


    const n1 = document.querySelector('#n1');
    const n2 = document.querySelector('#n2');
    const value1 = n1.value;
    const value2 = n2.value;

	maiorQue(value1,value2);
});