import 'package:flutter/material.dart';

import 'package:flutter_redux/flutter_redux.dart';
import 'package:carryout/redux/app_state.dart';
import 'package:carryout/redux/actions.dart';

import 'package:carryout/utils/api.dart';
import 'package:carryout/utils/server.dart';

import 'package:carryout/models/Menu.dart';

import 'package:carryout/screens/DetailPageScreen.dart';

import 'package:carryout/widgets/home/HomeAppBarWidget.dart';
import 'package:carryout/widgets/home/CardWidget.dart';
import 'package:carryout/widgets/common/StateWidget.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Column(
          children: <Widget>[
            HomeAppBarWidget(
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
  if (snapshot.hasError) return ErrorBlobWidget(error: snapshot.error);

  if (snapshot.connectionState != ConnectionState.done)
    return LoadingBlobWidget();

  if (!snapshot.hasData) return NothingBlobWidget();

  List<Menu> items = [];
  snapshot.data.forEach((item) {
    items.add(new Menu.fromJson(item));
  });
  StoreProvider.of<AppState>(context).dispatch(
    InitMenuAction(
      menus: items,
    ),
  );

  return Expanded(
    child: MediaQuery.removePadding(
      removeTop: true,
      context: context,
      child: StoreConnector<AppState, List<Menu>>(
        converter: (store) => store.state.menus,
        builder: (context, List<Menu> vm) => ListView.builder(
          physics: BouncingScrollPhysics(),
          itemCount: vm.length,
          itemBuilder: (context, index) {
            return CardWidget(
              item: vm[index],
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => DetailPageScreen(
                      index: index,
                    ),
                  ),
                );
              },
            );
          },
        ),
      ),
    ),
  );
}
