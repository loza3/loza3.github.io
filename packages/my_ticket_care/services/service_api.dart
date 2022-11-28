import 'dart:convert';

import 'package:http/http.dart';
import 'package:my_ticket_care/services/cache_manager.dart';

import '../models/models.dart';

class ServiceAPI {
  static String baseBookingURL =
      "https://myticketbookingservice.azurewebsites.net/api/Booking/";

  static String baseManagingURL =
      "https://myticketmanagingservice.azurewebsites.net/api/";

  static String token =
      "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4uY29tIiwiZXhwIjoxNjY4NjQ0NTk4fQ.ynfM2hKL9HXvV2BLzMqZO1oSLIRodZtb0zw_puxK3pfCj-4JLpyzKEJAbWCs5pb-AQ88lGICMcLN-r1Ag0gDCA";

  static Map<String, String> defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
    'token': token,
  };
  static Future<List<Service>> searchServicesCache() async {
    String response = await CacheManager().getRequest(
      url: "${baseBookingURL}getservices",
      headers: defaultHeader,
    );
    // log(response);

    // List<Service> services = serviceListFromJson(response);
    // log('$services');

    List servicesJsonList = jsonDecode(response)["data"] as List;
    List<Service> services =
        servicesJsonList.map((e) => Service.fromMap(e)).toList();
    return services;
  }

  static Future<List<Office>> searchOfficesCache() async {
    String response = await CacheManager().getRequest(
      url: "${baseBookingURL}getoffices",
      headers: defaultHeader,
    );

    List officesJsonList = jsonDecode(response)["data"] as List;
    List<Office> offices =
        officesJsonList.map((e) => Office.fromMap(e)).toList();

    return offices;
  }

  static Future<List<Employee>> searchEmployeesCache() async {
    String response = await CacheManager().getRequest(
      url: "${baseBookingURL}getemployees",
      headers: defaultHeader,
    );

    List employeesJsonList = jsonDecode(response)["data"] as List;
    List<Employee> employees =
        employeesJsonList.map((e) => Employee.fromMap(e)).toList();

    return employees;
  }

  static Future<List<Workday>> getWorkdaysFromOfficeId(int officeId) async {
    Response response = await get(
      Uri.parse("https://myticketappservice.azurewebsites.net/api/WorkDay"),
      headers: defaultHeader,
    );

    String json = response.body;

    List workdaysJsonList = jsonDecode(json) as List;
    List<Workday> workdays =
        workdaysJsonList.map((e) => Workday.fromMap(e)).toList();

    return workdays.where((workday) => workday.officeId == officeId).toList();
  }

  static Future<List<Service>> getServicesFromOfficeId(int officeId) async {
    Map<String, String> header = Map.from(defaultHeader);
    header.addAll({"OfficeId": officeId.toString()});
    Response response = await get(
      Uri.parse(
          "https://myticketmanagingservice.azurewebsites.net/api/Office/GetServices"),
      headers: header,
    );

    String json = response.body;

    List servicesJsonList = jsonDecode(json)["data"]["services"] as List;
    List<Service> services =
        servicesJsonList.map((e) => Service.fromMap(e)).toList();

    return services;
  }

  static Future<List<Office>> getOfficesFromServiceId(int serviceId) async {
    Map<String, String> header = Map.from(defaultHeader);
    header.addAll({"ServiceId": serviceId.toString()});
    Response response = await get(
      Uri.parse(
          "https://myticketmanagingservice.azurewebsites.net/api/Service/GetOffices"),
      headers: header,
    );

    String json = response.body;
    List officesJsonList = jsonDecode(json)["data"]["offices"] as List;

    for (final office in officesJsonList) {
      Map companyInfo = await getCompanyById(office["companyId"]);
      office["company"] = companyInfo;
    }

    List<Office> offices =
        officesJsonList.map((e) => Office.fromMap(e)).toList();
    return offices;
  }

  static Future<List<Service>> getServicesFromEmployeeId(int employeeId) async {
    Map<String, String> header = Map.from(defaultHeader);
    header.addAll({"EmployeeId": employeeId.toString()});
    Response response = await get(
      Uri.parse(
          "https://myticketmanagingservice.azurewebsites.net/api/Employee/GetServices"),
      headers: header,
    );

    String json = response.body;

    List servicesJsonList = jsonDecode(json)["data"]["services"] as List;
    List<Service> services =
        servicesJsonList.map((e) => Service.fromMap(e)).toList();

    return services;
  }

  static Future<List<Offer>> getOffers(
      int serviceId, int officeId, int workdayId) async {
    Map<String, String> header = Map.from(defaultHeader);
    header.addAll({"ServiceId": serviceId.toString()});
    header.addAll({"OfficeId": officeId.toString()});
    header.addAll({"WorkDayId": workdayId.toString()});

    Response response = await get(
      Uri.parse("$baseBookingURL/getoffersbyofficeserviceworkdayid"),
      headers: header,
    );

    String json = response.body;

    try {
      List offersJsonList = jsonDecode(json)["data"] as List;
      List<Offer> offers = offersJsonList.map((e) => Offer.fromMap(e)).toList();
      return offers;
    } catch (error) {
      return [];
    }
  }

  static Future<Map> getCompanyById(int companyId) async {
    Map<String, String> header = Map.from(defaultHeader);
    header.addAll({"CompanyId": companyId.toString()});
    Response response = await get(
      Uri.parse("$baseBookingURL/Company/getbycompanyid"),
      headers: header,
    );

    String json = response.body;
    return jsonDecode(json)["data"];
  }

  static Future<Employee> getEmployeeById(int employeeId) async {
    Map<String, String> header = Map.from(defaultHeader);
    header.addAll({"Employeeid": employeeId.toString()});
    Response response = await get(
      Uri.parse("$baseManagingURL/Employee/GetEspecialities"),
      headers: header,
    );

    String json = response.body;

    return Employee.fromMapWithSpecialities(jsonDecode(json)["data"]);
  }
}
