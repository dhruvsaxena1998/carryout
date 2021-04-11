import 'package:get/get.dart';

import 'package:carryout/screens/HomePageScreen.dart';
import 'package:carryout/screens/DetailPageScreen.dart';
import 'package:carryout/screens/CheckoutPageScreen.dart';

List<GetPage> routes = [
  GetPage(name: '/home', page: () => HomePage()),
  GetPage(
    name: '/detail',
    page: () => DetailPageScreen(),
    transition: Transition.topLevel,
  ),
  GetPage(
    name: '/checkout',
    page: () => CheckoutPageScreen(),
    transition: Transition.topLevel,
  ),
];
