import 'package:carryout/theme.dart';
import 'package:flutter/material.dart';

class PriceWidget extends StatelessWidget {
  final num price;
  final double height;
  final double width;
  final double fontSize;

  const PriceWidget({
    Key key,
    @required this.price,
    this.height = 50,
    this.width = 100,
    this.fontSize = 18,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(15),
      child: Container(
        height: height,
        width: width,
        color: AppTheme.colors.accent,
        child: Align(
          alignment: Alignment.center,
          child: Text(
            "₹ $price",
            style: TextStyle(
              color: AppTheme.colors.dark,
              fontSize: fontSize,
              fontWeight: FontWeight.w700,
              fontFamily: 'Poppins',
            ),
          ),
        ),
      ),
    );
  }
}
