import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:carryout/theme.dart';
import 'package:carryout/widgets/common/EmojiRatingWidget.dart';
import 'package:carryout/widgets/common/PriceWidget.dart';

import 'package:carryout/models/menu.dart';

class CardWidget extends StatelessWidget {
  final Menu item;

  const CardWidget({Key key, this.item}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width - 30;

    return Container(
      margin: const EdgeInsets.only(bottom: 20, left: 10, right: 10),
      child: InkWell(
        onTap: () {
          Get.toNamed('/detail', arguments: item);
        },
        customBorder: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(25),
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(25),
          child: Container(
            width: width,
            padding: const EdgeInsets.symmetric(
              vertical: 20,
              horizontal: 30,
            ),
            decoration: BoxDecoration(
              color: AppTheme.colors.dark,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  width: width * 0.4,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            item.name,
                            maxLines: 3,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              color: AppTheme.colors.white,
                              fontSize: width * 0.06,
                              fontFamily: 'Avenir',
                              fontWeight: FontWeight.w700,
                            ),
                          ),
                          SizedBox(
                            height: 15,
                          ),
                          EmojiRatingWidget(
                            rating: item.rating,
                            reviews: item.reviews,
                          ),
                        ],
                      ),
                      SizedBox(
                        height: 40,
                      ),
                      PriceWidget(price: item.price),
                    ],
                  ),
                ),
                ClipRRect(
                  borderRadius: BorderRadius.circular(width * 0.2),
                  child: Container(
                    width: width * 0.4,
                    height: width * 0.4,
                    child: Image.network(
                      item.image,
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
