// Ajouter un projet avec Bootstrap
function ajouterProjet() {
    let nomProjet = prompt("Nom du projet ?");
    if (nomProjet) {
        let projetCard = document.createElement("div");
        projetCard.className = "col-md-4 project-card";
        projetCard.innerHTML = `
            <h4>${nomProjet}</h4>
            <p>Statut: <span class="badge bg-warning">En cours</span></p>
            <button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">🗑 Supprimer</button>
        `;
        document.getElementById("project-list").appendChild(projetCard);
    }
}

// Ajouter une tâche avec animation
function ajouterTache() {
    let taskInput = document.getElementById("new-task");
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `${taskInput.value} 
        <button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">🗑</button>`;
        document.getElementById("task-list").appendChild(li);
        taskInput.value = "";
    }
}

// Gérer l'upload des fichiers
document.getElementById("upload").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let fileDiv = document.createElement("div");
        fileDiv.className = "alert alert-info mt-2";
        fileDiv.innerHTML = `${file.name} <button class="btn-close" onclick="this.parentElement.remove()"></button>`;
        document.getElementById("file-list").appendChild(fileDiv);
    }
});
