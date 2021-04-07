import 'package:get/get.dart';

import 'package:carryout/screens/HomePageScreen.dart';
import 'package:carryout/screens/Detail/views/DetailScreen.dart';

List<GetPage> routes = [
  GetPage(name: '/home', page: () => HomePage()),
  GetPage(
    name: '/detail',
    page: () => DetailPageScreen(),
    transition: Transition.topLevel,
  )
];
