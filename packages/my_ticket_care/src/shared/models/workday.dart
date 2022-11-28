import 'dart:convert';

enum Days { lunes, martes, miercoles, jueves, viernes, sabado, domingo }

class Workday {
  int workdayId;
  DateTime date;
  Days day;
  bool isHoliday;
  bool isWorkday;
  String detailDay;
  int officeId;

  String get dateString {
    return "${date.day}/${date.month}/${date.year}";
  }

  Workday({
    required this.workdayId,
    required this.date,
    required this.day,
    required this.isHoliday,
    required this.isWorkday,
    required this.detailDay,
    required this.officeId,
  });

  factory Workday.fromMap(Map<String, dynamic> map) {
    return Workday(
      workdayId: map['workDayId'],
      date: DateTime.parse(map['date']),
      day: Days.values[map['day']],
      isHoliday: map['isHoliday'] ?? false,
      isWorkday: map['isWorkDay'] ?? false,
      detailDay: map['detailDay'] ?? '',
      officeId: map['officeId'],
    );
  }

  factory Workday.fromJson(String source) =>
      Workday.fromMap(json.decode(source));

  factory Workday.empty() {
    return Workday(
      workdayId: -1,
      date: DateTime.now(),
      day: Days.lunes,
      isHoliday: false,
      isWorkday: false,
      detailDay: "Null",
      officeId: -1,
    );
  }
}
