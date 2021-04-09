import 'package:get/state_manager.dart';
import 'package:carryout/models/Menu.dart';

class MenuController extends GetxController {
  List<Menu> menus;

  void init(List<Menu> items) {
    menus = items;

    update();
  }
}
