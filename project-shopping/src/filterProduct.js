import { getProducts } from "./getProduct"
const productsSection = document.getElementById("products");
const btns = document.getElementById("btns");
export const filterProductByCategory = (data,items)=>{
    const filteredData = data.filter(item => item.category === items)
    productsSection.innerHTML = ""
    getProducts(filteredData)
    btns.addEventListener("click",(e)=>{
        if(e.target.classList.contains("btn") && e.target.textContent === "ALL"){
            productsSection.innerHTML = ""
            getProducts(data);
        }
    })
}

