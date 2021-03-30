import 'package:carryout/theme.dart';
import 'package:flutter/material.dart';

import 'package:marquee_text/marquee_direction.dart';
import 'package:marquee_text/marquee_text.dart';

import 'package:carryout/models/menuItem.dart';

class FoodItemWidget extends StatelessWidget {
  final Item item;

  const FoodItemWidget({
    Key key,
    this.item,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
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
              padding: EdgeInsets.all(15),
              child: MarqueeText(
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
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              "₹ ${item.price} /p",
              style: TextStyle(
                color: AppTheme.colors.light,
                fontFamily: 'Poppins',
                fontWeight: FontWeight.w700,
                fontSize: 12,
              ),
            ),
          ),
          Expanded(
            flex: 1,
            child: Card(
              color: AppTheme.colors.black,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    icon: Icon(
                      Icons.remove,
                      color: AppTheme.colors.light,
                    ),
                    onPressed: () {},
                  ),
                  Expanded(
                    flex: 1,
                    child: Text(
                      "${item.defaultQty}",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: AppTheme.colors.accent,
                        fontSize: 20,
                        fontFamily: 'Poppins',
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                  IconButton(
                    icon: Icon(
                      Icons.add,
                      color: AppTheme.colors.light,
                    ),
                    onPressed: () {},
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
