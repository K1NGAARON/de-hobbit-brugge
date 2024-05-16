$(document).scroll(function () {
    const header = $('.header');
    const logo = $('.header .logo')

    if ($(this).scrollTop() > header.height()) {
        header.addClass('active');
        $(logo).attr('src', '/assets/logo/logo-white.png');
    } else {
        header.removeClass('active');
        $(logo).attr('src', '/assets/logo/logo.png');
    }
});

$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

function closeMenu() {
    $('.small-menu-wrapper').css('display', 'none');
};

$('.small-menu-content .nav').click(closeMenu);

let animationStyle = "slideUp";
let animationTarget = ".animate";
let firstTime = true;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(entry.target).addClass(animationStyle);
        }
    });
});

const targets = $(animationTarget);
targets.each(function () {
    observer.observe(this);
});

$(window).scroll(function () {
    let contentToCheck = '.animated';
    var $contentElement = $(contentToCheck);

    if (firstTime == true && $contentElement.length > 0) {
        var top_of_element = $contentElement.offset().top;
        var bottom_of_element = top_of_element + $contentElement.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            firstTime = false;
        } else {
            return;
        }
    } else {
        return;
    }
});

const cookieBanner = document.querySelector(".cookie-banner-wrapper");
const cookiesAccepted = document.querySelector("#accept-cookies");
const blackOverlay = document.querySelector("#overlay");

// Accept cookies
cookiesAccepted.addEventListener("click", function acceptCookies() {
    blackOverlay.classList.add("hide-cookie-banner");
    cookieBanner.classList.add("hide-cookie-banner");
    storeCookieConsent();
});

function storeCookieConsent() {
    localStorage.cookies = "accepted";
}

window.addEventListener("DOMContentLoaded", function() {
    if ("cookies" in localStorage) {
        blackOverlay.classList.add("hide-cookie-banner");
        cookieBanner.classList.add("hide-cookie-banner");
    } else {
    }
});