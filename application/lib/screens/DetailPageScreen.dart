import 'package:flutter/material.dart';

import 'package:flutter_redux/flutter_redux.dart';
import 'package:carryout/redux/app_state.dart';

import 'package:carryout/models/Menu.dart';
import 'package:carryout/types/enum.dart';

import 'package:carryout/theme.dart';

import 'package:carryout/widgets/details/ImageCardWidget.dart';
import 'package:carryout/widgets/details/FoodItemWidget.dart';
import 'package:carryout/widgets/details/DetailsFooterWidget.dart';

class DetailPageScreen extends StatelessWidget {
  final num index;
  DetailPageScreen({
    Key key,
    @required this.index,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: DetailsFooterWidget(),
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: StoreConnector<AppState, List<Menu>>(
          converter: (store) => store.state.menus,
          builder: (context, List<Menu> vm) {
            var item = vm[index];
            return Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                ImageCardWidget(
                  id: item.id,
                  name: item.name,
                  description: item.description,
                  img: item.image.url,
                ),
                _listBuilder(
                  context: context,
                  slug: EnumListSlugs.items,
                  list: item.items,
                ),
                _listBuilder(
                  context: context,
                  slug: EnumListSlugs.optional,
                  list: item.optional,
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}

Widget _listBuilder({
  @required BuildContext context,
  @required EnumListSlugs slug,
  @required List list,
}) {
  return Container(
    margin: const EdgeInsets.symmetric(vertical: 20, horizontal: 15),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 5),
          child: Text(
            slug == EnumListSlugs.items ? 'Items' : 'Optionals',
            style: TextStyle(
              fontSize: 20,
              color: AppTheme.colors.accent,
              fontFamily: 'Poppins',
              fontWeight: FontWeight.w700,
              letterSpacing: 1.2,
            ),
          ),
        ),
        Container(
          margin: const EdgeInsets.symmetric(vertical: 5),
          child: MediaQuery.removePadding(
            removeTop: true,
            context: context,
            child: ListView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemCount: list.length,
              itemBuilder: (context, index) {
                return FoodItemWidget(
                  item: list[index],
                  slug: slug,
                  index: index,
                );
              },
            ),
          ),
        ),
      ],
    ),
  );
}
