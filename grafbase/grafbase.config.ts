import { g, auth, config } from "@grafbase/sdk";

const currency = g.enum("Currency", ["USD", "EUR", "GBP"]);

const address = g.model("Address", {
	customer: g.relation(() => customer),
	line1: g.string(),
	line2: g.string().optional(),
	city: g.string(),
	country: g.string(),
	zip: g.string(),
});

const cartItem = g.type("CartItem", {
	name: g.string(),
	price: g.int(),
	quantity: g.int(),
});

const cart = g.model("Cart", {
	customer: g.relation(() => customer),
	items: g.ref(cartItem).optional().list().optional(),
	shippingTotal: g.int().optional(),
	discountTotal: g.int().optional(),
	grandTotal: g.int(),
	currency: g.enumRef(currency),
});

const customer = g
	.model("Customer", {
		firstName: g.string(),
		lastName: g.string(),
		email: g.email().unique(),
		avatarUrl: g.url().optional(),
		phoneNumber: g.phoneNumber().optional(),
		billingAddress: g.relation(address).optional(),
	})
	.auth((rules) => {
		rules.public().read();
	});

const orderItem = g.type("OrderItem", {
	name: g.string(),
	lineTotal: g.int(),
	itemTotal: g.int(),
	quantity: g.int(),
});

const order = g.model("Order", {
	items: g.ref(orderItem).optional().list().optional(),
	shippingTotal: g.int(),
	discountTotal: g.int(),
	grandTotal: g.int(),
	currency: g.enumRef(currency),
});

const variant = g.model("Variant", {
	name: g.string(),
	product: g.relation(() => product),
	sku: g.string(),
	price: g.int(),
	currency: g.enumRef(currency),
});

const product = g.model("Product", {
	name: g.string(),
	slug: g.string().unique(),
	description: g.string(),
	imageUrl: g.url().optional(),
	stock: g.int(),
	brand: g.string().optional(),
	variants: g.relation(variant).optional().list().optional(),
});

const jwt = auth.JWT({
	issuer: "grafbase",
	secret: g.env("NEXTAUTH_SECRET"),
});

export default config({
	schema: g,
	auth: {
		providers: [jwt],
		rules: (rules) => {
			rules.private();
		},
	},
});
