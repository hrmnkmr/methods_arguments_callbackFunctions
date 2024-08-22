function addTax(price, name, callback) {
	const taxPrice = Math.round(price * 1.10); // 税率10%を適用し、四捨五入して税込価格を計算
	callback(name, taxPrice); // 計算結果をコールバック関数に渡す
}
// 税込価格を表示する関数
function displayPrice(name, taxPrice) {
	console.log(name + " の税込価格は " + taxPrice + "円です。");
}
// トマトの税込み価格をコンソールに表示させる処理
addTax(200, "トマト", displayPrice);
// 玉ねぎの税込み価格をコンソールに表示させる処理
addTax(300, "玉ねぎ", displayPrice);