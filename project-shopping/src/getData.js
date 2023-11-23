import { getProducts } from "./getProduct";
import { createButton } from "./createButton";

let element = [];
export const getData = async () => {
	try {
		const res = await fetch(
			"https://anthonyfs.pythonanywhere.com/api/products/"
		);
		if (!res.ok) {
			throw new Error("Https Error", res.status);
		} else {
			const data = await res.json();
			element = data;
			getProducts(data);
			createButton(data);
			console.log(data);
		}
	} catch (error) {
		console.error(error);
	}
};
//variables
const productsSection = document.getElementById("products");
const btns = document.getElementById("btns");
const searchInput = document.getElementById("searchInput");
//
export const filterProductByCategory = (data, items) => {
	const filteredData = data.filter((item) => item.category === items);
	productsSection.innerHTML = "";
	getProducts(filteredData);
	btns.addEventListener("click", (e) => {
		if (
			e.target.classList.contains("btn") &&
			e.target.textContent === "ALL"
		) {
			productsSection.innerHTML = "";
			getProducts(data);
		}
	});
};

//Event listeners for search input filtering
const filterInput = () => {
	searchInput.addEventListener("input", (e) => {
		const category = document.getElementById("category");
		const searchTerm = e.target.value.toLowerCase();
		const filteredData = element.filter((item) => {
			const productName = item.title.toLowerCase();
			const productCategory = item.category.toLowerCase();
			const matchesSearchTerm = productName.includes(searchTerm);
			const matchesCategory = productCategory.includes(
				category.textContent.toLowerCase()
			);
			if(category.textContent.toLowerCase()=== "all"){
				return matchesSearchTerm
			}
			return matchesSearchTerm && matchesCategory;
		});
		productsSection.innerHTML = "";
		getProducts(filteredData);
	});
};
filterInput();
