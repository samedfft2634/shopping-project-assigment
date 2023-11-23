
export const addToCart = (data) => {
	let myCart = [];
	const product = document.getElementById("products");
	const cartBody = document.querySelector(".offcanvas-body");
	product.addEventListener("click", (e) => {
		
		if (e.target.classList.contains("cart")) {
			const card = e.target.closest(".card");
			const cardImg = card.querySelector("img").src;
			const cardTitle = card.querySelector(".card-title").textContent;
			const cardPrice = card.querySelector(
				".card-footer .priceSpan"
			).textContent;
			const cardRow = document.createElement("div");
			cardRow.classList.add("card", "mb-3");
			cardRow.style = "max-width: 540px";
			cardRow.innerHTML = `
            <div class="row g-0">
						<div class="col-md-4 my-auto">
							<img
								src="${cardImg}"
								class="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">${cardTitle}</h5>
								<div
									class="d-flex align-items-center gap-2"
									role="button"
								>
									<i
										class="fa-solid fa-minus border rounded-circle bg-danger text-white p-2"
									></i
									><span class="fw-bold" id="quant">1</span
									><i
										class="fa-solid fa-plus border bg-danger text-white rounded-circle p-2"
									></i>
								</div>
								<p class="card-text">Total : ${cardPrice} x miktar</p>
								<button class="btn btn-danger">Remove</button>
							</div>
						</div>
					</div>
            `;

			
			const sepet = document.getElementById("sepet")
			if (!myCart.includes(cardTitle)) {
				myCart.push(cardTitle);
				cartBody.append(cardRow);
				sepet.textContent = myCart.length
			} else {
				let quantity = document.querySelector(".fa-plus").previousElementSibling
				let quantityPlus = Number(quantity.textContent) + 1
				quantity.textContent = quantityPlus
				console.log(typeof quantity);
				return myCart
			}
			console.log(myCart);
		}
	});
};

