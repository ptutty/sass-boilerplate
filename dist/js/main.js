$(document).ready(function () {
    const menuBtn = $('.menu-btn');
    const menu = $('.menu');
    const menuNav = $('.menu-nav');
    const menuBranding = $('.menu-branding');
    const navItems = $('.nav-item');
    let showMenu = false;

    // toggle menu
    menuBtn.click(function (e) {
        console.log('hello world');
        if (!showMenu) {
            menuBtn.addClass('close');
            menu.addClass('show');
            menuNav.addClass('show');
            menuBranding.addClass('show');
            navItems.each(function () {
                $(this).addClass('show');
            });
            showMenu = true;
        } else {
            menuBtn.removeClass('close');
            menu.removeClass('show');
            menuNav.removeClass('show');
            menuBranding.removeClass('show');
            navItems.each(function () {
                $(this).removeClass('show');
            });
            showMenu = false;
        }
    });
});