import 'package:carryout/theme.dart';
import 'package:flutter/material.dart';

import 'package:marquee_text/marquee_direction.dart';
import 'package:marquee_text/marquee_text.dart';

class FoodItemWidget extends StatelessWidget {
  const FoodItemWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;

    final double paddingAmount = 15;
    final double borderRadius = 10;
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 7),
      width: width,
      decoration: BoxDecoration(
        color: AppTheme.colors.dark,
        borderRadius: BorderRadius.circular(borderRadius),
      ),
      child: Row(
        children: <Widget>[
          Expanded(
            flex: 1,
            child: Padding(
              padding: EdgeInsets.all(paddingAmount),
              child: MarqueeText(
                text: 'Potatoes',
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
            ),
          ),
          Container(
            margin: EdgeInsets.all(paddingAmount / 2),
            width: width * 0.35,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(borderRadius),
              color: AppTheme.colors.black,
            ),
            // FIXME: Fixes required for small screen
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                InkWell(
                  onTap: () {},
                  child: Padding(
                    padding: EdgeInsets.all(paddingAmount),
                    child: Icon(
                      Icons.remove,
                      color: AppTheme.colors.light,
                    ),
                  ),
                ),
                Expanded(
                  flex: 1,
                  child: Container(
                    padding: const EdgeInsets.symmetric(vertical: 15),
                    color: AppTheme.colors.dark,
                    child: Text(
                      '10',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: AppTheme.colors.light,
                        fontSize: 18,
                        fontFamily: 'Poppins',
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                ),
                InkWell(
                  onTap: () {},
                  child: Padding(
                    padding: EdgeInsets.all(paddingAmount),
                    child: Icon(
                      Icons.add,
                      color: AppTheme.colors.light,
                    ),
                  ),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
