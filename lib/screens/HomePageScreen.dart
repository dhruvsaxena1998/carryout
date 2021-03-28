import 'package:carryout/theme.dart';
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

import 'package:carryout/utils/api.dart';

import 'package:carryout/widgets/home/HomeAppBarWidget.dart';
import 'package:carryout/widgets/home/CardWidget.dart';

import 'package:carryout/models/menuItem.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Future<List> getMenu() async {
    var response = await Dio().get("${API.baseURL}${API.collections.menu}");
    debugPrint("[Request: GET] -> ${API.baseURL}${API.collections.menu}");
    return response.data;
  }

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
              future: getMenu(),
              builder: __menuItemsBuilder,
            ),
          ],
        ),
      ),
    );
  }
}

Widget __menuItemsBuilder(context, snapshot) {
  if (snapshot.connectionState == ConnectionState.done) {
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
  } else {
    return Expanded(
      flex: 1,
      child: Center(
        child: CircularProgressIndicator(
          backgroundColor: AppTheme.colors.accent,
        ),
      ),
    );
  }
}
