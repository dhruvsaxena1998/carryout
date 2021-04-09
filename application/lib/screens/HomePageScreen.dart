import 'package:carryout/utils/api.dart';
import 'package:flutter/material.dart';
import 'package:carryout/utils/server.dart';

import 'package:carryout/widgets/home/HomeAppBarWidget.dart';
import 'package:carryout/widgets/home/CardWidget.dart';
import 'package:carryout/widgets/common/StateWidget.dart';

import 'package:carryout/controllers/MenuController.dart';
import 'package:carryout/models/Menu.dart';
import 'package:get/get.dart';

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
              img: "${API.public}/uploads/avatar.jpg",
            ),
            SizedBox(
              height: 15,
            ),
            FutureBuilder(
              future: Server.find('menu', qs: {'populate': true}),
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

  List<Menu> items = [];
  snapshot.data.forEach((item) {
    items.add(new Menu.fromJson(item));
  });

  final MenuController menuController = Get.put(MenuController());
  menuController.init(items);

  return Expanded(
    child: MediaQuery.removePadding(
      removeTop: true,
      context: context,
      child: GetBuilder<MenuController>(
        builder: (_) {
          return ListView.builder(
            physics: BouncingScrollPhysics(),
            itemCount: _.menus.length,
            itemBuilder: (context, index) {
              return CardWidget(
                item: _.menus[index],
              );
            },
          );
        },
      ),
    ),
  );
}
