import 'package:carryout/redux/actions.dart';
import 'package:carryout/redux/app_state.dart';

AppState menuReducer(AppState state, dynamic action) {
  if (action is InitMenuAction) {
    return AppState(
      menus: action.menus,
    );
  }

  return state;
}
