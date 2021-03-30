import 'package:flutter/material.dart';

import 'package:carryout/utils/api.dart';
import 'package:carryout/utils/strapi.dart';

import 'package:carryout/widgets/home/HomeAppBarWidget.dart';
import 'package:carryout/widgets/home/CardWidget.dart';
import 'package:carryout/widgets/common/StateWidget.dart';

import 'package:carryout/models/menuItem.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Column(
          children: <Widget>[
            AppBarWidget(
              username: 'Dhruv',
              img: "${API.baseURL}/uploads/avatar_cc865a4043.png",
            ),
            SizedBox(
              height: 15,
            ),
            FutureBuilder(
              future: Strapi.find('menus'),
              builder: __menuItemsBuilder,
            ),
          ],
        ),
      ),
    );
  }
}

Widget __menuItemsBuilder(BuildContext context, AsyncSnapshot snapshot) {
  if (snapshot.hasError) {
    return ErrorBlobWidget(error: snapshot.error);
  }

  if (snapshot.connectionState != ConnectionState.done) {
    return LoadingBlobWidget();
  }

  if (!snapshot.hasData) {
    return NothingBlobWidget();
  }

  List<MenuItem> items = [];
  snapshot.data.forEach((item) {
    items.add(new MenuItem.fromJson(item));
  });
  return Expanded(
    child: MediaQuery.removePadding(
      removeTop: true,
      context: context,
      child: ListView.builder(
        physics: BouncingScrollPhysics(),
        itemCount: items.length,
        itemBuilder: (context, index) {
          return CardWidget(
            item: items[index],
          );
        },
      ),
    ),
  );
}
