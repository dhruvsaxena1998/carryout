import 'package:flutter/material.dart';
import 'package:carryout/models/menu.dart';
import 'package:carryout/widgets/HomeAppBarWidget.dart';
import 'package:carryout/widgets/CardWidget.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);

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
            Expanded(
              // flex: 1,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(25),
                child: MediaQuery.removePadding(
                  removeTop: true,
                  context: context,
                  child: ListView.builder(
                    physics: BouncingScrollPhysics(),
                    itemCount: menuItems.length,
                    itemBuilder: (context, index) {
                      return CardWidget(
                        item: menuItems[index],
                      );
                    },
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
