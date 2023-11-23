export const categoryText = ()=>{
	const btns = document.getElementById("btns");
	const category = document.getElementById("category");
	btns.addEventListener("click", (e) => {
	if (e.target.classList.contains("btn")) {
		category.textContent = e.target.textContent;
	}    
});    

}
