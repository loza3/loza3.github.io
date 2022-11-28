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
  Workday({
    required this.workdayId,
    required this.date,
    required this.day,
    required this.isHoliday,
    required this.isWorkday,
    required this.detailDay,
    required this.officeId,
  });

  Map<String, dynamic> toMap() {
    final result = <String, dynamic>{};

    result.addAll({'workDayId': workdayId});
    result.addAll({'date': date.toString()});
    result.addAll({'day': day.index});
    result.addAll({'isHoliday': isHoliday});
    result.addAll({'isWorkDay': isWorkday});
    result.addAll({'detailDay': detailDay});
    result.addAll({'officeId': officeId});

    return result;
  }

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

  String toJson() => json.encode(toMap());

  factory Workday.fromJson(String source) =>
      Workday.fromMap(json.decode(source));
}
