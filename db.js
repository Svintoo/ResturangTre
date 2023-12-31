/* DISCLAIMER: all rights reserved to creator of github repository https://github.com/igdev116/free-food-menus-api under ISC per package declaration */

const db = {
	bbqs: [
		{
			id: "ribs-brisket-and-burnt-ends bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Joe's KC BBQ",
			dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
			price: 110.99,
			rate: 4,
			country: "Kansas City, KS",
		},
		{
			id: "005-kings-carolina-oink-sampler bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Kings BBQ",
			dsc: "Carolina BBQ Oink Sampler",
			price: 89,
			rate: 4,
			country: "Kinston, NC",
		},
		{
			id: "texas-monthlys-1-bbq-brisket bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131249/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Snow's BBQ",
			dsc: "Texas Monthly's #1 BBQ Brisket",
			price: 199,
			rate: 4,
			country: "Lexington, TX",
		},
		{
			id: "whole-brisket-texas-bbq-sauce bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110384/whole-brisket-texas-barbecue-bbq-sauce.e07ee4818b20ed43d217bf67fedd41ce.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Franklin Barbecue",
			dsc: "Whole Brisket + Texas Barbecue BBQ Sauce",
			price: 249,
			rate: 4,
			country: "Austin, TX",
		},
		{
			id: "whole-texas-smoked-brisket bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101071/whole-texas-smoked-brisket.a5558a25381e271408e197936e7985d8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Terry Black's Barbecue",
			dsc: "Whole Texas Smoked Brisket",
			price: 189,
			rate: 5,
			country: "Austin, TX",
		},
		{
			id: "235203-blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113814/blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo.a95a3e632ae324f719738a2a5c1dff6e.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Blue Smoke",
			dsc: "Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo",
			price: 129,
			rate: 4,
			country: "New York, NY",
		},
		{
			id: "post-oak-smoked-half-brisket bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92395/post-oak-smoked-usda-prime-half-brisket.6f17178dde7d806670bcc73ff11762b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Southside Market & Barbeque",
			dsc: "Post Oak Smoked USDA Prime Half Brisket",
			price: 109,
			rate: 5,
			country: "Elgin, TX",
		},

		{
			id: "guys-bbq-pulled-pork-trash-can-nachos bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115312/guys-bbq-pulled-pork-trash-can-nachos.5783c0f7459bfc0adbbcf063edced3fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Guy Fieri",
			dsc: "Guy's BBQ Pulled Pork Trash Can Nachos",
			price: 79,
			rate: 5,
			country: "Flavortown, USA",
		},

		{
			id: "ribs-and-pulled-pork-combo-for-4 bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101081/ribs-and-pulled-pork-combo-for-4.fda85caa87209b57671b893e01f5deea.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Melissa Cookston's Memphis BBQ",
			dsc: "BBQ Ribs & Pulled Pork Combo for 4",
			price: 99,
			rate: 5,
			country: "Horn Lake, MS",
		},
		{
			id: "the-big-ugly-bbq-dinner-for-6 bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132122/the-big-ugly-bbq-dinner-for-6.2dfae7818811adddce85cc1a910881a0.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Ugly Drum",
			dsc: "The Big Ugly BBQ Dinner for 6",
			price: 229,
			rate: 5,
			country: "Los Angeles, CA",
		},
		{
			id: "006-kings-meat-lovers-special bbq",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66734/bbq-meat-lovers-special-for-10.36ca670fda4bfa783c2ea9165e068d26.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Kings BBQ",
			dsc: "BBQ Meat Lovers Special for 10",
			price: 139,
			rate: 5,
			country: "Kinston, NC",
		},
	],
	burgers: [
		{
			id: "double-stack-burger-kit-for-4 burgers hamburgers hamburger",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Holeman & Finch",
			dsc: "Double Stack Burger Kit for 4",
			price: 79,
			rate: 4,
			country: "Atlanta, GA",
		},
		{
			id: "goldbelly-burger-bash-pack burgers hamburgers hamburger",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66179/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Pat LaFrieda Meats",
			dsc: 'Goldbelly "Burger Bash" Pack',
			price: 109,
			rate: 5,
			country: "North Bergen, NJ",
		},
		{
			id: "burger-au-poivre-kit-4-pack burgers hamburgers hamburger",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Raoul's",
			dsc: "Burger Au Poivre Kit - 4 Pack",
			price: 99,
			rate: 4,
			country: "New York, NY",
		},
	],
	desserts: [
		{
			id: "brooklyn-blackout-parfait desserts dessert",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82266/brooklyn-blackout-parfait.756b6c8cf3066aaca322fb12595bb3a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Brooklyn Cupcake",
			dsc: "Brooklyn Blackout Cupcake Jars",
			price: 79,
			rate: 4,
			country: "Brooklyn, NY",
		},

		{
			id: "sea-salted-caramel-swirl-cheesecake desserts dessert",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Cotton Blues Cheesecake Company",
			dsc: "Sea-Salted Caramel Swirl Cheesecake",
			price: 65,
			rate: 4,
			country: "Hattiesburg, MS",
		},
		{
			id: "raspberry-chocolate-pie desserts dessert",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131947/raspberry-chocolate-pie.c40248c44adb974a159d7f100011c987.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Pietisserie",
			dsc: "Raspberry Chocolate Pie",
			price: 79,
			rate: 4,
			country: "Oakland, CA",
		},
		{
			id: "jacques-world-famous-chocolate-chip-cookies-12-pack desserts dessert",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/83825/jacques-world-famous-chocolate-chip-cookies-12-pack.3b373bdd67cd25084182c21499f675d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Jacques Torres Chocolate",
			dsc: "Jacques’ World Famous Chocolate Chip Cookies - 12 Pack",
			price: 69.95,
			rate: 5,
			country: "New York, NY",
		},
	],
	drinks: [
		{
			id: "guys-caliente-margaritas-for-12 drinks drink",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Guy Fieri",
			dsc: "Guy's Caliente Margaritas for 12",
			price: 69,
			rate: 5,
			country: "Flavortown, USA",
		},
		{
			id: "new-orleans-hurricane-mix drinks drink",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Franco's Hurricane Mix",
			dsc: "New Orleans Hurricane Mix",
			price: 39,
			rate: 5,
			country: "Natchitoches, LA",
		},
		{
			id: "papaya-king-tropical-drink drinks drink",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Papaya King",
			dsc: "Papaya King - Tropical Drink",
			price: 69,
			rate: 4,
			country: "New York, NY",
		},
		{
			id: "mr-grumpy-milkshake-kit-for-8 drinks drink",
			img: "https://goldbelly.imgix.net/uploads/product_image/image/75112/mr-grumpy-milkshake-kit-for-8.174f846e3252d7c668d034776db22cd6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "New Territories",
			dsc: "Mr. Grumpy Milkshake Kit for 8",
			price: 109,
			rate: 5,
			country: "New York, NY",
		},

		{
			id: "french-vanilla-cold-brew-concentrate-6-pack drinks drink",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134205/french-vanilla-cold-brew-concentrate-6-pack.aada7a4ffa58cae68695d132fece746c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Grady's Cold Brew",
			dsc: "French Vanilla Cold Brew Concentrate - 6 Pack",
			price: 60,
			rate: 4,
			country: "New York, NY",
		},
		{
			id: "iggys-soda-4-pack drinks drink",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136853/Iggys-Soda-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Iggy's",
			dsc: "Iggy's Soda - 4 Pack",
			price: 11,
			rate: 4,
			country: "Warwick, RI",
		},
	],

	sandwiches: [
		{
			id: "fried-chicken-biscuit-sandwich-kit sandwiches sandwich",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85286/fried-chicken-biscuit-sandwich-kit.44b29820e6389324a2dd7ccb0b677a22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Sunrise Biscuit Kitchen",
			dsc: "Fried Chicken Biscuit Sandwich Kit",
			price: 109,
			rate: 4,
			country: "Chapel Hill, NC",
		},

		{
			id: "roast-pork-sandwich-kit-for-4 sandwiches sandwich",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134603/roast-pork-sandwich-kit-for-4.28babe63f6db57759b8e03d7a19a78eb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Tommy DiNic's",
			dsc: "Roast Pork Sandwich Kit for 4",
			price: 99,
			rate: 5,
			country: "Philadelphia, PA",
		},
		{
			id: "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack sandwiches sandwich",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Alidoro",
			dsc: '"The Gothamist" Prosciutto + Burrata Sandwich Kit - 4 Pack',
			price: 99,
			rate: 4,
			country: "New York, NY",
		},
	],

	steaks: [
		{
			id: "pork-steaks steaks steak",
			img: "https://goldbelly.imgix.net/uploads/product_image/image/41969/pork-steaks.aaa962e22c9099952fdf15cb0382bd65.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Southside Market & Barbeque",
			dsc: "Pork Steaks",
			price: 69,
			rate: 5,
			country: "Elgin, TX",
		},
		{
			id: "bone-in-rib-steak steaks steak",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113844/bone-in-rib-steak.b13d9d4233035767605f0de9acdce1ab.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Old Homestead Steakhouse",
			dsc: "Bone-in Rib Steak",
			price: 159,
			rate: 5,
			country: "New York, NY",
		},
		{
			id: "dry-aged-usda-prime-black-angus-porterhouse-steak-2-pack steaks steak",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124865/usda-prime-black-angus-filet-mignon-barrel-cut.6ee213799e7d1848763d12edca18e3b1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Pat LaFrieda Meats",
			dsc: "Dry-Aged USDA Prime Black Angus Porterhouse Steak - 2 Pack",
			price: 96.7,
			rate: 4,
			country: "North Bergen, NJ",
		},
		{
			id: "mesquite-smoked-peppered-beef-tenderloin steaks steak",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99462/mesquite-smoked-peppered-beef-tenderloin.5c314418a1f75c7057eed686e2fad46f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Perini Ranch Steakhouse",
			dsc: "Mesquite Smoked Peppered Beef Tenderloin",
			price: 165,
			rate: 4,
			country: "Buffalo Gap, TX",
		},
		{
			id: "wagyu-ny-strip-steaks-2-pack steak steaks",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131433/wagyu-ny-strip-steaks-2-pack.5b760cb84d5a57582e7dd8d1e25c9972.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Westholme Wagyu",
			dsc: "Wagyu NY Strip Steak - 2 Pack",
			price: 169,
			rate: 5,
			country: "Queensland, Australia",
		},
		{
			id: "tomahawk-ribsteak-dinner-for-2 steaks steak",
			img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131459/tomahawk-ribsteak-dinner-for-2.4bdce97b438cc34f7cd906378f62862f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
			name: "Quality Meats",
			dsc: "Tomahawk Ribsteak Dinner for 2",
			price: 149,
			rate: 5,
			country: "New York, NY",
		},
	],

	pagination: {
		bbqs: 11,
		burgers: 3,
		desserts: 4,
		drinks: 6,
		sandwiches: 3,
		steaks: 6,
	},
};
export default db;
