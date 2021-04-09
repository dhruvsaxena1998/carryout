import 'package:json_annotation/json_annotation.dart';

part 'Item.g.dart';

@JsonSerializable()
class Item {
  @JsonKey(name: '_id')
  String id;
  String name, slug;
  num maxQty, defaultQty, currentQty, price;

  Item({
    this.defaultQty,
    this.id,
    this.maxQty,
    this.name,
    this.slug,
    this.price,
    this.currentQty,
  });

  factory Item.fromJson(Map<String, dynamic> json) => _$ItemFromJson(json);

  Map<String, dynamic> toJson() => _$ItemToJson(this);
}
