const album_list = document.querySelectorAll('img.shop-item-image')

function changeSrc() {
  for (let i = 0; i < album_list.length; i++) {
      album_list[i].src =  'Images/Album' + (i+1) + '.png';
  }
}

changeSrc();

const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];