import 'package:flutter/material.dart';
import '../models/models.dart';

class MakeBookingProvider extends ChangeNotifier {
  late Office selectedOffice;
  late int companyId;
  late Service selectedService;
  late Employee selectedEmployee = Employee.empty();
  late Workday selectedWorkday;
  late Offer selectedOffer = Offer.empty();
  late Person user;

  bool dateWasSelected = false;

  void setUser(Person user) {
    user = Person(personName: "Sergio Loza", birthDate: DateTime(2002, 1, 18));
  }

  DateTime selectedDate = DateTime.now();

  String get selectedDateString {
    return "${selectedDate.day}/${selectedDate.month}/${selectedDate.year}";
  }

  void setOffice(Office office) {
    selectedOffice = office;
  }

  void setService(Service service) {
    selectedService = service;
  }

  void setEmployee(Employee employee) {
    selectedEmployee = employee;
  }

  void setNewDate(DateTime newDate) {
    selectedDate = newDate;
  }

  Future<void> showDatePickerProvider(
      BuildContext context, List<Workday> workdays) async {
    workdays = workdays.where((day) => day.isWorkday).toList();

    Set<String> availableDates = workdays.map((e) => e.date.toString()).toSet();
    final DateTime? picked = await showDatePicker(
        context: context,
        selectableDayPredicate: (date) {
          String dateString = "${date}Z";

          return availableDates.contains(dateString);
        },
        initialDate: workdays.first.date,
        firstDate: DateTime(2022, 10),
        lastDate: DateTime(2101));

    if (picked != null && picked != selectedDate) {
      selectedDate = picked;

      selectedWorkday =
          workdays.firstWhere((day) => day.date.toString() == "${picked}Z");
      dateWasSelected = true;
      notifyListeners();
    }
  }

  String horario = "";
  String encargado = "";

  String employeeName = "";
  String startTime = "";
  String endTime = "";

  int employeeIndex = -1;
  int offerIndex = -1;
  void setEmployeeName(String name) {
    employeeName = name;
    notifyListeners();
  }

  void setStartTime(String time) {
    startTime = time;
    notifyListeners();
  }

  void setEndTime(String time) {
    endTime = time;
    notifyListeners();
  }

  void setOffer(Offer offer) {
    selectedOffer = offer;
    notifyListeners();
  }
}
