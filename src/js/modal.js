
    const openModalBtn = document.querySelector(".js-open-modal");
      const closeModalBtn = document.querySelector(".js-close-modal");
      const modal = document.querySelector(".js-modal");
      
      openModalBtn.addEventListener("click", toggleModal);
      closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      modal.classList.toggle("is-hidden");
    }