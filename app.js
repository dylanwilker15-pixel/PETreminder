// ABRIR / CERRAR MENÚ LATERAL
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.width = menu.style.width === "220px" ? "0" : "220px";
}

// CAMBIAR SECCIÓN
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
    toggleMenu();
}

// GUARDAR MASCOTA EN localStorage
document.getElementById("petForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("petName").value;
    let type = document.getElementById("petType").value;
    let age = document.getElementById("petAge").value;

    let pet = { name, type, age };

    let pets = JSON.parse(localStorage.getItem("pets")) || [];
    pets.push(pet);

    localStorage.setItem("pets", JSON.stringify(pets));

    document.getElementById("saveMessage").textContent = "Mascota guardada correctamente ✔";

    document.getElementById("petForm").reset();
    loadPets();
});

// LISTAR MASCOTAS
function loadPets() {
    let pets = JSON.parse(localStorage.getItem("pets")) || [];
    let list = document.getElementById("petList");
    list.innerHTML = "";

    pets.forEach((p, index) => {
        let li = document.createElement("li");
        li.textContent = `${p.name} - ${p.type} (Edad: ${p.age})`;
        list.appendChild(li);
    });
}

// Cargar mascotas al iniciar
loadPets();
