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
	newIndicator;

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
		currentImg=galleryImgs[index];
		currentImgIndex=index;
		convertToCurrentImg(currentImg.src);
		updateIndicator();
	});
	
});

document.addEventListener("keydown",function(e) {
	if(e.keyCode == 27){
		closePopup();
	}
});

document.addEventListener("keydown",function(e){
	if(e.keyCode == 39){
		nextImgArrow();
	}
});

document.addEventListener("keydown",function(e){
	if(e.keyCode == 37){
		prevImgArrow();
	}
});


popupClose.addEventListener("click",closePopup);