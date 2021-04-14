import 'package:flutter/foundation.dart';

import 'package:carryout/models/Menu.dart';

import 'package:carryout/types/enum.dart';

class InitMenuAction {
  final List<Menu> menus;
  InitMenuAction({@required this.menus});
}

class SelectMenuAction {
  final num index;
  SelectMenuAction({@required this.index});
}

class HandleChangeAction {
  final num index;
  final EnumListSlugs slug;
  final EnumBtnActions cta;

  HandleChangeAction({
    @required this.index,
    @required this.slug,
    @required this.cta,
  });
}
