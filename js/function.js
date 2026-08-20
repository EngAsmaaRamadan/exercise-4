/*this folowing code doesn't work, because that i didnt give opacity 0 with display none in popup in*/
function openPopup(){
	popup.classList.add("active");
	setTimeout(function(){
		popup.classList.add("show");
	},1);
}

function closePopup(){
	popup.classList.remove("show");
		setTimeout(function(){
			popup.classList.remove("active");
		},1000);//1000 because of transition-duration of 1s
}

function convertToCurrentImg(){
	currentImg=popupKey.parentElement.previousElementSibling;
	currentImgSrc=currentImg.src;
	popupImg.src=currentImgSrc;
}