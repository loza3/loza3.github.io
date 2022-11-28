import '../../../models/model_state.dart';

class Service {
  late int serviceId;
  late String serviceName;
  late ModelState serviceState = ModelState.active;
  late int companyTypeId;

  Service({
    required this.serviceId,
    required this.serviceName,
    required this.serviceState,
    required this.companyTypeId,
  });

  factory Service.fromMap(Map<String, dynamic> map) {
    return Service(
      serviceId: map['serviceId'] ?? -1,
      serviceName: map['serviceName'] ?? "Null",
      serviceState: ModelState.values[map['serviceState'] ?? 0],
      companyTypeId: map['companyTypeId'] ?? -1,
    );
  }

  factory Service.empty() {
    return Service(
        serviceId: -1,
        serviceName: "Null",
        serviceState: ModelState.active,
        companyTypeId: -1);
  }

  static List<Service> listFromMap(List<dynamic> data) {
    return data.map((e) => Service.fromMap(e)).toList();
  }
}
