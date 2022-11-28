import 'dart:convert';

import 'model_state.dart';

class Employee {
  int employeeId;
  ModelState employeeState;
  int role;
  int companyId;
  String personName;
  String email;
  String mobile;
  String birthDate;
  int sex;

  String companyName;

  List<String>? specialities;

  Employee({
    required this.employeeId,
    required this.employeeState,
    required this.role,
    required this.companyId,
    required this.personName,
    required this.email,
    required this.mobile,
    required this.birthDate,
    required this.sex,
    required this.companyName,
    this.specialities,
  });

  factory Employee.fromMap(Map<String, dynamic> map) {
    Map<String, dynamic> personMap = map["person"] ?? {};
    Map<String, dynamic> companyMap = map["company"] ?? {};

    return Employee(
      employeeId: map['employeeId'] ?? -1,
      employeeState: ModelState.values[map['employeeState'] ?? 0],
      role: map['role'] ?? -1,
      companyId: map['companyId'] ?? -1,
      personName: personMap['personName'] ?? 'Null',
      email: personMap['email'] ?? 'Null',
      mobile: personMap['mobile'] ?? 'Null',
      birthDate: personMap['birthDate'] ?? 'Null',
      sex: personMap['sex'] ?? 0,
      companyName: companyMap['companyName'] ?? 'Null',
    );
  }

  factory Employee.fromMapWithSpecialities(Map<String, dynamic> map) {
    return Employee(
      employeeId: map['employeeId'] ?? -1,
      employeeState: ModelState.values[map['employeeState'] ?? 0],
      role: map['role'] ?? -1,
      companyId: map['companyId'] ?? -1,
      personName: map['name'] ?? 'Null',
      email: map['email'] ?? 'Null',
      mobile: map['mobile'] ?? 'Null',
      birthDate: map['birthDate'] ?? 'Null',
      sex: map['sex'] ?? -1,
      companyName: map['companyName'] ?? 'Null',
      specialities: List<String>.from(
        (map["especialities"] ?? []).map((e) => e["especialityName"]),
      ),
    );
  }

  factory Employee.empty() {
    return Employee(
      employeeId: -1,
      employeeState: ModelState.active,
      role: -1,
      companyId: -1,
      personName: "Person",
      email: "Null",
      mobile: "Null",
      birthDate: "2001-01-01",
      sex: 0,
      companyName: "Null",
    );
  }

  factory Employee.fromJson(String source) =>
      Employee.fromMap(json.decode(source));

  static List<Employee> listFromMap(List<dynamic> data) {
    return data.map((e) => Employee.fromMap(e)).toList();
  }
}
