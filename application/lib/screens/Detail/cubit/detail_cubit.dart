import 'dart:developer';

import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

import 'package:carryout/types/enum.dart';
import 'package:carryout/models/Item.dart';
import 'package:carryout/models/Menu.dart';

part 'detail_state.dart';

class DetailCubit extends Cubit<DetailState> {
  DetailCubit() : super(DetailState(item: null));

  void init({@required Menu item}) {
    log('[Cubit] <DetailCubit> init');
    emit(DetailState(item: item));
  }

  // num _handlePrice(Menu item) {
  //   List list = new List.from(item.defaults)..addAll(item.optional);
  // }

  void change(
    int index, {
    @required EnumBtnActions action,
    @required EnumListSlugs slug,
  }) {
    var prevState = DetailState(item: state.item);

    List<Item> items = slug == EnumListSlugs.defaults
        ? prevState.item.defaults
        : state.item.optional;

    Item item = items[index];

    if (action == EnumBtnActions.increment)
      item.defaults =
          item.defaults + 1 >= item.max ? item.max : item.defaults + 1;
    else
      item.defaults = item.defaults - 1 <= 0 ? 0 : item.defaults - 1;

    // Set updated item back to it's list
    items[index] = item;

    if (slug == EnumListSlugs.defaults)
      prevState.item.defaults = items;
    else
      prevState.item.optional = items;

    // prevState.item.price = this._handlePrice(prevState.item);

    // emit updated state
    emit(DetailState(item: prevState.item));
  }
}
