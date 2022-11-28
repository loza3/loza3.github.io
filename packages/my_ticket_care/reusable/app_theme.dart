import 'package:flex_color_scheme/flex_color_scheme.dart';
import 'package:flutter/material.dart';

enum ThemeType { light, dark }

class AppTheme {
  late ThemeData _currentTheme;

  ThemeData get currentTheme {
    return _currentTheme;
  }

//  static Color primaryColor = Color.fromARGB(255, 8, 180, 202);
  static Color primaryColor = const Color.fromARGB(255, 33, 168, 209);

  static Color primaryDarkColor = const Color.fromARGB(255, 19, 73, 87);

  AppTheme({required ThemeType type}) {
    switch (type) {
      case ThemeType.light:
        _currentTheme = _lightThemeData();
        break;
      case ThemeType.dark:
        _currentTheme = _darkThemeData();
        break;
    }
  }
  static const blackText = Typography.blackCupertino;
  static const whiteText = Typography.whiteCupertino;

  static final ButtonStyle buttomStyle = ElevatedButton.styleFrom(
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.all(
        Radius.circular(8),
      ),
    ),
    padding: const EdgeInsets.all(15),
  );
  ThemeData _lightThemeData() {
    return FlexThemeData.light(
      textTheme: Typography.englishLike2018,
      colorScheme: SeedColorScheme.fromSeeds(
        primary: primaryColor,
        primaryKey: primaryColor,
      ),
    ).copyWith(
      elevatedButtonTheme: ElevatedButtonThemeData(style: buttomStyle),
    );
  }

  ThemeData _darkThemeData() {
    return FlexThemeData.dark(scheme: FlexScheme.aquaBlue).copyWith(
        textTheme: Typography.whiteCupertino,
        elevatedButtonTheme: ElevatedButtonThemeData(style: buttomStyle));
  }
}
