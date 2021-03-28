import 'package:carryout/models/media/MediaImage.dart';

class MenuItem {
  String name, description, id;
  double price;
  MediaImage image;
  List<Item> compulsory;
  List<Item> optional;

  MenuItem({
    this.name,
    this.price,
    this.description,
    this.id,
    this.image,
    this.compulsory,
    this.optional,
  });

  MenuItem.fromJson(Map<String, dynamic> json) {
    name = json['name'];

    print(name);
    price = json['price'].toDouble();
    description = json['description'];
    id = json['id'];

    if (json['image'] != null) {
      image = new MediaImage.fromJson(json['image']);
    }
    if (json['compulsory'] != null) {
      compulsory = <Item>[];

      json['compulsory'].forEach((item) {
        compulsory.add(new Item.fromJson(item));
      });
    }

    if (json['optional'] != null) {
      optional = <Item>[];

      json['optional'].forEach((item) {
        optional.add(new Item.fromJson(item));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['name'] = this.name;
    data['price'] = this.price;
    data['description'] = this.description;
    data['id'] = this.id;

    if (this.image != null) {
      data['image'] = this.image.toJson();
    }
    if (this.compulsory != null) {
      data['compulsory'] = this.compulsory.map((v) => v.toJson()).toList();
    }
    if (this.optional != null) {
      data['optional'] = this.optional.map((v) => v.toJson()).toList();
    }

    return data;
  }
}

class Item {
  String name;
  double price;
  int defaultQty;
  int maxQty;
  String slug;
  String id;

  Item({
    this.name,
    this.price,
    this.defaultQty,
    this.maxQty,
    this.slug,
    this.id,
  });

  Item.fromJson(Map<String, dynamic> json) {
    name = json['name'];
    price = json['price'].toDouble();
    defaultQty = json['defaultQty'];
    maxQty = json['maxQty'];
    slug = json['slug'];
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['name'] = this.name;
    data['price'] = this.price;
    data['defaultQty'] = this.defaultQty;
    data['maxQty'] = this.maxQty;
    data['slug'] = this.slug;
    data['id'] = this.id;
    return data;
  }
}
