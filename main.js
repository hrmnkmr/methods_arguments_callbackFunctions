function peach(price, func) {
	const name = "ピーチ";
	func(name, price);
}
const price = function price(name, price) {
	console.log(name + " の値段は" + price + "円です。");
}
peach(500, price);

function addTax(price, func) {
	const taxPrice = Math.round(price * 1.10);
	func(taxPrice);
	return addTax
}

function displayPrice(name, price) {
	console.log(name + " の値段は" + price + "円です。");
}
// トマトの税込み価格をコンソールに表示させる処理
addTax(169, function(price) {
	displayPrice("トマト", price);
});
// 玉ねぎの税込み価格をコンソールに表示させる処理
addTax(170, function(price) {
	displayPrice("玉ねぎ", price);
});