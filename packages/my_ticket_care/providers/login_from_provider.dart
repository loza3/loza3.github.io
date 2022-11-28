import 'package:flutter/material.dart';
import 'package:my_ticket_care/models/backend/person.dart';

class LoginFormProvider extends ChangeNotifier {
  String email = '';
  String password = '';
  bool _isLoading = false;

  Person _personResponse = Person();

  bool get isLoading => _isLoading;

  set isLoading(bool value) {
    _isLoading = value;
    notifyListeners();
  }

  Person get personResponse => _personResponse;

  set personResponse(Person person) {
    _personResponse = person;
    notifyListeners();
  }

  GlobalKey<FormState> formKey = GlobalKey<FormState>();

  bool isValidForm() => formKey.currentState?.validate() ?? false;
}
