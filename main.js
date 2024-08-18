function addTax(price) {
	return Math.round(price * 1.10); // 税込み価格を計算して返す
}
// トマトの税込み価格をコンソールに表示させる処理
{
	const name = "トマト";
	const price = 200;
	const taxPrice = addTax(price);
	console.log(name + " の値段は " + taxPrice + "円です。"); // "トマト の値段は 200円です。" 
}
// 玉ねぎの税込み価格をコンソールに表示させる処理
{
	const name = "玉ねぎ";
	const price = 300;
	const taxPrice = addTax(price);
	console.log(name + " の値段は " + taxPrice + "円です。"); // "玉ねぎ の値段は 300円です。" 
}