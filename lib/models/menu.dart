class Menu {
  final String name;
  final double rating;
  final int reviews;
  final double price;
  final String image;

  Menu({this.name, this.price, this.image, this.rating, this.reviews});
}

List<Menu> menuItems = [
  Menu(
    name: 'Mexican Potatoes',
    rating: 4.63,
    reviews: 263,
    price: 45,
    image: 'https://i.imgur.com/QDjtvYA.jpg',
  ),
  Menu(
    name: 'Salad',
    rating: 3.29,
    reviews: 174,
    price: 50,
    image: 'https://i.imgur.com/TpGiQT7.jpg',
  ),
];
