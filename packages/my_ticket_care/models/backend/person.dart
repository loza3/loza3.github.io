import 'dart:convert';

Person personFromJson(String str) => Person.fromJson(json.decode(str));

String? personLoginToJson          (Person data)  => json.encode(data.toJsonLogin());
String? personForgotPasswordToJson (Person data)  => json.encode(data.toJsonForgotPassword());
String? personCreateToJson         (Person data)  => json.encode(data.toJson());

class Person {

  final int?      personId;
  final String?   personName;
  final DateTime? birthDate;
  final int?      sex;
  final String?   email;
  final String?   mobile;
  final String?   password;


  Person({
    this.personId,
    this.personName,
    this.birthDate,
    this.sex,
    this.email,
    this.mobile,
    this.password
  });

    

  factory Person.fromJson(Map<String, dynamic> json) => Person(
    personId   : json["personId"],
    personName : json["personName"],
    birthDate  : DateTime.parse(json["birthDate"]),
    sex        : json["sex"],
    email      : json["email"],
    mobile     : json["mobile"],
  );

  Map<String, String> toJsonForgotPassword() => {
    "email"    : email!
  };

  Map<String, String> toJsonLogin() => {
    "email"    : email!,
    "password" : password!
  };

  Map<String, dynamic> toJson() => {
    "personId"  : personId,
    "personName": personName,
    "birthDate" : "${birthDate!.year.toString().padLeft(4, '0')}-${birthDate!.month.toString().padLeft(2, '0')}-${birthDate!.day.toString().padLeft(2, '0')}",
    "sex"       : sex,
    "email"     : email,
    "mobile"    : mobile,
  };

}