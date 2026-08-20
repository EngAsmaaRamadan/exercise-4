let popupKeys=document.querySelectorAll("#Gallery .popupkeys"),
	popup=document.querySelector(".popup"),
	popupClose=popup.querySelector(".close"),
	prevImgButton=popup.querySelector(".prev"),
	nextImgButton=popup.querySelector(".next"),
	popupBox=popup.querySelector(".box"),
	indicatorContainer=popup.querySelector("indicators");
	// indicatorsButton=indicatorContainer.createElement("li");
/*this folowing code doesn't work*/
popupKeys.forEach(function(popupKey){
	popupKey.addEventListener("click",openPopup);
});

popup.addEventListener("click",closePopup);
popupBox.addEventListener("click",function(e){
	e.stopPropegation();//to not close the popup in click on the box
})

popupClose.addEventListener("click",closePopup);