import 'package:flutter/widgets.dart';

class SearchOptionsProvider extends ChangeNotifier {
  bool showAdvancedOptions = false;

  bool showOffices = true;
  bool showServices = true;
  bool showEmployees = true;

  bool seeMoreOffices = false;
  bool seeMoreServices = false;
  bool seeMoreEmployees = false;

  void toggleAdvancedOptions() {
    showAdvancedOptions = !showAdvancedOptions;

    notifyListeners();
  }

  void setShowOffices(bool val) {
    showOffices = val;
    notifyListeners();
  }

  void setShowServices(bool val) {
    showServices = val;
    notifyListeners();
  }

  void setShowEmployees(bool val) {
    showEmployees = val;
    notifyListeners();
  }

  void toggleSeeMoreOffices() {
    seeMoreEmployees = !seeMoreEmployees;
    notifyListeners();
  }

  void toggleSeeMoreServices() {
    seeMoreServices = !seeMoreServices;
    notifyListeners();
  }

  void toggleSeeMoreEmployees() {
    seeMoreEmployees = !seeMoreEmployees;
    notifyListeners();
  }
}
