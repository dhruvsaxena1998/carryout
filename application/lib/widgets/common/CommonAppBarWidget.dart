import 'package:flutter/material.dart';
import 'package:carryout/theme.dart';

class AppBarWidget extends PreferredSize {
  final Widget child;
  final double height;

  AppBarWidget({
    @required this.child,
    this.height = kToolbarHeight,
  });
  @override
  Size get preferredSize => Size.fromHeight(height);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: preferredSize.height,
      child: child,
    );
  }
}

class CommonAppBarWidget extends StatelessWidget {
  final String name;
  final Widget action;
  CommonAppBarWidget({Key key, this.name, this.action}) : super(key: key);

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
              onPressed: () {},
            ),
            Expanded(
              flex: 1,
              child: Text(
                name,
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: AppTheme.colors.light,
                  fontSize: 22,
                  fontWeight: FontWeight.w700,
                  fontFamily: 'Avenir',
                  letterSpacing: 1.2,
                ),
              ),
            ),
            action,
          ],
        ),
      ),
    );
  }
}
