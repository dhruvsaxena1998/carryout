import 'package:flutter/material.dart';

class Menu {
  final int id;
  final String name;
  final double rating;
  final int reviews;
  final double price;
  final String image;

  Menu({
    @required this.id,
    @required this.name,
    @required this.price,
    @required this.image,
    @required this.rating,
    @required this.reviews,
  });
}

List<Menu> menuItems = [
  Menu(
    id: 1,
    name: 'Mexican Potatoes',
    rating: 4.63,
    reviews: 263,
    price: 45,
    image: 'https://i.imgur.com/QDjtvYA.jpg',
  ),
  Menu(
    id: 2,
    name: 'Salad',
    rating: 3.29,
    reviews: 174,
    price: 50,
    image: 'https://i.imgur.com/TpGiQT7.jpg',
  ),
];
