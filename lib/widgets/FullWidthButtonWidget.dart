import 'package:carryout/theme.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class FullWidthButtonWidget extends StatelessWidget {
  const FullWidthButtonWidget({Key key, @required this.title})
      : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {},
      customBorder: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(15),
        child: Container(
          width: MediaQuery.of(context).size.width - 30,
          decoration: BoxDecoration(color: AppTheme.colors.accent),
          padding: const EdgeInsets.all(10),
          child: Align(
            alignment: Alignment.center,
            child: Text(
              title.toUpperCase(),
              style: GoogleFonts.inter(
                color: AppTheme.colors.dark,
                fontSize: 24,
                fontWeight: FontWeight.bold,
                letterSpacing: 1.2,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
