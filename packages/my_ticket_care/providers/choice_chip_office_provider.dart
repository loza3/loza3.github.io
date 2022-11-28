import 'package:flutter/material.dart';

class ChoiceChipOfficeProvider extends ChangeNotifier {
  int _currentIndex = 0;
  int get index => _currentIndex;

  void changeIndex(int idx) {
    if (idx != _currentIndex) {
      _currentIndex = idx;
      notifyListeners();
    }
  }
}
