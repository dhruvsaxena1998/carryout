import 'package:carryout/models/Menu.dart';
import 'package:flutter/foundation.dart';

class InitMenuAction {
  List<Menu> menus;

  InitMenuAction({
    @required this.menus,
  });
}
