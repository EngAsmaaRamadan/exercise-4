/*this folowing code doesn't work*/
function openPopup(){
	popup.classList.add("active");
	setTimeout(function(){
		popup.classList.add("show");
	},1000);
}

function closePopup(){
	popup.classList.remove("show");
		setTimeout(function(){
			popup.classList.remove("show");
		},1000);//1000 because of transition-duration of 1s
}