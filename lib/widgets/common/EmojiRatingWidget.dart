import 'package:flutter/material.dart';
import 'package:carryout/theme.dart';

class EmojiRatingWidget extends StatelessWidget {
  final double rating;
  final int reviews;

  const EmojiRatingWidget({
    Key key,
    @required this.rating,
    @required this.reviews,
  }) : super(key: key);

  String getEmoji(double rating) {
    String emoticon;
    if (rating > 4) {
      emoticon = '🔥';
    } else if (rating > 3) {
      emoticon = '👌';
    } else {
      emoticon = '👍';
    }

    return "$emoticon";
  }

  @override
  Widget build(BuildContext context) {
    return RichText(
      text: TextSpan(
        children: [
          TextSpan(
            text: getEmoji(rating),
            style: TextStyle(
              fontSize: 14,
            ),
          ),
          TextSpan(
            text: " $rating",
            style: TextStyle(
              color: AppTheme.colors.accent,
              fontSize: 16,
              fontFamily: 'Poppins',
              fontWeight: FontWeight.w500,
            ),
          ),
          TextSpan(
            text: " ($reviews)",
            style: TextStyle(
              color: AppTheme.colors.light,
              fontSize: 14,
              fontFamily: 'Poppins',
              fontWeight: FontWeight.w300,
            ),
          ),
        ],
      ),
    );
  }
}
