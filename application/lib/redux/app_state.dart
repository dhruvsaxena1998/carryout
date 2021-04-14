import 'package:carryout/models/Menu.dart';

class AppState {
  List<Menu> menus;
  Menu selectedMenu;
  num selectedIndex;

  AppState({
    this.menus = const [],
    this.selectedMenu,
    this.selectedIndex = 0,
  });

  AppState.copyWith({
    AppState prev,
    List<Menu> menus,
    Menu selectedMenu,
    num selectedIndex,
  }) {
    this.menus = menus ?? prev.menus;
    this.selectedMenu = selectedMenu ?? prev.selectedMenu;
    this.selectedIndex = selectedIndex ?? prev.selectedIndex;
  }
}
