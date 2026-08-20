let popupKeys=document.querySelectorAll("#Gallery .popupkeys"),
	popup=document.querySelector(".popup"),
	popupClose=popup.querySelector(".close"),
	prevImgButton=popup.querySelector(".prev"),
	nextImgButton=popup.querySelector(".next"),
	popupBox=popup.querySelector(".box"),
	galleryImgs=document.querySelectorAll("#Gallery img"),
	galleryImgsArr,
	currentImg,
	currentImgSrc,
	currentImgIndex,
	popupImg=popup.querySelector("img"),
	indicatorContainer=popup.querySelector("indicators");
	// indicatorsButton=indicatorContainer.createElement("li");


popupKeys.forEach(function(popupKey){
	popupKey.addEventListener("click",openPopup);
	popupKey.addEventListener("click",function(){
	currentImg=popupKey.parentElement.previousElementSibling;
	currentImgSrc=currentImg.src;
	popupImg.src=currentImgSrc;
	galleryImgsArr=Array.from(galleryImgs);
	console.log(galleryImgsArr);
	console.log(currentImg);
	currentImgIndex=galleryImgsArr.indexOf(currentImg);
	console.log(currentImgIndex);
	});

	
});

// nextImgButton.addEventListener("click",function(){

// });


popup.addEventListener("click",closePopup);
popupBox.addEventListener("click",function(e){
	e.stopPropagation();//to not close the popup in click on the box
});

popupClose.addEventListener("click",closePopup);