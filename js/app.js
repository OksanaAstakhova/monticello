"use strict";

$(document).ready(function () {
    $(".hero__slider").slick({
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    $(".news__slider").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    });
});



// burger

const burgerButton = document.querySelector(".burger");
const closeButton = document.querySelector(".mobile-menu-close");
const menu = document.querySelector(".menu");

const handleOpenMenu = () => menu.classList.add("menu--open");
const handleCloseMenu = () => menu.classList.remove("menu--open");

burgerButton.addEventListener("click", handleOpenMenu);
closeButton.addEventListener("click", handleCloseMenu);

// scroll

const scrollButtons = document.querySelectorAll("button[data-section]");

scrollButtons.forEach((button) =>
    button.addEventListener("click", handleClickScroll)
);

function handleClickScroll(event) {
    let name = event.target.getAttribute("data-section");

    if (!name) { //if the target element is a child of the button
        name = event.target
            .closest("[data-section]")
            .getAttribute("data-section");
    }
    const section = document.querySelector(`section[data-section=${name}]`);
    if (!section) return;

    const scroll = section.offsetTop;

    handleCloseMenu();
    window.scrollTo({ top: scroll, behavior: "smooth" });
}

// modal

const buttonModal1 = document.querySelector(
    ".learn-more[data-modal=trade-center]"
);
const buttonModal2 = document.querySelector(
    ".learn-more[data-modal=commerce-center]"
);
const buttonModal3 = document.querySelector(".learn-more[data-modal=gallery]");

const modal1CloseButtons = document.querySelectorAll(
    "button.close[data-modal=trade-center]"
);
const modal2CloseButtons = document.querySelectorAll(
    "button.close[data-modal=commerce-center]"
);

const modal3CloseButtons = document.querySelectorAll(
    "button.close[data-modal=gallery]"
);

const showModal = (e) => {
    // console.log(e);
    const name = e.target.getAttribute("data-modal");
    const modal = document.querySelector(`div[data-modal=${name}]`);
    modal.classList.add("show");
    document.body.classList.add("modal-shown");
};

const hideModal = (e) => {
    const name = e.target.getAttribute("data-modal");
    const modal = document.querySelector(`div[data-modal=${name}]`);
    modal.classList.remove("show");
    document.body.classList.remove("modal-shown");
};

buttonModal1.addEventListener("click", showModal);
modal1CloseButtons.forEach((element) =>
    element.addEventListener("click", hideModal)
);
buttonModal2.addEventListener("click", showModal);
modal2CloseButtons.forEach((element) =>
    element.addEventListener("click", hideModal)
);

buttonModal3.addEventListener("click", showModal);
modal3CloseButtons.forEach((element) =>
    element.addEventListener("click", hideModal)
);

// close modal when clicking on backdrop

const modals = document.querySelectorAll(".modal");
const modalsContent = document.querySelectorAll(".modal__content");

const handleModalContentClick = (e) => e.stopPropagation();
const handleModalClick = (e) => {
    e.target.classList.remove("show");
    document.body.classList.remove("modal-shown");
};

modals.forEach((modal) => modal.addEventListener("click", handleModalClick));
modalsContent.forEach((content) =>
    content.addEventListener("click", handleModalContentClick)
);

function initMap() {
    const home = { lat: 50.43637, lng: 30.537731 };
    const map = new google.maps.Map(document.querySelector(".map"), {
        zoom: 13,
        center: home,
    });

    const image = "../img/pin.png";
    const beachMarker = new google.maps.Marker({
        position: { lat: 50.44837, lng: 30.537731 },
        map,
        icon: image,
    });
}
