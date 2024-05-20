

function enviarRegistro(){
    let name = document.getElementById("name").value;
    console.log(name.length);
    let lastname= document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    

    if(name.length == 0 || lastname.length == 0 || email.length == 0 || password.length == 0 ){
        Swal.fire({
            title: "Cajas de texto vacias",
            text: "Ingrese sus datos en el formulario",
            icon: "error"
            
        });
    }
}