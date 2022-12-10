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
  shop.onmouseover = grow_logo;
  shop.onmouseout = shrink_logo;

  return shop;
}

function go_to_shop() {
  window.location.href = 'shop_page.html';
}

function grow_logo() {
  document.getElementById(this.id).style.height = "200px";
  document.getElementById(this.id).style.width = "200px";
  document.getElementById(this.id).style.margin = "25px";
}

function shrink_logo() { 
  document.getElementById(this.id).style.height = "150px";
  document.getElementById(this.id).style.width = "150px";
  document.getElementById(this.id).style.margin = "50px";
}