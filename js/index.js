let popupKeys=document.querySelectorAll("#Gallery .popupkeys"),
	popup=document.querySelector(".popup"),
	popupClose=popup.querySelector(".close"),
	prevImgButton=popup.querySelector(".prev"),
	nextImgButton=popup.querySelector(".next"),
	popupBox=popup.querySelector(".box"),
	galleryImgs=document.querySelectorAll("#Gallery img"),
	currentImg,
	currentImgIndex,
	popupImg=popup.querySelector("img"),
	indicatorsContainer=popup.querySelector(".indicators"),
	newIndicator,
	indicatorsKeyode=[];

for (let i=0,j=48;( (i <= galleryImgs.length) && (j<=57) ); i++) {
	indicatorsKeyode.push(j++);
}

for(let i = 0 ; i < galleryImgs.length ; i++){
	newIndicator = document.createElement("li");
	newIndicator.textContent = i + 1;
	indicatorsContainer.append(newIndicator);
	if(i == 0){
		newIndicator.classList.add("active");
	}
}

let indicatorButtons=popup.querySelectorAll(".indicators li");

popupKeys.forEach(function(popupKey){
	popupKey.addEventListener("click",openPopup);
	popupKey.addEventListener("click",function(){
	currentImg=popupKey.parentElement.previousElementSibling;
	let galleryImgsArr=Array.from(galleryImgs);
	currentImgIndex=galleryImgsArr.indexOf(currentImg);
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

indicatorButtons.forEach(function(indicatorButton,index){
	indicatorButton.addEventListener("click",function(){
		updateIndicatorWhenClick(index);
	});
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
	},
	keyframesRepeatCurrentNumber=[
		{transform:"scale(1.0)"},
		{transform:"scale(1.1)"},
		{transform:"scale(1.0)"}
	],
	optionsRepeatCurrentNumber={
		duration:500,
		fill:"both",
		direction:"alternate"
	},
	animationWrongNumber=popupBox.animate(keyframesWrongNumber,optionsWrongNumber),
	animationRepeatCurrentNumber=popupBox.animate(keyframesRepeatCurrentNumber,optionsRepeatCurrentNumber);
animationWrongNumber.pause();
animationRepeatCurrentNumber.pause();

document.addEventListener("keydown",function(e) {
	switch(e.keyCode) {
		case 27:
			closePopup();
			break;
		case 39:
			nextImgArrow();
			break;
		case 37:
			prevImgArrow();
			break;
	}

	if (indicatorsKeyode.includes(e.keyCode) && e.keyCode!=indicatorsKeyode[0] && e.keyCode<=indicatorsKeyode[galleryImgs.length]){
		updateIndicatorWhenClick(indicatorsKeyode.indexOf(e.keyCode-1));
	}else if(e.keyCode==indicatorsKeyode[0] || e.keyCode>indicatorsKeyode[galleryImgs.length]){
		//specific animation when press 0 or number langer than galleryImgs.length
		animationWrongNumber.play();
		//animationRepeatCurrentNumber.play();
	}
});

popupClose.addEventListener("click",closePopup);