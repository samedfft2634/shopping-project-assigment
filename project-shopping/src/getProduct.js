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
                    class="btn btn-primary details"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                   
                >
                    See Details
                </button>
            </div>
        </div>
        `;
        col.querySelector('.details').setAttribute('data-product-id', product.id);
		productsSection.appendChild(col);
 
        
	});
    const exampleModal = document.getElementById('exampleModal');
    const myModal = new bootstrap.Modal(exampleModal);

    productsSection.addEventListener("click", (event) => {
        if (event.target.classList.contains("details")) {
            const productId = event.target.getAttribute("data-product-id");
            const product = productItem.find(p => p.id.toString() === productId);
           
            if (product) {
                // Update modal content dynamically
                const modalBody = exampleModal.querySelector('.modal-body');
                modalBody.innerHTML = `
                    <img src="${product.image}" class="img-fluid" alt="${product.title}">
                    <p>${product.description}</p>
                    <p>Price: ${product.price}$</p>
                `;
    
                // Set the modal title
                const modalTitle = exampleModal.querySelector('.modal-title');
                modalTitle.textContent = product.title;
    
                // Show the modal
                myModal.show();
                exampleModal.querySelector('.btn-close').addEventListener('click', () => {
                    myModal.hide();
                });
            }
        }
    });
};
