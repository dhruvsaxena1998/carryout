import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:carryout/theme.dart';

import 'package:carryout/widgets/details/ImageCardWidget.dart';
import 'package:carryout/widgets/details/FoodItemWidget.dart';
import 'package:carryout/widgets/details/DetailsFooterWidget.dart';

import 'package:carryout/controllers/DetailController.dart';

import 'package:carryout/types/enum.dart';
import 'package:carryout/models/Menu.dart';

class DetailPageScreen extends StatelessWidget {
  final Menu item = Get.arguments;
  // setting up state
  final DetailController detailsController = Get.put(DetailController());

  @override
  Widget build(BuildContext context) {
    detailsController.init(item);
    return Scaffold(
      bottomNavigationBar: DetailsFooterWidget(),
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            ImageCardWidget(item: item),
            GetBuilder<DetailController>(builder: (_) {
              return Column(
                children: [
                  _listBuilder(
                    context: context,
                    slug: EnumListSlugs.items,
                    list: _.menu.items,
                  ),
                  _listBuilder(
                    context: context,
                    slug: EnumListSlugs.optional,
                    list: _.menu.optional,
                  ),
                ],
              );
            }),
          ],
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
