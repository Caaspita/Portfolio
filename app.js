document.getElementById("form").addEventListener("submit", function(event) {
    // Evitar el reinicio de la página
    event.preventDefault();
});

function validacion(){
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value

    const emailvalido = /\S+@\S+\.\S+/;


    if(nombre === "" || nombre.length > 50){
        console.log('Error nombre')
        
        return
    }

    if(emailvalido.test(email)){
        console.log(email)
    }

}