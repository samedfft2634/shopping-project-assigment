export const getProducts = (productItem) => {
    const productsSection = document.getElementById("products");
	productItem.forEach((product) => {
		const col = document.createElement("div");
        
		col.className = "col";
		const {
			category,
			category_id,
			description,
			id,
			image,
			price,
			quantity,
			title,
		} = product;
        
        
		col.innerHTML = `
        <div class="card" >
            <img
                src="${image}"
                class="p-2"
                height="250px"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-title line-clamp-1">${title}</h5>
                <p class="card-text line-clamp-3">${description}</p>
            </div>
            <div
                class="card-footer w-100 fw-bold d-flex justify-content-between gap-3"
            >
                <span>Price:</span><span class="priceSpan">${price}$</span>
            </div>
            <div
                class="card-footer w-100 d-flex justify-content-center gap-3"
            >
                <button class="btn btn-danger cart">Sepete Ekle</button>
                <button
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="details"
                >
                    See Details
                </button>
            </div>
        </div>
        `;
        productsSection.appendChild(col)
	});
    
};
