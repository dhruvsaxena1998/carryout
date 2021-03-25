import 'package:carryout/theme.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class PriceWidget extends StatelessWidget {
  final double price;

  const PriceWidget({Key key, @required this.price}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(15),
      child: Container(
        height: 50,
        width: 100,
        color: AppTheme.colors.accent,
        child: Align(
          alignment: Alignment.center,
          child: Text(
            "₹ $price",
            style: GoogleFonts.inter(
              color: AppTheme.colors.dark,
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
    );
  }
}
