import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:carryout/theme.dart';

class EmojiRatingWidget extends StatelessWidget {
  final double rating;
  final int reviews;

  const EmojiRatingWidget({
    Key key,
    this.rating,
    this.reviews,
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

    return "$emoticon  $rating";
  }

  @override
  Widget build(BuildContext context) {
    return RichText(
      text: TextSpan(
        children: [
          TextSpan(
            text: getEmoji(rating),
            style: GoogleFonts.inter(
              color: AppTheme.colors.accent,
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
          TextSpan(
            text: "  ($reviews)",
            style: GoogleFonts.inter(
              color: AppTheme.colors.light,
              fontSize: 16,
              fontWeight: FontWeight.w500,
            ),
          )
        ],
      ),
    );
  }
}
