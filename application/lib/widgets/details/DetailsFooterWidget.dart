import 'package:carryout/models/Menu.dart';
import 'package:carryout/redux/app_state.dart';
import 'package:flutter/material.dart';

import 'package:badges/badges.dart';
import 'package:carryout/theme.dart';

import 'package:carryout/widgets/common/FullWidthButtonWidget.dart';
import 'package:carryout/widgets/common/PriceWidget.dart';
import 'package:flutter_redux/flutter_redux.dart';

class DetailsFooterWidget extends StatelessWidget {
  const DetailsFooterWidget({Key key}) : super(key: key);

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
              child: FullWidthButtonWidget(title: 'Checkout', onTap: () {}),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 5),
            child: StoreConnector<AppState, Menu>(
              converter: (store) => store.state.selectedMenu,
              builder: (context, Menu menu) => PriceWidget(price: menu.price),
            ),
          )
          // Padding(
          //   padding: const EdgeInsets.only(left: 5),
          //   child: _.ogPrice == _.menu.price
          //       ? PriceWidget(price: _.menu.price)
          //       : Badge(
          //           badgeContent: Padding(
          //             padding: const EdgeInsets.all(2),
          //             child: Icon(
          //               Icons.shopping_cart_rounded,
          //               color: AppTheme.colors.light,
          //               size: 16,
          //             ),
          //           ),
          //           child: PriceWidget(price: _.menu.price),
          //         ),
          // ),
        ],
      ),
    );
  }
}
