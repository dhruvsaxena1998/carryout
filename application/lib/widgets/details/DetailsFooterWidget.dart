import 'package:carryout/theme.dart';
import 'package:get/get.dart';
import 'package:flutter/material.dart';
import 'package:badges/badges.dart';
import 'package:carryout/widgets/common/FullWidthButtonWidget.dart';
import 'package:carryout/widgets/common/PriceWidget.dart';
import 'package:carryout/controllers/DetailController.dart';

class DetailsFooterWidget extends StatelessWidget {
  final num price;
  const DetailsFooterWidget({Key key, @required this.price}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      margin: const EdgeInsets.all(20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Expanded(
            flex: 3,
            child: Padding(
              padding: const EdgeInsets.only(right: 5),
              child: FullWidthButtonWidget(title: 'Checkout'),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 5),
            child: GetBuilder<DetailController>(builder: (_) {
              return _.ogPrice == _.menu.price
                  ? PriceWidget(price: _.menu.price)
                  : Badge(
                      badgeContent: Icon(
                        Icons.shopping_cart_rounded,
                        color: AppTheme.colors.light,
                        size: 18,
                      ),
                      child: PriceWidget(price: _.menu.price),
                    );
            }),
          ),
        ],
      ),
    );
  }
}
