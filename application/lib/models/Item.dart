import 'package:json_annotation/json_annotation.dart';

part 'Item.g.dart';

@JsonSerializable()
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

  factory Item.fromJson(Map<String, dynamic> json) => _$ItemFromJson(json);

  Map<String, dynamic> toJson() => _$ItemToJson(this);
}
