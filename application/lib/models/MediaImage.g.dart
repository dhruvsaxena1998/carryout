// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'MediaImage.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

MediaImage _$MediaImageFromJson(Map<String, dynamic> json) {
  return MediaImage(
    fieldname: json['fieldname'] as String,
    encoding: json['encoding'] as String,
    mimetype: json['mimetype'] as String,
    filename: json['filename'] as String,
    path: json['path'] as String,
    url: json['url'] as String,
    size: json['size'] as num,
  );
}

Map<String, dynamic> _$MediaImageToJson(MediaImage instance) =>
    <String, dynamic>{
      'fieldname': instance.fieldname,
      'encoding': instance.encoding,
      'mimetype': instance.mimetype,
      'filename': instance.filename,
      'path': instance.path,
      'url': instance.url,
      'size': instance.size,
    };
