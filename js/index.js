let popupKeys = document.querySelectorAll("#Gallery .popupkeys"),
	popup = document.querySelector(".popup"),
	popupClose = popup.querySelector(".close"),
	prevImgButton = popup.querySelector(".prev"),
	nextImgButton = popup.querySelector(".next"),
	popupBox = popup.querySelector(".box"),
	galleryImgs = document.querySelectorAll("#Gallery img"),
	currentImg,
	currentImgIndex,
	popupImg = popup.querySelector("img"),
	indicatorsContainer = popup.querySelector(".indicators"),
	newIndicator,
	currentIndexTemp;

for(let i = 0 ; i < galleryImgs.length ; i++){
	newIndicator = document.createElement("li");
	newIndicator.textContent = i + 1;
	indicatorsContainer.append(newIndicator);
	if(i == 0){
		newIndicator.classList.add("active");
	}
}

let indicatorButtons = popup.querySelectorAll(".indicators li");//must be after loop of creating li

popupKeys.forEach(function(popupKey){
	popupKey.addEventListener("click",function(){
	openPopup();
	currentImg = popupKey.parentElement.previousElementSibling;
	let galleryImgsArr = Array.from(galleryImgs);
	currentImgIndex = galleryImgsArr.indexOf(currentImg);
	convertToCurrentImg(currentImg.src);
	updateIndicator();
	});
});

nextImgButton.addEventListener("click",nextImgArrow);

prevImgButton.addEventListener("click",prevImgArrow);

popup.addEventListener("click",closePopup);
popupBox.addEventListener("click",function(e){
	e.stopPropagation();//to not close the popup when click on the box
});

let keyframesWrongNumber=[/*swing effect*/
		{transform:"rotate(0deg)"},
		{transform:"rotate(15deg)"},
		{transform:"rotate(-10deg)"},
		{transform:"rotate(5deg)"},
		{transform:"rotate(-5deg)"},
		{transform:"rotate(0deg)"}
	],
	optionsWrongNumber={
		duration:500,/*0.5s*/
	};
let	keyframesRepeatCurrentNumber=[
		{transform:"scale(1.0)"},
		{transform:"scale(1.1)"},
		{transform:"scale(1.0)"}
	],
	optionsRepeatCurrentNumber={
		duration:500,
		fill:"both",
		direction:"alternate"
	};

indicatorButtons.forEach(function(indicatorButton,index){
	indicatorButton.addEventListener("click",function(e){
		currentIndexTemp = currentImgIndex;
		if(index == currentIndexTemp){
			popupBox.animate(keyframesRepeatCurrentNumber,optionsRepeatCurrentNumber);
		}else{
			updateIndicatorWhenClick(index);
		}
	});
});

document.addEventListener("keydown",function(e) {
	switch(e.key) {
		case 'Escape':
			closePopup();
			break;
		case 'ArrowRight':
			nextImgArrow();
			break;
		case 'ArrowLeft':
			prevImgArrow();
			break;
	}
	let key = e,
		lastTimeOut;



	lastTimeOut = setTimeout(function(){
		key += Number(e.key);
		clearTimeout(lastTimeOut);
		fireAnimationOrUpdateIndicatorsWhenKeydown(e);
		key = '';
		lastTimeOut = undefined;
	},100);
	
});

function fireAnimationOrUpdateIndicatorsWhenKeydown(e){
	animationInRepeatNumber(e);
	if ( e.key <= galleryImgs.length ){
		updateIndicatorWhenClick(e.key - 1);
	}else if(e.key.charCodeAt(0) <= 0 || e.key.charCodeAt(0) > galleryImgs.length ){
		//specific animation when press 0 or number langer than galleryImgs.length
		popupBox.animate(keyframesWrongNumber,optionsWrongNumber);
	}
}

popupClose.addEventListener("click",closePopup);
