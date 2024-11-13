document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    //Validar compo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if(entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduci tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    //Validar correo electronico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Patron de validación básico

    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor introducí un mail válido'
        emailError.classList.add('error-message')
    }else{
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    //Validar la contraseña
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,15}$/;

    if(!contrasenaPattern.test(contrasenaEntrada.value)){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, números, maýusculas y minúsculas y caracteres especiales'
        contrasenaError.classList.add('error-message')
    }else{
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    //Si todos los campos son validos, enviar formulario
    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){

        //BACKEND QUE RECIBA LA INFORMACIÓN
        alert('El formulario se ha enviado con exito')
        document.getElementById('formulario').reset();
    }

})