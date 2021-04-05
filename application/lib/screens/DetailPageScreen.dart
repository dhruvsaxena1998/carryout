import 'package:carryout/widgets/detail/DetailsFooterWidget.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:carryout/theme.dart';

import 'package:carryout/widgets/detail/ImageCardWidget.dart';
import 'package:carryout/widgets/detail/FoodItemWidget.dart';

import 'package:carryout/models/Menu.dart';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:carryout/screens/Detail/cubit/detail_cubit.dart';

class DetailPageScreen extends StatelessWidget {
  const DetailPageScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocProvider<DetailCubit>(
      create: (context) => DetailCubit(),
      child: Container(
        child: _DetailPage(),
      ),
    );
  }
}

class _DetailPage extends StatelessWidget {
  final Menu item = Get.arguments;

  @override
  Widget build(BuildContext context) {
    BlocProvider.of<DetailCubit>(context)
        .init(defaults: item.defaults, optional: item.optional);
    return Scaffold(
      bottomNavigationBar: DetailsFooterWidget(price: item.price),
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: BlocBuilder<DetailCubit, DetailState>(
          builder: (context, state) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                ImageCardWidget(item: item),
                _listBuilder(
                  context: context,
                  title: 'Items',
                  list: state.defaults,
                ),
                _listBuilder(
                  context: context,
                  title: 'Optional',
                  list: state.optional,
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}

Widget _listBuilder({
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
                  index: index,
                  title: title,
                );
              },
            ),
          ),
        ),
      ],
    ),
  );
}
