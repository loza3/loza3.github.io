import 'dart:convert';

class Offer {
  int offerId;
  int officeId;

  int serviceId;
  int employeeId;
  int workdayId;
  int timeId;
  int clientId;

  String status;
  String stage;

  String startTime;
  String endTime;

  Offer({
    required this.offerId,
    required this.officeId,
    required this.serviceId,
    required this.employeeId,
    required this.clientId,
    required this.workdayId,
    required this.timeId,
    required this.status,
    required this.stage,
    required this.startTime,
    required this.endTime,
  });

  factory Offer.fromMap(Map<String, dynamic> map) {
    return Offer(
      offerId: map['offerId'] ?? -1,
      officeId: map['officeId'] ?? -1,
      serviceId: map['serviceId'] ?? -1,
      employeeId: map['employeeId'] ?? -1,
      workdayId: map['workDayId'] ?? -1,
      timeId: map['timeId'] ?? -1,
      clientId: map['clientId'] ?? -1,
      status: map['status'].toString(),
      stage: map['stage'].toString(),
      startTime: map["time"]['startTime'] ?? "00:00",
      endTime: map["time"]['endTime'] ?? "00:00",
    );
  }

  factory Offer.fromMapPut(Map<String, dynamic> map) {
    return Offer(
      offerId: map['offerId'] ?? -1,
      officeId: map['officeId'] ?? -1,
      serviceId: map['serviceId'] ?? -1,
      employeeId: map['employeeId'] ?? -1,
      workdayId: map['workDayId'] ?? -1,
      timeId: map['timeId'] ?? -1,
      clientId: map['clientId'] ?? -1,
      status: map['status'].toString(),
      stage: map['stage'].toString(),
      startTime: "00:00",
      endTime: "00:00",
    );
  }

  factory Offer.empty() {
    return Offer(
      offerId: -1,
      officeId: -1,
      serviceId: -1,
      employeeId: -1,
      clientId: -1,
      workdayId: -1,
      timeId: -1,
      status: "Null",
      stage: "Null",
      startTime: "00:00",
      endTime: "00:00",
    );
  }

  factory Offer.fromJson(String source) => Offer.fromMap(json.decode(source));
}
