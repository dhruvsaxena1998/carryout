import 'dart:developer';

import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
import 'package:carryout/models/Item.dart';

part 'detail_state.dart';

class DetailCubit extends Cubit<DetailState> {
  DetailCubit() : super(DetailState(defaults: [], optional: []));

  void init({@required List<Item> defaults, @required List<Item> optional}) {
    log('[Cubit] <DetailCubit> init');
    emit(DetailState(defaults: defaults, optional: optional));
  }

  void handleIncrement({
    @required String title,
    @required num index,
    @required String status,
  }) {
    log('[Cubit] <DetailCubit> handleIncrement');
    if (title == 'Optional') {
      var optional = state.optional;

      if (status == 'add') {
        optional[index].defaults += 1;
      } else {
        optional[index].defaults -= 1;
      }

      emit(DetailState(defaults: state.defaults, optional: optional));
    } else {
      var defaults = state.defaults;

      if (status == 'add') {
        defaults[index].defaults += 1;
      } else {
        defaults[index].defaults -= 1;
      }

      emit(DetailState(defaults: defaults, optional: state.optional));
    }
  }
}
