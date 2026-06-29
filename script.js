// Obtener parámetros de la URL

const params = new URLSearchParams(window.location.search);

// Obtener parámetro d

const encoded = params.get("d");

if(encoded){

    try{

        // Decodificar Base64

        const json = atob(encoded);

        // Convertir a objeto

        const data = JSON.parse(json);

        console.log(data);

        // Mostrar información

        document.getElementById("petName").textContent = data.pet.name;

        document.getElementById("petInfo").textContent =
        `${data.pet.species} • ${data.pet.breed} • ${data.pet.sex}`;

        document.getElementById("ownerName").textContent =
        data.owner.name;

        document.getElementById("callButton").href =
        `tel:${data.owner.phone}`;

    }

    catch(error){

        alert("La información del TAG NFC es inválida.");

        console.error(error);

    }

}else{

    document.getElementById("petName").textContent="Sin información";

    document.getElementById("petInfo").textContent="No se encontró el parámetro d.";

}