let myCart = [];
export const addToCart = () => {
	const product = document.getElementById("products");
	const sepet = document.getElementById("sepet");
	//
	product.addEventListener("click", (e) => {
		if (e.target.classList.contains("cart")) {
			const card = e.target.closest(".card");
			const cardTitle = card.querySelector(".card-title").textContent;
			const cardImg = card.querySelector("img").src;
			const cardPrice = card.querySelector(
				".card-footer .priceSpan"
			).textContent;
			//
			const existProduct = myCart.find(
				(item) => item.cardTitle === cardTitle
			);
			//
			if (existProduct) {
				existProduct.quantity++;
			} else {
				myCart.push({ cardTitle, cardImg, cardPrice, quantity: 1 });
			}
			updateCartUI();
			sepet.textContent = myCart.length;
		}
	});
};

const updateCartUI = () => {
	const cards = document.getElementById("cards");
	cards.innerHTML = "";
	console.log(myCart);
	myCart.forEach((item, index) => {
		const cardRows = document.createElement("div");
		cardRows.classList.add("card", "mb-3");
		cardRows.style = "max-width: 540px";
		cardRows.innerHTML = `
            <div class="row g-0 rowProduct" >
						<div class="col-md-4 my-auto">
							<img
								src="${item.cardImg}"
								class="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">${item.cardTitle}</h5>
								<div
									class="d-flex align-items-center gap-2"
									role="button"
								>
									<i
										class="fa-solid fa-minus border rounded-circle bg-danger text-white p-2"
									></i
									><span class="fw-bold quantText" >${item.quantity}</span
									><i
										class="fa-solid fa-plus border bg-danger text-white rounded-circle p-2"
									></i>
								</div>
								<p class="card-text">Total : ${item.cardPrice} x miktar</p>
								<button class="btn btn-danger">Remove</button>
							</div>
						</div>
					</div>
            `;
		cards.append(cardRows);
		
		const spanInCard = cardRows.querySelector(".quantText");
		// const rowProduct = cardRows.getElementById("rowProduct")

		   //for plus button
		   const plusButton = cardRows.querySelector(".fa-plus");
		   plusButton.addEventListener("click", () => {
			   updateQuantity("plus");
		   });
   
		   //minus button
		   const minusButton = cardRows.querySelector(".fa-minus");
		   minusButton.addEventListener("click", () => {
			   updateQuantity("minus");
		   });
   
		   const removeButton = cardRows.querySelector(".btn-danger");
		   removeButton.addEventListener("click", () => {
            myCart.splice(index, 1);
            cardRows.remove();
            sepet.textContent = myCart.length;

            console.log(myCart);
		   });
		   
		function updateQuantity(operation) {
            if (operation === "plus") {
                item.quantity++;
            } else if (operation === "minus" && item.quantity > 1) {
                item.quantity--;
            }
            spanInCard.textContent = item.quantity;
        }

     
		
	});
};

