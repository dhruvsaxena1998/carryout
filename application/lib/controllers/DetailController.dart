import 'package:flutter/foundation.dart';
import 'package:get/state_manager.dart';

import 'package:carryout/models/Menu.dart';
import 'package:carryout/models/Item.dart';

import 'package:carryout/types/enum.dart';

class DetailController extends GetxController {
  Menu menu;
  num ogPrice;

  void init(data) {
    menu = data;
    ogPrice = data.price;
    update();
  }

  void change(
    num index, {
    @required EnumBtnActions action,
    @required EnumListSlugs slug,
  }) {
    List<Item> items = slug == EnumListSlugs.items ? menu.items : menu.optional;
    Item item = items[index];

    if (action == EnumBtnActions.increment)
      item.currentQty = item.currentQty + 1 >= item.maxQty
          ? item.maxQty
          : item.currentQty + 1;
    else
      item.currentQty = item.currentQty - 1 <= 0 ? 0 : item.currentQty - 1;

    // set update item to items list
    items[index] = item;
    slug == EnumListSlugs.items ? menu.items = items : menu.optional = items;

    menu.price = _priceCalculator(menu);
    update();
  }

  num _priceCalculator(Menu item) {
    // always starts from default price
    num price = ogPrice;

    List<Item> items = new List.from(item.items)..addAll(item.optional);
    items.forEach((el) {
      if (el.currentQty > el.defaultQty) {
        price += (el.currentQty - el.defaultQty) * el.price;
      }
    });

    return price;
  }
}
