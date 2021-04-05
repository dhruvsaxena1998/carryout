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

  MediaImage.fromJson(Map<String, dynamic> json) {
    fieldname = json['fieldname'];
    encoding = json['encoding'];
    mimetype = json['mimetype'];
    filename = json['filename'];
    size = json['size'];
    path = json['path'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['fieldname'] = this.fieldname;
    data['encoding'] = this.encoding;
    data['mimetype'] = this.mimetype;
    data['filename'] = this.filename;
    data['size'] = this.size;
    data['path'] = this.path;
    data['url'] = this.url;
    return data;
  }
}
