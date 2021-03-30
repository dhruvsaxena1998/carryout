import 'package:get/get.dart';

import 'package:carryout/screens/HomePageScreen.dart';
import 'package:carryout/screens/DetailPageScreen.dart';

List<GetPage> routes = [
  GetPage(name: '/home', page: () => HomePage()),
  GetPage(
    name: '/detail',
    page: () => DetailPage(),
    transition: Transition.topLevel,
  )
];
