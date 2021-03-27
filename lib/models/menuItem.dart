import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

part 'MenuItem.g.dart';

@JsonSerializable(explicitToJson: true)
class MenuItem {
  String id, name, description;
  double price;

  MenuItem({
    this.id,
    this.name,
    this.description,
    this.price,
  });

  factory MenuItem.fromJson(Map<String, dynamic> data) =>
      _$MenuItemFromJson(data);

  Map<String, dynamic> toJson() => _$MenuItemToJson(this);
}
