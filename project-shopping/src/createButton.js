import { filterProductByCategory } from "./getData"
export const createButton = (data)=>{
    const categories = data.reduce((a,b)=>{
        if(!a.includes(b.category)){
            a.push(b.category)
        } 
        return a
    },["ALL"])
    categories.forEach((items)=>{
        const button = document.createElement("button")
        button.className = "btn btn-danger"
        button.textContent = `${items}`
        button.addEventListener("click",()=>{
            filterProductByCategory(data,items)
        })
        btns.appendChild(button)
    })
}

