import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';

import 'package:carryout/theme.dart';
import 'package:carryout/widgets/EmojiRatingWidget.dart';
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
          Get.snackbar(
            'Flutter',
            item.name,
            colorText: AppTheme.colors.white,
            snackPosition: SnackPosition.BOTTOM,
            backgroundColor: AppTheme.colors.dark,
            icon: Icon(
              Icons.check_circle,
              color: AppTheme.colors.accent,
            ),
            margin: const EdgeInsets.symmetric(
              horizontal: 10,
              vertical: 10,
            ),
          );
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
                            style: GoogleFonts.quicksand(
                              color: AppTheme.colors.white,
                              fontSize: width * 0.06,
                              fontWeight: FontWeight.w900,
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
                      ClipRRect(
                        borderRadius: BorderRadius.circular(15),
                        child: Container(
                          height: 50,
                          width: 100,
                          color: AppTheme.colors.accent,
                          child: Align(
                            alignment: Alignment.center,
                            child: Text(
                              "₹ ${item.price}",
                              style: GoogleFonts.inter(
                                color: AppTheme.colors.dark,
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  width: width * 0.4,
                  height: width * 0.4,
                  child: CircleAvatar(
                    radius: 30.0,
                    backgroundImage: NetworkImage(
                      item.image,
                    ),
                    backgroundColor: AppTheme.colors.black,
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
