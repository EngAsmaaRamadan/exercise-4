/*this folowing code didn't work previous, because that i didnt give opacity 0 with display none in popup in index.css*/
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

function convertToCurrentImg(imgSrc){/*update the current src*/
	popupImg.src = imgSrc;
}

function updateIndicator(){/*to add active effect on the indicators*/
	let prevIndicator = popup.querySelector(".indicators li.active"),
		currentIndicator = indicatorButtons[currentImgIndex];
	prevIndicator.classList.remove("active");
	currentIndicator.classList.add("active");
}

function prevImgArrow(){
	currentImgIndex = (--currentImgIndex + galleryImgs.length) % galleryImgs.length;
	let prevImgIndex = currentImgIndex,
		prevImg = galleryImgs[prevImgIndex];
	convertToCurrentImg(prevImg.src);
	updateIndicator();
}

function nextImgArrow(){
	currentImgIndex = (++currentImgIndex % galleryImgs.length);
	let nextImgIndex = currentImgIndex,
		nextImg = galleryImgs[nextImgIndex];
	convertToCurrentImg(nextImg.src);
	updateIndicator();
}

function updateIndicatorWhenClick(index){/*to navigate to the newImg with correct index of indicators*/
	currentImg = galleryImgs[index];
	currentImgIndex = index;
	convertToCurrentImg(currentImg.src);
	updateIndicator();
}

function animationInRepeatNumber(e){
	currentIndexTemp = currentImgIndex + 1;
	if(currentIndexTemp == e.key ){
		popupBox.animate(keyframesRepeatCurrentNumber,optionsRepeatCurrentNumber);//must make animate here not one after one because it make override and cancel the prev animate
	}
}