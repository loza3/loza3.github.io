import 'dart:convert';

import 'package:my_ticket_care/models/models.dart';

class Employee {
  late int employeeId;
  late ModelState employeeState;
  late int role;
  late int companyId;

  late String personName;
  late String email;
  late String mobile;
  late String birthDate;
  late int sex;

  late String companyName;

  List<String>? specialities;

  Employee(
      this.employeeId,
      this.employeeState,
      this.role,
      this.companyId,
      this.personName,
      this.email,
      this.mobile,
      this.birthDate,
      this.sex,
      this.companyName,
      {this.specialities = const []});

  Map<String, dynamic> toMap() {
    final result = <String, dynamic>{};

    result.addAll({'employeeId': employeeId});
    result.addAll({'employeeState': employeeState.index});
    result.addAll({'role': role});
    result.addAll({'companyId': companyId});
    result.addAll({'personName': personName});
    result.addAll({'email': email});
    result.addAll({'mobile': mobile});
    result.addAll({'birthDate': birthDate});
    result.addAll({'sex': sex});

    return result;
  }

  factory Employee.fromMap(Map<String, dynamic> map) {
    Map<String, dynamic> personMap = map["person"];
    Map<String, dynamic> companyMap = map["company"];
    return Employee(
      map['employeeId'] ?? -1,
      ModelState.values[map['employeeState']],
      map['role'] ?? -1,
      map['companyId'] ?? -1,
      personMap['personName'] ?? 'Null',
      personMap['email'] ?? 'Null',
      personMap['mobile'] ?? 'Null',
      personMap['birthDate'] ?? 'Null',
      personMap['sex'] ?? 0,
      companyMap['companyName'] ?? "Null",
    );
  }

  factory Employee.fromMapWithSpecialities(Map<String, dynamic> map) {
    List<dynamic> specialities = map["especialities"];

    List<String> specialitiesString =
        List<String>.from(specialities.map((e) => e["especialityName"]));
    return Employee(
        map['employeeId'] ?? -1,
        ModelState.values[0],
        map['role'] ?? -1,
        map['companyId'] ?? -1,
        map['name'] ?? 'Null',
        map['email'] ?? 'Null',
        map['mobile'] ?? 'Null',
        map['birthDate'] ?? 'Null',
        map['sex'] ?? 0,
        map['companyName'] ?? "Null",
        specialities: specialitiesString);
  }

  String toJson() => json.encode(toMap());

  factory Employee.fromJson(String source) =>
      Employee.fromMap(json.decode(source));

  factory Employee.empty() {
    return Employee(
      -1,
      ModelState.active,
      -1,
      -1,
      "No elegido",
      "",
      "",
      "",
      0,
      "",
    );
  }
}
