// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'Item.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Item _$ItemFromJson(Map<String, dynamic> json) {
  return Item(
    defaultQty: json['defaultQty'] as num,
    id: json['_id'] as String,
    maxQty: json['maxQty'] as num,
    name: json['name'] as String,
    slug: json['slug'] as String,
    price: json['price'] as num,
    currentQty: json['currentQty'] as num,
  );
}

Map<String, dynamic> _$ItemToJson(Item instance) => <String, dynamic>{
      '_id': instance.id,
      'name': instance.name,
      'slug': instance.slug,
      'maxQty': instance.maxQty,
      'defaultQty': instance.defaultQty,
      'currentQty': instance.currentQty,
      'price': instance.price,
    };
