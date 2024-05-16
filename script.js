AOS.init();

// menu for mobile
const menuBar = document.querySelector('.mobile-menubar-background');
const showMenuBarBtn = document.querySelector('.menu-btn');
const closeMenuBarBtn = document.querySelector('.close-menu-icon');
const coverImage = document.querySelector('.cover-burger-lighten');

function showMenu()
{
    menuBar.style.display = 'flex';
    coverImage.style.display = 'none';
}
function closeMenuBar()
{
    menuBar.style.display = 'none';
    coverImage.style.display = 'block';
}

showMenuBarBtn.addEventListener('click', showMenu);
closeMenuBarBtn.addEventListener('click', closeMenuBar);

const mobileMenubarItems = document.querySelectorAll('.mobile-menubar ul li');
mobileMenubarItems.forEach(item => {
    item.addEventListener('click', closeMenuBar);
});



// search bar
const searchBar = document.querySelector('.serch-bar');
const desktopSearchIcon = document.querySelector('.desktop-search-icon');
const mobileSearchIcon = document.querySelector('.mobile-search-icon');
const closeSearchBtn = document.querySelector('.close-searchBar');

function showSearchBar()
{
    searchBar.style.display = 'flex';
    console.log('clicked');
}

function closeSearchBar(){
    searchBar.style.display = 'none';
}

desktopSearchIcon.addEventListener('click', showSearchBar);
mobileSearchIcon.addEventListener('click', showSearchBar);
closeSearchBtn.addEventListener('click', closeSearchBar);



