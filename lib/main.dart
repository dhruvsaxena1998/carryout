import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:get/get.dart';

import 'package:carryout/theme.dart';
import 'package:carryout/routes.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
      ),
    );
    return GetMaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        accentColor: AppTheme.colors.black,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      initialRoute: '/home',
      getPages: routes,
    );
  }
}
