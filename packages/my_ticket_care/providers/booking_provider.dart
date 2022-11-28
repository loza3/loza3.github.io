import 'package:flutter/material.dart';

class BookingProvider extends ChangeNotifier {

  int _isSelectIndexService = 0;
  int _isSelectIndexOffert  = 0;
  bool _isSelectOffert = false;

  int get isSelectIndexService => _isSelectIndexService;
  set isSelectIndexService(int isSelectIndexService) {
    _isSelectIndexService = isSelectIndexService;
    notifyListeners();
  }

  int get isSelectIndexOffert => _isSelectIndexOffert;
  set isSelectIndexOffert(int isSelectIndexOffert) {
    _isSelectIndexOffert = isSelectIndexOffert;
    notifyListeners();
  }

  bool get isSelectOffert => _isSelectOffert;
  set isSelectOffert(bool isSelectOffert) {
    _isSelectOffert = isSelectOffert;
    notifyListeners();
  }
}