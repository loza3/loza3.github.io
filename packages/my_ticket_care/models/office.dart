import 'dart:convert';

import 'package:my_ticket_care/models/model_state.dart';

class Office {
  int officeId;
  String officeName;
  String country;
  String city;
  String address;
  double geoRefLatitude;
  double geoRefLongitude;
  ModelState officeState = ModelState.active;
  int companyId;
  String? companyName;
  String? companyLogo;
  Office({
    required this.officeId,
    required this.officeName,
    required this.country,
    required this.city,
    required this.address,
    required this.geoRefLatitude,
    required this.geoRefLongitude,
    required this.companyId,
    this.officeState = ModelState.active,
    this.companyName,
    this.companyLogo,
  });

  Map<String, dynamic> toMap() {
    final result = <String, dynamic>{};

    result.addAll({'officeId': officeId});
    result.addAll({'officeName': officeName});
    result.addAll({'country': country});
    result.addAll({'city': city});
    result.addAll({'address': address});
    result.addAll({'geoRefLatitude': geoRefLatitude});
    result.addAll({'geoRefLongitude': geoRefLongitude});
    result.addAll({'officeState': officeState.index});
    result.addAll({'companyId': companyId});

    if (companyName != null) {
      result.addAll({'companyName': companyName});
    }

    if (companyLogo != null) {
      result.addAll({'companyLogo': companyLogo});
    }
    return result;
  }

  factory Office.fromMap(Map<String, dynamic> map) {
    if (map["company"] == null) {
      map["company"] = {
        "companyId": map["companyId"],
        "companyLogo": "",
      };
    }

    if (!map["company"]["companyLogo"].toString().contains("http")) {
      map["company"]["companyLogo"] =
          "https://cdn-icons-png.flaticon.com/512/172/172802.png";
    }
    return Office(
      officeId: map['officeId'],
      officeName: map['officeName'] ?? '',
      country: map['country'] ?? '',
      city: map['city'] ?? '',
      address: map['address'] ?? '',
      geoRefLatitude: map['geoRefLatitude'],
      geoRefLongitude: map['geoRefLongitude'],
      officeState: ModelState.values[map['officeState']],
      companyId: map["company"]['companyId'],
      companyName: map["company"]['companyName'],
      companyLogo: map["company"]['companyLogo'],
    );
  }

  String toJson() => json.encode(toMap());

  factory Office.fromJson(String source) => Office.fromMap(json.decode(source));
}
