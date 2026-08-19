let popupKeys=document.querySelectorAll("#Gallery .popupkeys"),
	popup=document.querySelector(".popup");
popupKeys.forEach(function(popupKey){
	popupKey.addEventListener("click",function(){
		popup.classList.add("active");
		setTimeout(function(){
			popup.classList.add("show");
		},100);
});
});