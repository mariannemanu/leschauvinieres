// Fonction pour ouvrir la modal correspondante
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  // Fonction pour fermer la modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  // Ajouter des événements de clic aux sections
  document.querySelectorAll('.info-section1, .image-box1').forEach(element => {
    element.addEventListener('click', () => {
      openModal('modal1'); // Ouvre la modal1
    });
  });
  
  document.querySelectorAll('.info-section2, .image-box2').forEach(element => {
    element.addEventListener('click', () => {
      openModal('modal2'); // Ouvre la modal2
    });
  });

  document.querySelectorAll('.info-section3, .image-box3').forEach(element => {
    element.addEventListener('click', () => {
      openModal('modal3'); // Ouvre la modal2
    });
  });

  document.querySelectorAll('.info-section4, .image-box4').forEach(element => {
    element.addEventListener('click', () => {
      openModal('modal4'); // Ouvre la modal2
    });
  });

  document.querySelectorAll('.info-section5, .image-box5').forEach(element => {
    element.addEventListener('click', () => {
      openModal('modal5'); // Ouvre la modal2
    });
  });

  document.querySelectorAll('.info-section6, .image-box6').forEach(element => {
    element.addEventListener('click', () => {
      openModal('modal6'); // Ouvre la modal2
    });
  });

  // Fonctions d'ouverture et de fermeture de la modal
function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  // Ajouter d'autres événements pour chaque section (info-section3, etc.)
  
   