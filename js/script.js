var writeToUsBtn = document.querySelector(".btn-adress");
var modalContactBlock = document.querySelector(".modal-contact-block");
var closeModalBlock = document.querySelector(".close-modal-block");
var popupOverlay = document.querySelector(".popup-overlay");
var map = document.querySelector(".map");

writeToUsBtn.addEventListener("click", function(event) {
	event.preventDefault();
	modalContactBlock.classList.add("modal-contact-block-open");
	popupOverlay.classList.add("popup-overlay-open");
});