import 'dart:developer';

import 'package:bloc/bloc.dart';
import 'package:carryout/models/Item.dart';
import 'package:meta/meta.dart';
import 'package:carryout/models/Menu.dart';

part 'detail_state.dart';

class DetailCubit extends Cubit<DetailState> {
  DetailCubit() : super(DetailState(item: null));

  void init({@required Menu item}) {
    log('[Cubit] <DetailCubit> init');
    emit(DetailState(item: item));
  }

  void change(
    String id, {
    @required BtnActions action,
    @required String slug,
  }) {
    var prevState = DetailState(item: state.item);

    List<Item> items =
        slug == 'defaults' ? prevState.item.defaults : state.item.optional;

    int index = items.indexWhere((el) => el.id == id);
    Item item = items[index];

    if (action == BtnActions.increment)
      item.defaults =
          item.defaults + 1 >= item.max ? item.max : item.defaults + 1;
    else
      item.defaults = item.defaults - 1 <= 0 ? 0 : item.defaults - 1;

    // Set updated item back to it's list
    items[index] = item;

    if (slug == 'defaults')
      prevState.item.defaults = items;
    else
      prevState.item.optional = items;

    // emit updated state
    emit(DetailState(item: prevState.item));
  }
}
