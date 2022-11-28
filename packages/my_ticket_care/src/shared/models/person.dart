import 'package:intl/intl.dart';

enum AuthMethod {
  normal,
  google,
  facebook,
}

class Person {
  int personId;
  String personName;
  int sex;
  String email;
  String mobile;
  String birthday;

  String? facebookId;
  String? facebookProfilePic;
  String? jwtToken;

  AuthMethod authMethod;

  Person({
    required this.personId,
    required this.personName,
    required this.birthday,
    required this.sex,
    required this.email,
    required this.mobile,
    this.facebookId,
    this.jwtToken,
    this.facebookProfilePic,
    this.authMethod = AuthMethod.normal,
  });

  static String changeFormat(String date) {
    // yyyy-MM-dd -> dd/MM/yyyy

    return DateFormat("dd/MM/yyyy")
        .format(DateFormat("yyyy-MM-dd").parse(date));
  }

  factory Person.fromMap(Map<String, dynamic> map) {
    return Person(
      personId: map['personId'] ?? -1,
      personName: map['personName'] ?? "Null",
      birthday: changeFormat(map["birthDate"] ?? "2000-01-01"),
      sex: map['sex'] ?? 0,
      email: map['email'] ?? 'Null',
      mobile: map['mobile'] ?? 'Null',
    );
  }

  factory Person.fromMapWithToken(Map<String, dynamic> map) {
    return Person(
      personId: map['personId'] ?? -1,
      personName: map['personName'] ?? "Null",
      birthday: map['birthday'] ?? "01/01/2000",
      sex: map['sex'] ?? 0,
      email: map['email'] ?? 'Null',
      mobile: map['mobile'] ?? 'Null',
      jwtToken: map['token'] ?? 'Null',
    );
  }

  factory Person.fromFacebookMap(Map<String, dynamic> map) {
    return Person(
      personId: -1,
      personName: map['name'] ?? '',
      email: map['email'] ?? '',
      birthday: map['birthday'] ?? '',
      sex: map['gender'] == 'male' ? 0 : 1,
      mobile: map['mobile'] ?? '',
      facebookId: map['id'] ?? '',
      facebookProfilePic: map['picture']['data']['url'],
      authMethod: AuthMethod.facebook,
    );
  }

  factory Person.empty() {
    return Person(
      personId: -1,
      personName: "",
      sex: 0,
      email: '',
      mobile: '',
      birthday: "01/01/2000",
      authMethod: AuthMethod.normal,
    );
  }

  Person copyWith({
    int? personId,
    String? personName,
    int? sex,
    String? email,
    String? mobile,
    String? birthday,
  }) {
    return Person(
      personId: personId ?? this.personId,
      personName: personName ?? this.personName,
      sex: sex ?? this.sex,
      email: email ?? this.email,
      mobile: mobile ?? this.mobile,
      birthday: birthday ?? this.birthday,
    );
  }

  Map toMap() {
    return {
      "personId": personId,
      "personName": personName,
      "birthDate": birthday,
      "sex": sex,
      "email": email,
      "mobile": mobile,
      "authMethod": authMethod.index,
    };
  }
}
