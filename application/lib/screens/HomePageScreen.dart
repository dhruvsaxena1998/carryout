import 'package:flutter/material.dart';

import 'package:carryout/utils/strapi.dart';

import 'package:carryout/widgets/home/HomeAppBarWidget.dart';
import 'package:carryout/widgets/home/CardWidget.dart';
import 'package:carryout/widgets/common/StateWidget.dart';

import 'package:carryout/models/menuItem.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Column(
          children: <Widget>[
            AppBarWidget(
              username: 'Julia',
              img: 'https://i.imgur.com/AB85UCe.jpg',
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
    child: ClipRRect(
      borderRadius: BorderRadius.circular(25),
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
    ),
  );
}
