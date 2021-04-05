import 'package:flutter/material.dart';

import 'package:carryout/theme.dart';
import 'package:carryout/utils/api.dart';
import 'package:carryout/models/Menu.dart';

class ImageCardWidget extends StatelessWidget {
  final Menu item;
  const ImageCardWidget({Key key, @required this.item}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width - 30;
    return Card(
      elevation: 1,
      color: AppTheme.colors.dark,
      margin: const EdgeInsets.only(top: 50),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(25),
      ),
      child: Container(
        width: width,
        padding: const EdgeInsets.all(10),
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
                    "${API.public}${item.image.url}",
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
    );
  }
}
