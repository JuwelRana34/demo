document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-dropdown');
  
    const dropdownButton = document.getElementById('dropdownNavbarLink');
    const dropdownMenu = document.getElementById('dropdownNavbar');

    const dropdownButton2 = document.getElementById('dropdownNavbarLink2');
    const dropdownMenu2 = document.getElementById('dropdownNavbar2');
  

    const dropdownButton3 = document.getElementById('dropdownNavbarLink3');
    const dropdownMenu3 = document.getElementById('dropdownNavbar3');

    const dropdownButton4 = document.getElementById('dropdownNavbarLink4');
    const dropdownMenu4 = document.getElementById('dropdownNavbar4');
  
  
  dropdownButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
    });

    dropdownButton2.addEventListener('click', () => {
      dropdownMenu2.classList.toggle('hidden');
    });
    dropdownButton3.addEventListener('click', () => {
      dropdownMenu3.classList.toggle('hidden');
    });
    dropdownButton4.addEventListener('click', () => {
      dropdownMenu4.classList.toggle('hidden');
    });

    
  

  
    button.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  });


// hero section 

