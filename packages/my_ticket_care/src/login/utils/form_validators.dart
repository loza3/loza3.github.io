class Validator {
  static String? validatorName(String? value) {
    String pattern = r'^[a-zA-Z ]+$';
    RegExp regExp = RegExp(pattern);
    return regExp.hasMatch(value ?? '') ? null : 'Introduzca un nombre valido';
  }

  static String? validatorEmail(String? value) {
    String pattern =
        r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
    RegExp regExp = RegExp(pattern);
    return regExp.hasMatch(value ?? '') ? null : 'Introduce un email válido';
  }

  static String? validatorPhoneNumer(String? value) {
    String pattern = r'^[0-9]{8}$';
    RegExp regExp = RegExp(pattern);
    return regExp.hasMatch(value ?? '') ? null : 'Introduce un telefono valido';
  }

  static String? validatorPassword(String? value) {
    return value != null && value.length >= 3
        ? null
        : 'La contraseña debe ser mayor a 3 caracteres';
  }
}
