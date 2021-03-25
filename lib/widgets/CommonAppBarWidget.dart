import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:carryout/theme.dart';
import 'package:marquee_text/marquee_direction.dart';
import 'package:marquee_text/marquee_text.dart';

class CommonAppBarWidget extends StatelessWidget {
  final int id;
  final String name;

  CommonAppBarWidget({Key key, this.id, this.name}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        padding: const EdgeInsets.all(10),
        child: Column(
          children: [
            SizedBox(
              height: 10,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                IconButton(
                  icon: Icon(
                    Icons.arrow_back_ios_rounded,
                    color: AppTheme.colors.light,
                  ),
                  onPressed: () {
                    Get.back();
                  },
                ),
                Expanded(
                  flex: 1,
                  child: Align(
                    alignment: Alignment.center,
                    child: MarqueeText(
                      text: name,
                      style: GoogleFonts.quicksand(
                        color: AppTheme.colors.light,
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                      speed: 30,
                      alwaysScroll: false,
                      marqueeDirection: MarqueeDirection.rtl,
                    ),
                  ),
                ),
                IconButton(
                  icon: Icon(
                    Icons.bookmark_border_rounded,
                    color: AppTheme.colors.light,
                  ),
                  onPressed: () {
                    // Save Bookmark
                  },
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
