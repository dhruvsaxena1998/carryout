import 'dart:developer';
// import 'dart:io';

import 'package:dio/dio.dart';
import 'package:carryout/utils/api.dart';

var dio = Dio(
  BaseOptions(
    baseUrl: API.baseURL,
    // headers: {
    //   HttpHeaders.authorizationHeader:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNiNTY1OTc2NjdiMTIzNGUzZDY3NiIsImlhdCI6MTYxNzIxNzc2OCwiZXhwIjoxNjE5ODA5NzY4fQ.xWiMe59n_rFvfLDDuzc0CBp3iLd7I7_Nj2gDeX-UXiw",
    // },
  ),
);

class Server {
  static Future<List> find(String collection, {Map<String, dynamic> qs}) async {
    final String url = "/$collection";
    log("[Request: GET] $url");

    var response = await dio.get(url, queryParameters: qs);
    return response.data;
  }

  static Future findOne(String collection, String id,
      {Map<String, dynamic> qs}) async {
    final String url = "/$collection/$id";
    log("[Request: GET] $url");

    var response = await dio.get(url, queryParameters: qs);
    return response.data;
  }
}
