import 'package:carryout/redux/actions.dart';
import 'package:carryout/redux/app_state.dart';
import 'package:flutter/material.dart';
import 'package:carryout/theme.dart';
import 'package:flutter_redux/flutter_redux.dart';

import 'package:marquee_text/marquee_direction.dart';
import 'package:marquee_text/marquee_text.dart';

import 'package:carryout/models/Item.dart';
import 'package:carryout/types/enum.dart';

class FoodItemWidget extends StatelessWidget {
  final Item item;
  final EnumListSlugs slug;
  final int index;
  const FoodItemWidget({
    Key key,
    this.item,
    this.slug,
    this.index,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    void handleChange(EnumBtnActions action) {
      StoreProvider.of<AppState>(context).dispatch(
        HandleChangeAction(index: index, cta: action, slug: slug),
      );
    }

    return Card(
      margin: const EdgeInsets.symmetric(vertical: 7),
      color: AppTheme.colors.dark,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      child: Row(
        children: <Widget>[
          Expanded(
            flex: 2,
            child: Padding(
              padding: const EdgeInsets.all(12.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  MarqueeText(
                    text: item.name,
                    style: TextStyle(
                      color: AppTheme.colors.light,
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                      fontFamily: 'Poppins',
                      letterSpacing: 1.2,
                    ),
                    speed: 30,
                    alwaysScroll: false,
                    marqueeDirection: MarqueeDirection.rtl,
                  ),
                  Text(
                    "₹ ${item.price} /p",
                    style: TextStyle(
                      color: AppTheme.colors.accent,
                      fontFamily: 'Poppins',
                      fontWeight: FontWeight.w700,
                      fontSize: 12,
                    ),
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            child: Card(
              color: AppTheme.colors.black,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10),
              ),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    _renderIconButton(
                      Icon(Icons.remove, color: AppTheme.colors.white),
                      () {
                        handleChange(EnumBtnActions.decrement);
                      },
                    ),
                    Expanded(
                      flex: 1,
                      child: Text(
                        "${item.currentQty}",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: AppTheme.colors.accent,
                          fontSize: 20,
                          fontFamily: 'Poppins',
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                    ),
                    _renderIconButton(
                      Icon(Icons.add, color: AppTheme.colors.white),
                      () {
                        handleChange(EnumBtnActions.increment);
                      },
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

Widget _renderIconButton(Icon icon, Function onTap) {
  return InkWell(
    customBorder: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(15),
    ),
    child: Padding(
      padding: const EdgeInsets.all(7),
      child: icon,
    ),
    onTap: onTap,
  );
}
