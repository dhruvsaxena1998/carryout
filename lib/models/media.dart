class Format {
  String name;
  String hash;
  String ext;
  String mime;
  double size;
  double height;
  double width;
  String path;
  String url;

  Format({
    this.name,
    this.ext,
    this.mime,
    this.size,
    this.height,
    this.width,
    this.path,
    this.hash,
    this.url,
  });
}

class Formats {
  Format thumbnail;
  Format small;
  Format medium;
  Format large;

  Formats({
    this.thumbnail,
    this.small,
    this.medium,
    this.large,
  });
}

class MediaImage {
  String id;
  String name;
  String alternativeText;
  String caption;
  String hash;
  String ext;
  String mime;
  double size;
  double height;
  double width;
  String url;
  String provider;
  Formats formats;

  MediaImage({
    this.id,
    this.alternativeText,
    this.caption,
    this.hash,
    this.ext,
    this.mime,
    this.size,
    this.formats,
    this.height,
    this.width,
    this.url,
    this.provider,
    this.name,
  });
}
