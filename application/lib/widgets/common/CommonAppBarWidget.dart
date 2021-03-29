import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:carryout/theme.dart';
import 'package:marquee_text/marquee_direction.dart';
import 'package:marquee_text/marquee_text.dart';

class CommonAppBarWidget extends StatelessWidget {
  final String id;
  final String name;

  CommonAppBarWidget({Key key, this.id, this.name}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            IconButton(
              icon: Icon(
                Icons.arrow_back_rounded,
                color: AppTheme.colors.light,
              ),
              onPressed: () {
                Get.back();
              },
            ),
            Expanded(
              flex: 1,
              child: MarqueeText(
                text: name,
                style: TextStyle(
                  color: AppTheme.colors.light,
                  fontSize: 22,
                  fontWeight: FontWeight.w700,
                  fontFamily: 'Avenir',
                  letterSpacing: 1.2,
                ),
                speed: 30,
                alwaysScroll: false,
                marqueeDirection: MarqueeDirection.rtl,
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
            ),
          ],
        ),
      ),
    );
  }
}
