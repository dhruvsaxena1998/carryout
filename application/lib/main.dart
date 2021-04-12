import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:redux/redux.dart';
import 'package:flutter_redux/flutter_redux.dart';

import 'package:carryout/redux/app_state.dart';
import 'package:carryout/redux/reducer.dart';

import 'package:carryout/screens/HomePageScreen.dart';

import 'package:carryout/theme.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final Store<AppState> _store = Store<AppState>(
    menuReducer,
    initialState: AppState(
      menus: [],
    ),
  );

  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
        statusBarIconBrightness: Brightness.light,
      ),
    );
    return StoreProvider(
      store: _store,
      child: MaterialApp(
        title: 'AdisCarryout',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: Colors.blue,
          accentColor: AppTheme.colors.black,
          visualDensity: VisualDensity.adaptivePlatformDensity,
          scaffoldBackgroundColor: AppTheme.colors.black,
          fontFamily: 'Avenir',
        ),
        home: HomePage(),
      ),
    );
  }
}
