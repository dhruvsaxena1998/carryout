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
      item.current = item.current + 1 >= item.max ? item.max : item.current + 1;
    else
      item.current = item.current - 1 <= 0 ? 0 : item.current - 1;

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
      if (el.current > el.defaults) {
        price += (el.current - el.defaults) * el.price;
      }
    });

    return price;
  }
}
