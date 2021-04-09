import 'package:json_annotation/json_annotation.dart';

part 'MediaImage.g.dart';

@JsonSerializable()
class MediaImage {
  String fieldname, encoding, mimetype, filename, path, url;
  num size;

  MediaImage({
    this.fieldname,
    this.encoding,
    this.mimetype,
    this.filename,
    this.path,
    this.url,
    this.size,
  });

  factory MediaImage.fromJson(Map<String, dynamic> json) =>
      _$MediaImageFromJson(json);

  Map<String, dynamic> toJson() => _$MediaImageToJson(this);
}
