import 'package:flutter/material.dart';

import 'package:carryout/theme.dart';
import 'package:carryout/utils/api.dart';
import 'package:carryout/widgets/common/PriceWidget.dart';
import 'package:carryout/models/Menu.dart';

class CardWidget extends StatelessWidget {
  final Menu item;
  final int index;
  final Function onTap;

  const CardWidget({
    Key key,
    this.item,
    this.index,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width - 30;

    return Card(
      color: AppTheme.colors.dark,
      elevation: 2,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(25)),
      margin: const EdgeInsets.only(bottom: 20, left: 10, right: 10),
      child: InkWell(
        onTap: onTap,
        customBorder:
            RoundedRectangleBorder(borderRadius: BorderRadius.circular(25)),
        child: Container(
          width: width,
          padding: const EdgeInsets.symmetric(
            vertical: 20,
            horizontal: 30,
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                width: width * 0.4,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          item.name,
                          maxLines: 3,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(
                            color: AppTheme.colors.white,
                            fontSize: width * 0.06,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        SizedBox(
                          height: 5,
                        ),
                        Text(
                          item.description,
                          style: TextStyle(
                            color: AppTheme.colors.light,
                            fontSize: 16,
                          ),
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 40,
                    ),
                    PriceWidget(price: item.price),
                  ],
                ),
              ),
              Hero(
                tag: "image-${item.id}",
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(width * 0.2),
                  child: Container(
                    width: width * 0.4,
                    height: width * 0.4,
                    child: Image.network(
                      "${API.public}${item.image.url}",
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
