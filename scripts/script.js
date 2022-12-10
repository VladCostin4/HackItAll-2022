let available_shops = ["H&M", "Pull&Bear", "Zara", "Adidas", "C&A", "Nike"];

window.onload = create_all_shops;

function create_all_shops() {
    for (let i = 0; i < available_shops.length; i++) {
      document.getElementById("shops").appendChild(create_shop(available_shops[i]));
    }
}

function create_shop(shop_name) {
  let shop_logo = "./logo/" + shop_name + ".jpg";
  
  let shop = document.createElement("div");
  
  shop.id = shop_name;
  shop.className = "shop";
  shop.style = 'background-image: url("' + shop_logo + '");';

  shop.onclick = go_to_shop;

  return shop;
}

function go_to_shop() {
  setTimeout(() => {
    window.location.href = 'shop_page.html';
  }, 1000);
}