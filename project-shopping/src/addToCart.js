export let myCart = [];

window.addEventListener("load", () => {
    const callCart = localStorage.getItem("myCart");
    if (callCart) {
        myCart = JSON.parse(callCart);
        updateCartUI();
        updateTotal();
        cartNotification();
    }
});

export const addToCart = () => {
    const product = document.getElementById("products");
    product.addEventListener("click", (e) => {
        if (e.target.classList.contains("cart")) {
            const card = e.target.closest(".card");
            const cardTitle = card.querySelector(".card-title").textContent;
            const cardImg = card.querySelector("img").src;
            const cardPrice = parseFloat(card.querySelector(".card-footer .priceSpan").textContent);

            const existProduct = myCart.find((item) => item.cardTitle === cardTitle);
            if (existProduct) {
                existProduct.quantity++;
            } else {
                myCart.push({ cardTitle, cardImg, cardPrice, quantity: 1 });
            }
            localStorage.setItem("myCart", JSON.stringify(myCart));
            updateCartUI();
            cartNotification();
        }
    });
};

const cartNotification = () => {
    const sepet = document.getElementById("sepet");
    sepet.textContent = myCart.length;
};

const updateCartUI = () => {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";

    myCart.forEach((item, index) => {
        const cardRows = createCartItemRow(item, index);
        cards.append(cardRows);
    });

    updateTotal();
};

const createCartItemRow = (item, index) => {
    const cardRows = document.createElement("div");
    cardRows.classList.add("card", "mb-3");
    cardRows.style = "max-width: 540px";
    cardRows.innerHTML = `
        <div class="row g-0 rowProduct">
            <div class="col-md-4 my-auto">
                <img src="${item.cardImg}" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.cardTitle}</h5>
                    <div class="d-flex align-items-center gap-2" role="button">
                        <i class="fa-solid fa-minus border rounded-circle bg-danger text-white p-2"></i>
                        <span class="fw-bold quantText">${item.quantity}</span>
                        <i class="fa-solid fa-plus border bg-danger text-white rounded-circle p-2"></i>
                    </div>
                    <p class="card-text">Total: ${item.cardPrice} x <span class="timesQuantity">${item.quantity}</span></p>
                    <button class="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>
    `;

    const plusButton = cardRows.querySelector(".fa-plus");
    plusButton.addEventListener("click", () => updateQuantity(index, "plus"));

    const minusButton = cardRows.querySelector(".fa-minus");
    minusButton.addEventListener("click", () => updateQuantity(index, "minus"));

    const removeButton = cardRows.querySelector(".btn-danger");
    removeButton.addEventListener("click", () => removeItem(index));

    return cardRows;
};

const updateQuantity = (index, operation) => {
    if (index >= 0 && index < myCart.length) {
        if (operation === "plus") {
            myCart[index].quantity++;
        } else if (operation === "minus" && myCart[index].quantity > 1) {
            myCart[index].quantity--;
        }
        updateCartUI();
    }
};

const removeItem = (index) => {
    if (index >= 0 && index < myCart.length) {
        myCart.splice(index, 1);
        updateCartUI();
        cartNotification();
    }
};

function updateTotal() {
    const totalPrice = document.getElementById("totalPrice");
    const result = myCart.reduce((a, b) => a + b.quantity * b.cardPrice, 0);
    totalPrice.textContent = `$${result.toFixed(2)}`;
    localStorage.setItem("myCart", JSON.stringify(myCart));
}
