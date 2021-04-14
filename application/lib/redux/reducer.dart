import 'dart:developer';

import 'package:carryout/models/Item.dart';
import 'package:carryout/redux/actions.dart';
import 'package:carryout/redux/app_state.dart';
import 'package:carryout/types/enum.dart';

AppState menuReducer(AppState state, dynamic action) {
  AppState newState;
  // Initialize available menus
  if (action is InitMenuAction) {
    log("[Redux: InitMenuAction]");
    newState = AppState.copyWith(prev: state, menus: action.menus);

    return newState;
  }

  // set menu to selected
  if (action is SelectMenuAction) {
    log("[Redux: SelectMenuAction] ${action.index}");
    newState = AppState.copyWith(
      prev: state,
      selectedMenu: state.menus[action.index],
      selectedIndex: action.index,
    );

    return newState;
  }

  // handle change in selected menu
  if (action is HandleChangeAction) {
    log("[Redux: HandleChangeAction]");
    newState = AppState.copyWith(prev: state);
    var item = action.slug == EnumListSlugs.items
        ? newState.selectedMenu.items[action.index]
        : newState.selectedMenu.optional[action.index];

    if (action.cta == EnumBtnActions.increment)
      item.currentQty =
          item.currentQty + 1 > item.maxQty ? item.maxQty : item.currentQty + 1;
    else
      item.currentQty = item.currentQty - 1 <= 0 ? 0 : item.currentQty - 1;

    // List allItems = new List.from(state.selectedMenu.items)
    //   ..addAll(state.selectedMenu.optional);

    // num price = newState.selectedMenu.price;

    // allItems.forEach((element) {
    //   if (element.currentQty > element.defaultQty) {
    //     price += (element.currentQty - element.defaultQty) * element.price;
    //   }
    // });

    // newState.selectedMenu.price = price;

    return newState;
  }

  return state;
}
