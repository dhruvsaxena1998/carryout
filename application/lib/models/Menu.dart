import 'package:json_annotation/json_annotation.dart';

import 'package:carryout/models/MediaImage.dart';
import 'package:carryout/models/Item.dart';

part 'Menu.g.dart';

@JsonSerializable()
class Menu {
  String id, name, description;
  num price;
  MediaImage image;
  List<Item> items, optional;

  Menu({
    this.id,
    this.name,
    this.description,
    this.image,
    this.price,
    this.items,
    this.optional,
  });

  factory Menu.fromJson(Map<String, dynamic> json) => _$MenuFromJson(json);

  Map<String, dynamic> toJson() => _$MenuToJson(this);
}
