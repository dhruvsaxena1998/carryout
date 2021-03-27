import 'package:carryout/widgets/detail/FoodItemWidget.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:carryout/theme.dart';

import 'package:carryout/widgets/common/CommonAppBarWidget.dart';
import 'package:carryout/widgets/common/EmojiRatingWidget.dart';
import 'package:carryout/widgets/common/PriceWidget.dart';
import 'package:carryout/widgets/common/FullWidthButtonWidget.dart';

import 'package:carryout/models/menu.dart';

import '../widgets/common/EmojiRatingWidget.dart';
import '../widgets/common/PriceWidget.dart';

class DetailPage extends StatefulWidget {
  DetailPage({Key key}) : super(key: key);

  @override
  _DetailPageState createState() => _DetailPageState();
}

class _DetailPageState extends State<DetailPage> {
  final Menu item = Get.arguments;

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width - 30;
    final double height = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: CustomAppBar(
        height: height * 0.12,
        child: CommonAppBarWidget(
          id: item.id,
          name: item.name,
        ),
      ),
      bottomNavigationBar: Container(
        width: width,
        height: 50,
        margin: const EdgeInsets.all(20),
        child: FullWidthButtonWidget(title: 'Checkout'),
      ),
      body: Align(
        alignment: Alignment.center,
        child: SingleChildScrollView(
          physics: BouncingScrollPhysics(),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Container(
                width: width * 0.7,
                height: width * 0.7,
                margin: const EdgeInsets.only(bottom: 30, top: 20),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(width * 1.4),
                  border: Border.all(
                    width: 3,
                    color: AppTheme.colors.accent,
                  ),
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(width * 1.4),
                  child: Image.network(
                    item.image,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
              EmojiRatingWidget(
                rating: item.rating,
                reviews: item.reviews,
              ),
              Align(
                alignment: Alignment.centerRight,
                child: Padding(
                  padding: const EdgeInsets.only(right: 15.0),
                  child: PriceWidget(price: item.price),
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                width: width,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 5),
                      child: Text(
                        'Items',
                        style: TextStyle(
                          fontSize: 25,
                          color: AppTheme.colors.light,
                          fontFamily: 'Avenir',
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Container(
                      child: ListView.builder(
                        shrinkWrap: true,
                        physics: NeverScrollableScrollPhysics(),
                        itemCount: 4,
                        itemBuilder: (context, index) {
                          return FoodItemWidget();
                        },
                      ),
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class CustomAppBar extends PreferredSize {
  final double height;
  final Widget child;
  const CustomAppBar({Key key, this.height = 100, this.child});

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
