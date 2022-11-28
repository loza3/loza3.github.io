import 'dart:convert';

class Offer {
  int offerId;
  int officeId;
  int serviceId;
  int employeeId;
  int workdayId;

  int timeId;

  String status;
  String stage;

  int clientId;

  String employeeName;
  String startTime;
  String endTime;

  Offer({
    required this.offerId,
    required this.officeId,
    required this.serviceId,
    required this.employeeId,
    required this.workdayId,
    required this.timeId,
    required this.status,
    required this.stage,
    required this.clientId,
    required this.employeeName,
    required this.startTime,
    required this.endTime,
  });

  Map<String, dynamic> toMap() {
    final result = <String, dynamic>{};

    result.addAll({'offerId': offerId});
    result.addAll({'officeId': officeId});
    result.addAll({'serviceId': serviceId});
    result.addAll({'employeeId': employeeId});
    result.addAll({'workDayId': workdayId});
    result.addAll({'timeId': timeId});
    result.addAll({'status': status});
    result.addAll({'stage': stage});
    result.addAll({'clientId': clientId});
    result.addAll({'startTime': startTime});
    result.addAll({'endTime': endTime});
    result.addAll({'employeeName': employeeName});

    return result;
  }

  factory Offer.fromMap(Map<String, dynamic> map) {
    return Offer(
        offerId: map['offerId'] ?? -1,
        officeId: map['officeId'] ?? -1,
        serviceId: map['serviceId'] ?? -1,
        employeeId: map['employeeId'] ?? -1,
        workdayId: map['workDayId'] ?? -1,
        timeId: map['timeId'] ?? -1,
        status: map['status'].toString(),
        stage: map['stage'].toString(),
        clientId: map['clientId'] ?? -1,
        startTime: map["time"]['startTime'] ?? "00:00",
        endTime: map["time"]['endTime'] ?? "00:00",
        employeeName: map['employeeName'] ?? "null");
  }

  String toJson() => json.encode(toMap());

  factory Offer.empty() {
    return Offer(
      offerId: -1,
      officeId: -1,
      serviceId: -1,
      employeeId: -1,
      workdayId: -1,
      timeId: -1,
      status: "",
      stage: "",
      clientId: -1,
      employeeName: "No elegido",
      startTime: "No elegido",
      endTime: "",
    );
  }

  factory Offer.fromJson(String source) => Offer.fromMap(json.decode(source));
}
