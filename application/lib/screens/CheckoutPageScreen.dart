import 'package:flutter/material.dart';

import 'package:carryout/theme.dart';

import 'package:carryout/models/Menu.dart';

import 'package:carryout/widgets/common/CommonAppBarWidget.dart';
import 'package:carryout/widgets/checkout/CheckoutCardWidget.dart';

class CheckoutPageScreen extends StatelessWidget {
  final Menu item;
  CheckoutPageScreen({Key key, this.item}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarWidget(
        height: MediaQuery.of(context).size.height * 0.1,
        child: CommonAppBarWidget(
          name: 'Checkout',
          action: IconButton(
            icon: Icon(
              Icons.account_balance_wallet_rounded,
              color: AppTheme.colors.light,
            ),
            onPressed: () {
              // Save Bookmark
            },
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10),
                child: Text(
                  'Item',
                  style: TextStyle(
                    fontSize: 20,
                    color: AppTheme.colors.accent,
                    fontFamily: 'Poppins',
                    fontWeight: FontWeight.w700,
                    letterSpacing: 1.2,
                  ),
                ),
              ),
              SizedBox(
                height: 10,
              ),
              CheckoutCardWidget(item: item),
            ],
          ),
        ),
      ),
    );
  }
}
