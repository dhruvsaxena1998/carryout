class Item {
  num max, defaults, current, price;
  String id, name, slug;

  Item({
    this.defaults,
    this.id,
    this.max,
    this.name,
    this.slug,
    this.price,
    this.current,
  });

  Item.fromJson(Map<String, dynamic> json) {
    max = json['max'];
    defaults = json['default'];
    id = json['_id'];
    name = json['name'];
    price = json['price'];
    slug = json['slug'];
    current = json['current'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['max'] = this.max;
    data['default'] = this.defaults;
    data['_id'] = this.id;
    data['name'] = this.name;
    data['price'] = this.price;
    data['slug'] = this.slug;
    return data;
  }
}
