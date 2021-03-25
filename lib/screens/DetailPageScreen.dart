import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:carryout/theme.dart';

import 'package:carryout/widgets/CommonAppBarWidget.dart';
import 'package:carryout/widgets/EmojiRatingWidget.dart';
import 'package:carryout/widgets/PriceWidget.dart';
import 'package:carryout/widgets/FullWidthButtonWidget.dart';

import 'package:carryout/models/menu.dart';

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
    return Scaffold(
      body: Container(
        child: SingleChildScrollView(
          child: Column(
            children: <Widget>[
              CommonAppBarWidget(
                id: item.id,
                name: item.name,
              ),
              EmojiRatingWidget(
                rating: item.rating,
                reviews: item.reviews,
              ),
              Container(
                width: width * 0.7,
                height: width * 0.7,
                margin: const EdgeInsets.symmetric(vertical: 50),
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
              Align(
                alignment: Alignment.centerRight,
                child: Padding(
                  padding: const EdgeInsets.only(right: 20),
                  child: PriceWidget(
                    price: item.price,
                  ),
                ),
              ),
              SizedBox(
                height: 20,
              ),
              FullWidthButtonWidget(title: 'Checkout')
            ],
          ),
        ),
      ),
    );
  }
}
