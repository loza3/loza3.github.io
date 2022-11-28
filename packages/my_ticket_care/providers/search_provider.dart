// import 'dart:developer';

import 'dart:developer';

import 'package:flutter/material.dart';
// import 'package:my_ticket_care/models/backend/service.dart';
// import 'package:my_ticket_care/models/employee_response.dart';
// import 'package:my_ticket_care/models/office.dart';

import '../models/models.dart';
import '../services/service_api.dart';

class SearchProvider extends ChangeNotifier {
  late List<Office> officeResults = [];
  late List<Service> serviceResults = [];
  late List<Employee> employeeResults = [];

  bool nothingSearched = true;
  bool errorOcurred = false;
  bool noResults = false;
  bool loading = false;

  Future<List<Service>> searchServices(String query) async {
    query = query.toLowerCase();
    serviceResults = await ServiceAPI.searchServicesCache();
    serviceResults = serviceResults
        .where((service) => service.serviceName.toLowerCase().contains(query))
        .toList();
    return serviceResults;
  }

  Future<List<Office>> searchOffices(String query) async {
    query = query.toLowerCase();
    officeResults = await ServiceAPI.searchOfficesCache();
    officeResults = officeResults
        .where((office) => office.officeName.toLowerCase().contains(query))
        .toList();
    return officeResults;
  }

  Future<List<Employee>> searchEmployees(String query) async {
    query = query.toLowerCase();
    employeeResults = await ServiceAPI.searchEmployeesCache();
    employeeResults = employeeResults
        .where((employee) => employee.personName.toLowerCase().contains(query))
        .toList();
    return employeeResults;
  }

  Future<List<Office>> searchOfficesByService(int serviceId) async {
    List<Office> offices = await ServiceAPI.searchOfficesCache();

    return offices;
  }

  Future<List<Service>> searchServicesByOffice(int officeId) async {
    List<Service> services = await ServiceAPI.getServicesFromOfficeId(officeId);
    return services;
  }

  void searchAllResults(String query) async {
    query = query.toLowerCase();

    if (query.isEmpty) {
      nothingSearched = true;
      notifyListeners();
      return;
    }

    nothingSearched = false;
    noResults = false;
    errorOcurred = false;
    loading = true;
    notifyListeners();

    try {
      serviceResults = await searchServices(query);
      officeResults = await searchOffices(query);
      employeeResults = await searchEmployees(query);
      errorOcurred = false;
    } catch (exception, stack) {
      // log(exception.toString());
      log(exception.toString());
      log(stack.toString());
      errorOcurred = true;
    }

    loading = false;

    if (serviceResults.isEmpty &&
        officeResults.isEmpty &&
        employeeResults.isEmpty) {
      noResults = true;
    }
    notifyListeners();
  }
}
