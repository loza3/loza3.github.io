import 'dart:convert';
import 'dart:developer';

import 'package:my_ticket_care/models/model_state.dart';

double _fixLatitude(double c) {
  if (c < -90 || c > 90) {
    log("Oficina con latitud invalida");
    c = -17.783711518311975;
  }
  return c;
}

double _fixLongitude(double c) {
  if (c < -90 || c > 90) {
    log("Oficina con longitud invalida");
    c = -63.180371041273325;
  }
  return c;
}

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
  String companyName;
  String companyLogo;
  Office({
    required this.officeId,
    required this.officeName,
    required this.country,
    required this.city,
    required this.address,
    required this.geoRefLatitude,
    required this.geoRefLongitude,
    required this.officeState,
    required this.companyId,
    required this.companyName,
    required this.companyLogo,
  });

  factory Office.fromMap(Map<String, dynamic> map) {
    Map<String, dynamic> mapCompany = map["company"] ?? {};

    return Office(
      officeId: map['officeId'] ?? -1,
      officeName: map['officeName'] ?? 'Null',
      country: map['country'] ?? 'Null',
      city: map['city'] ?? 'Null',
      address: map['address'] ?? 'Null',
      geoRefLatitude: _fixLatitude(map['geoRefLatitude'] ?? 20.0),
      geoRefLongitude: _fixLongitude(map['geoRefLongitude'] ?? 20.0),
      officeState: ModelState.values[map['officeState']],
      companyId: mapCompany['companyId'] ?? -1,
      companyName: mapCompany['companyName'] ?? 'Null',
      companyLogo: mapCompany['companyLogo'] ?? 'Null',
    );
  }

  factory Office.fromJson(String source) => Office.fromMap(json.decode(source));

  factory Office.empty() {
    return Office(
      officeId: -1,
      officeName: "Null",
      country: "Null",
      city: "Null",
      address: "Null",
      geoRefLatitude: -17.783711518311975,
      geoRefLongitude: -63.180371041273325,
      officeState: ModelState.active,
      companyId: -1,
      companyName: "Null",
      companyLogo: "https://cdn-icons-png.flaticon.com/512/172/172802.png",
    );
  }

  static List<Office> listFromMap(List<dynamic> data) {
    return data.map((e) => Office.fromMap(e)).toList();
  }
}
