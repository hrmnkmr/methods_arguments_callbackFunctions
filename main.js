// 税込価格を計算する関数
function addTax(price) {
	return Math.round(price * 1.10); // 税率10%を適用し、四捨五入して税込価格を計算
}
// 税込価格を表示する関数
function displayPrice(name, price) {
	const taxPrice = addTax(price); // 税込価格を計算
	console.log(name + " の税込価格は " + taxPrice + "円です。");
}
// トマトの税込み価格をコンソールに表示させる処理
displayPrice("トマト", 200);
// 玉ねぎの税込み価格をコンソールに表示させる処理
displayPrice("玉ねぎ", 300);