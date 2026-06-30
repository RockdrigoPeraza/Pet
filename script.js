function loadPet() {

    const params = new URLSearchParams(window.location.search);
    const petId = params.get("id");

    if (!petId) {
        document.getElementById("petName").textContent = "Sin información";
        document.getElementById("petInfo").textContent = "No se encontró el parámetro 'id'.";
        return;
    }

    fetch(`pets/${petId}.json`)
        .then(response => {
            if (!response.ok) throw new Error("No se encontró el archivo JSON");
            return response.json();
        })
        .then(data => {
            document.getElementById("petName").textContent = data.pet.name;
            document.getElementById("petInfo").textContent =
                `${data.pet.species} - ${data.pet.breed} - ${data.pet.sex}`;

            document.getElementById("ownerName").textContent = data.owner.name;
            document.getElementById("callButton").href = `tel:${data.owner.phone}`;
            
            // Emoji dinámico según especie
            const emoji = data.pet.species.toLowerCase() === "gato" ? "🐱" : "🐶";
            document.getElementById("petEmoji").textContent = emoji;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("petName").textContent = "Error";
            document.getElementById("petInfo").textContent = "No se pudo cargar la información.";
        });
}

loadPet();
