import 'package:flutter/widgets.dart';

import '../../shared/models/models.dart';

class BookingStateProvider extends ChangeNotifier {
  /// Almacena los datos de la reserva
  /// Tales como, office, service, time, etc.

  Office selectedOffice = Office.empty();
  Employee selectedEmployee = Employee.empty();
  Service selectedService = Service.empty();
  Workday selectedWorkday = Workday.empty();
  Offer selectedOffer = Offer.empty();
  int selectedClientId = -1;

  void setOffice(Office office) {
    selectedOffice = office;
    notifyListeners();
  }

  void setEmployee(Employee employee) {
    selectedEmployee = employee;
    notifyListeners();
  }

  void setService(Service service) {
    selectedService = service;
    notifyListeners();
  }

  void setWorkday(Workday workday) {
    selectedWorkday = workday;
    notifyListeners();
  }

  void setClientId(int id) {
    selectedClientId = id;
    notifyListeners();
  }

  void setOffer(Offer offer) {
    selectedOffer = offer;
    notifyListeners();
  }
}
