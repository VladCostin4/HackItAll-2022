//let open_shop = "H&M";

window.onload = init_shop_page;

function init_shop_page() {
  //open_shop = window.location.href.split("=")[1];  
  let open_shop = "H&M";

  let open_shop_logo = "./logo/" + open_shop + ".jpg";
  document.getElementById("open_shop_logo").style = 'background-image: url("' + open_shop_logo + '");'; 
}