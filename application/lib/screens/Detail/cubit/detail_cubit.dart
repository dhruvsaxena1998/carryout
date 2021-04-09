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
    emit(DetailState(item: item, ogState: item));
  }

  void change(
    int index, {
    @required EnumBtnActions action,
    @required EnumListSlugs slug,
  }) {
    var prevState = DetailState(item: state.item, ogState: state.ogState);

    List<Item> items = slug == EnumListSlugs.items
        ? prevState.item.items
        : state.item.optional;

    Item item = items[index];

    if (action == EnumBtnActions.increment)
      item.current = item.current + 1 >= item.max ? item.max : item.current + 1;
    else
      item.current = item.current - 1 <= 0 ? 0 : item.current - 1;

    // Set updated item back to it's list
    items[index] = item;

    if (slug == EnumListSlugs.items)
      prevState.item.items = items;
    else
      prevState.item.optional = items;

    // prevState.item.price = this._handlePrice(prevState.item);

    // emit updated state
    emit(DetailState(item: prevState.item, ogState: state.ogState));
  }
}
