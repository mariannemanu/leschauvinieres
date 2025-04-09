document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne tous les containers qui doivent ouvrir une modal
    const containers = document.querySelectorAll('.container');
    console.log("Containers found:", containers);  // Vérification que les containers sont bien récupérés

    // Fonction pour ouvrir la modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex"; // Afficher la modal
            console.log(`Opening modal with ID: ${modalId}`); // Log pour confirmer que la modal s'ouvre
        } else {
            console.log("Modal not found!");
        }
    }

    // Fonction pour fermer la modal
    function closeModal(modal) {
        modal.style.display = "none"; // Cacher la modal
        console.log("Modal closed");
    }

    // Ajoute l'événement pour ouvrir la modal lorsque le container est cliqué
    containers.forEach(container => {
        console.log("Container clicked:", container);  // Log pour vérifier que chaque container est bien cliqué
        container.addEventListener('click', () => {
            const modalId = container.querySelector('.container-text').getAttribute('data-modal');
            console.log(`Container clicked, modalId: ${modalId}`); // Log de modalId
            if (modalId) {
                openModal(modalId); // Ouvre la modal correspondante
            } else {
                console.log("No modalId found on this container");
            }
        });
    });

    // Ajoute l'événement pour fermer la modal lorsque la croix est cliquée
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal); // Ferme la modal
        });
    });

    // Ferme la modal si l'utilisateur clique en dehors de la modal (sur l'arrière-plan)
window.addEventListener('click', (e) => {
    // Sélectionne toutes les modals
    const modals = document.querySelectorAll('.modal');

    // Vérifie si le clic s'est fait sur l'arrière-plan de la modal
    modals.forEach(modal => {
        if (e.target === modal) { // Si l'utilisateur clique sur l'arrière-plan (la div .modal)
            closeModal(modal); // Ferme la modal
        }
    });
});

});

function printRecipe() {
    const modalContent = document.querySelector('.modal-content');
    const printWindow = window.open('', '', 'height=600,width=800');
    
    // Créer le contenu à imprimer
    printWindow.document.write('<html><head><title>Impression de la recette</title></head><body>');
    printWindow.document.write(modalContent.innerHTML); // Ajoute le contenu de la modal dans la fenêtre d'impression
    printWindow.document.write('</body></html>');
    
    // Attendre que le contenu soit chargé avant d'imprimer
    printWindow.document.close();
    printWindow.print();
}