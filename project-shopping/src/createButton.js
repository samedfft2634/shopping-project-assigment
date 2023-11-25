import { filterProductByCategory } from "./getData"
export const createButton = (data)=>{
    const categories = data.reduce((a,b)=>{
        if(!a.includes(b.category)){
            a.push(b.category)
        } 
        return a
    },["ALL"])
    const btnColors = [
        "primary",
        "warning",
        "danger",
        "success",
        "secondary",
        "info",
      ];
    categories.forEach((items,i)=>{
        const button = document.createElement("button")
        button.classList.add("btn",`btn-${btnColors[i]}`)
        button.textContent = `${items}`
        button.addEventListener("click",()=>{
            filterProductByCategory(data,items)
        })
        btns.appendChild(button)
    })

}