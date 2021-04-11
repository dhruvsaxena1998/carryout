import 'package:carryout/theme.dart';
import 'package:flutter/material.dart';

class FullWidthButtonWidget extends StatelessWidget {
  final String title;
  final Function onTap;

  FullWidthButtonWidget({Key key, @required this.title, @required this.onTap})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
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
              style: TextStyle(
                color: AppTheme.colors.dark,
                fontSize: 20,
                fontFamily: 'Poppins',
                fontWeight: FontWeight.w700,
                letterSpacing: 1.2,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
