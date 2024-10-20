// Function to toggle submenu visibility and arrow rotation on click
document.querySelectorAll('.has-submenu').forEach(menu => {
    menu.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
        const submenu = this.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});

// Function to see more the folders
document.addEventListener('DOMContentLoaded', function () {
    const fileList = document.getElementById('folderList');
    const files = fileList.querySelectorAll('.folder');
    const seeMoreBtn = document.getElementById('seeMore');

    for (let i = 5; i < files.length; i++) {
        files[i].style.display = 'none';
    }
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function () {
            files.forEach(file => {
                file.style.display = 'flex';
            });
            this.style.display = 'none';
        });
    }
});

// Function to see more the files
document.addEventListener('DOMContentLoaded', function () {
    const fileList = document.getElementById('fileList');
    const files = fileList.querySelectorAll('.file');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    for (let i = 6; i < files.length; i++) {
        files[i].style.display = 'none';
    }
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function () {
            files.forEach(file => {
                file.style.display = 'flex';
            });
            this.style.display = 'none';
        });
    }
});

// Function to see more profile dropdown
document.addEventListener('DOMContentLoaded', function () {
    const profileLink = document.querySelector('.profile-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    profileLink.addEventListener('click', function (event) {
        event.preventDefault();
        profileLink.classList.toggle('active');
        dropdownMenu.classList.toggle('show');
    });

    // Close the dropdown when clicking outside the profile area
    document.addEventListener('click', function (event) {
        if (!profileLink.contains(event.target)) {
            profileLink.classList.remove('active'); 
            dropdownMenu.classList.remove('show');
        }
    });
});

function toggleView(button, view) {
    var buttons = document.querySelectorAll('.view-toggle button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
        btn.innerHTML = btn.innerHTML.replace('<i class="fas fa-check"></i>', '');
    });
    button.classList.add('active');
    button.innerHTML = '<i class="fas fa-check"></i>' + button.innerHTML;

    var listContainer = document.getElementById('list');
    var gridContainer = document.getElementById('grid');

    if (view === 'grid') {
        listContainer.classList.add('hidden');
        gridContainer.classList.remove('hidden');
    } else {
        listContainer.classList.remove('hidden');
        gridContainer.classList.add('hidden');
    }
}