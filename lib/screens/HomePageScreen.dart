import 'package:carryout/theme.dart';
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

import 'package:carryout/models/menu.dart';
import 'package:carryout/widgets/home/HomeAppBarWidget.dart';
import 'package:carryout/widgets/home/CardWidget.dart';

// import 'package:carryout/models/menuItem.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Future<List> getMenu() async {
    var response = await Dio().get('http://192.168.1.3:1337/menus/');

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
    final data = snapshot.data;
    return Expanded(
      child: ClipRRect(
        borderRadius: BorderRadius.circular(25),
        child: MediaQuery.removePadding(
          removeTop: true,
          context: context,
          child: ListView.builder(
            physics: BouncingScrollPhysics(),
            itemCount: data.length,
            itemBuilder: (context, index) {
              return CardWidget(
                item: menuItems[index],
              );
            },
          ),
        ),
      ),
    );
  } else {
    return CircularProgressIndicator(
      backgroundColor: AppTheme.colors.accent,
    );
  }
}
