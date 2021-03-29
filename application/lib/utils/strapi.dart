import 'dart:developer';
import 'dart:io';

import 'package:dio/dio.dart';
import 'package:carryout/utils/api.dart';

var dio = Dio(
  BaseOptions(
    baseUrl: API.baseURL,
    headers: {
      HttpHeaders.authorizationHeader:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNiNTY1OTc2NjdiMTIzNGUzZDY3NiIsImlhdCI6MTYxNzA0NDIzMSwiZXhwIjoxNjE5NjM2MjMxfQ.BpUlSh0iKPM5WnFQcGGH1mOPjshM_MTrK2sN6-kVaCc",
    },
  ),
);

class Strapi {
  static Future<List> find(String collection, {Map<String, dynamic> qs}) async {
    final String url = "/$collection";
    log("[Request: GET] $url");
    var response = await dio.get(url, queryParameters: qs);
    return response.data;
  }
}
