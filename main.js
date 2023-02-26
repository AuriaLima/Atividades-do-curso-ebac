function validar(){
    var numeroA = document.getElementById('numeroA')
    var numeroB = document.getElementById('numeroB')
    var numA = Number(numeroA.value)
    var numB = Number(numeroB.value)
    const buttonEvent=document.getElementById("submit");

    buttonEvent.addEventListener("btn-testar",function(e){
        e.preventDefault();

        if (numB > numA) {
            alert("Formulário válido");
        }
        else {
            alert("Formulário inválido");
        }  
    })


    
    
    
    
    
    
    
    
    