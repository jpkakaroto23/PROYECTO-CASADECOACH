const envio = async()=>{
    const formData = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,
        comuna: document.getElementById("comuna").value
    };

    try {
        const response = await fetch('http://localhost:5200/contacto/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        });

        if(response.ok){
            alert('Mensaje enviado con éxito');
        }else{
            alert('Error: ',error);
        }
    } catch (error) {
        console.error('Error: ', error);
        alert('Error al enviar el mensaje...');
    }
}

const boton = document.getElementById("btn");
boton.addEventListener('click', (a)=>{
    a.preventDefault();
})