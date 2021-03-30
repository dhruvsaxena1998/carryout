import 'package:carryout/utils/api.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:carryout/theme.dart';

import 'package:carryout/widgets/common/PriceWidget.dart';
import 'package:carryout/widgets/common/FullWidthButtonWidget.dart';
import 'package:carryout/widgets/detail/FoodItemWidget.dart';

import 'package:carryout/models/menuItem.dart';

class DetailPage extends StatefulWidget {
  DetailPage({Key key}) : super(key: key);

  @override
  _DetailPageState createState() => _DetailPageState();
}

class _DetailPageState extends State<DetailPage> {
  final MenuItem item = Get.arguments;

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width - 30;
    return Scaffold(
      bottomNavigationBar: Container(
        height: 50,
        margin: const EdgeInsets.all(20),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              flex: 3,
              child: Padding(
                padding: const EdgeInsets.only(right: 5),
                child: FullWidthButtonWidget(title: 'Checkout'),
              ),
            ),
            Expanded(
              flex: 1,
              child: Padding(
                padding: const EdgeInsets.only(left: 5),
                child: PriceWidget(price: item.price),
              ),
            ),
          ],
        ),
      ),
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Container(
              width: width,
              margin: const EdgeInsets.only(top: 50),
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: AppTheme.colors.dark,
                borderRadius: BorderRadius.circular(25),
                boxShadow: [
                  BoxShadow(
                    color: AppTheme.colors.black,
                    blurRadius: 10,
                  ),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Hero(
                    tag: "image-${item.id}",
                    child: Container(
                      height: width,
                      padding: const EdgeInsets.all(10),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(25),
                        child: Image.network(
                          "${API.baseURL}${item.image.url}",
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(10),
                    child: Column(
                      children: [
                        Align(
                          alignment: Alignment.centerRight,
                          child: Text(
                            item.name,
                            style: TextStyle(
                              color: AppTheme.colors.white,
                              fontSize: 22,
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.w700,
                            ),
                          ),
                        ),
                        Align(
                          alignment: Alignment.centerRight,
                          child: Text(
                            item.description,
                            textAlign: TextAlign.justify,
                            style: TextStyle(
                              color: AppTheme.colors.light,
                              fontSize: 16,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            __listBuilder(
                context: context, title: 'Items', list: item.compulsory),
            __listBuilder(
                context: context, title: 'Optional', list: item.optional),
          ],
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

Widget __listBuilder({
  @required BuildContext context,
  @required String title,
  @required List list,
}) {
  return Container(
    margin: const EdgeInsets.symmetric(vertical: 20, horizontal: 15),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 5),
          child: Text(
            title,
            style: TextStyle(
              fontSize: 20,
              color: AppTheme.colors.accent,
              fontFamily: 'Poppins',
              fontWeight: FontWeight.w700,
              letterSpacing: 1.2,
            ),
          ),
        ),
        Container(
          child: MediaQuery.removePadding(
            removeTop: true,
            context: context,
            child: ListView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemCount: list.length,
              itemBuilder: (context, index) {
                return FoodItemWidget(
                  item: list[index],
                );
              },
            ),
          ),
        ),
      ],
    ),
  );
}
