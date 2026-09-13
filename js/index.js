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
	currentIndexTemp,
	latestkey = '',
	lastTimeOut;

//creating indicators li
for(let i = 0 ; i < galleryImgs.length ; i++){
	newIndicator = document.createElement("li");
	newIndicator.textContent = i + 1;
	indicatorsContainer.append(newIndicator);
	if(i == 0){
		newIndicator.classList.add("active");
	}
}

let indicatorButtons = popup.querySelectorAll(".indicators li");//must be after loop of creating li

//open popup
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

//get next img by using click on right arrow
nextImgButton.addEventListener("click",nextImgArrow);

//get previous img by using click on left arrow
prevImgButton.addEventListener("click",prevImgArrow);

//when click on popup but not click on his child(popupBox)
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

//update indicators when click on the indicator button(like 1,2,3 and so on)
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

//update indicators, animations, closePopup
document.addEventListener("keydown",function(e) {
	switch(e.key) {
		case 'Escape':
			closePopup();
			return;
		case 'ArrowRight':
			nextImgArrow();
			return;
		case 'ArrowLeft':
			prevImgArrow();
			return;
	}
	latestkey += e.key;
		lastTimeOut = setTimeout(function(){
			latestkey = Number(latestkey);
			clearTimeout(lastTimeOut);
			fireAnimationOrUpdateIndicatorsWhenKeydown(latestkey);
			latestkey = '';
			lastTimeOut = undefined;
		},500);
});

//close when click on icon popupClose
popupClose.addEventListener("click",closePopup);