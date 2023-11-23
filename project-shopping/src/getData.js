import { getProducts } from "./getProduct";
import { createButton } from "./createButton";


export const getData = async () => {
	try {
		const res = await fetch(
			"https://anthonyfs.pythonanywhere.com/api/products/"
		);
		if (!res.ok) {
			throw new Error("Https Error", res.status);
		} else {
			const data = await res.json();
			getProducts(data);
            createButton(data)
			console.log(data);
		}
	} catch (error) {
		console.error(error);
	}
};

