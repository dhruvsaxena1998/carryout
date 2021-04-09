// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'Item.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Item _$ItemFromJson(Map<String, dynamic> json) {
  return Item(
    defaults: json['default'] as num, // modified
    id: json['id'] as String,
    max: json['max'] as num,
    name: json['name'] as String,
    slug: json['slug'] as String,
    price: json['price'] as num,
    current: json['current'] as num,
  );
}

Map<String, dynamic> _$ItemToJson(Item instance) => <String, dynamic>{
      'max': instance.max,
      'default': instance.defaults, // modified
      'current': instance.current,
      'price': instance.price,
      'id': instance.id,
      'name': instance.name,
      'slug': instance.slug,
    };
