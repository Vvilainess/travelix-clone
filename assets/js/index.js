(function main() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    function scrollTopHeader() {
        window.onscroll = () => {
            const offsetY = window.pageYOffset;
            const topBar = $(".top-bar");
            const navBar = $(".navbar");
            const navBarMenu = $(".main-nav-col");
            if (offsetY >= 200) {
                topBar.classList.add("scrolled");
                navBarMenu.classList.add("scrolled");
                navBar.style.background = "rgba(54, 19, 84, 0.85)";
            } else {
                topBar.classList.remove("scrolled");
                navBarMenu.classList.remove("scrolled");
                navBar.style.background = "rgba(54, 19, 84, 0.6)";
            }
        };
    }
    function searchMenu() {
        const menuItems = $$(".search-menu-item");
        menuItems.forEach((menuItem) => {
            menuItem.onclick = () => {
                $(".search-menu-item.active").classList.remove("active");
                menuItem.classList.add("active");
            };
        });
    }
    searchMenu();
    scrollTopHeader();
})();
