export let productos = [
  {
    title: "Adidas", 
    price: 35, 
    thumbnail: "https://cdn1.iconfinder.com/data/icons/cartoon-snack/128/fries-1024.png",
    id: 1
  },
  {
    title: "Vans", 
    price: 40, 
    thumbnail: "https://cdn1.iconfinder.com/data/icons/cartoon-snack/128/cupcake-1024.png",
    id: 2
  },
  {
    title: "Converse", 
    price: 45, 
    thumbnail: "https://cdn1.iconfinder.com/data/icons/cartoon-snack/128/popcorn-1024.png",
    id: 3
  },
];

export class Producto {
  constructor(title, price, thumbnail, id) {
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
    this.id = id;
  }

  read(array) {
    return array;
  }

  write(array) {
    productos.push({
      id: productos.length + 1,
      title: array.title,
      price: array.price,
      thumbnail: array.thumbnail,
    });
  }

  delete(id) {
    productos.splice(id - 1, 1);
  }
}
