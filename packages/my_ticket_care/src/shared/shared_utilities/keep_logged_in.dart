import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

class KeepLoggedInToken {
  static const key = "user_token";
  static const userId = "user_id";
}

Future<String?> retrieveLoginToken() async {
  final prefs = await SharedPreferences.getInstance();

  String? token = prefs.getString(KeepLoggedInToken.key);

  if (token == null) {
    return null;
  }

  if (_tokenIsValid(token)) {
    return token;
  }
  return null;
}

Future<int?> retrieveUserId() async {
  final prefs = await SharedPreferences.getInstance();

  int? userId = prefs.getInt(KeepLoggedInToken.userId);

  if (userId == null) {
    return null;
  }

  return userId;
}

bool _tokenIsValid(String token) {
  String body;
  try {
    String body64 = token.split(".")[1];

    int paddingBase64 =
        (4 - body64.length % 4) * ((body64.length % 4 == 0) ? 0 : 1);

    body64 += "=" * paddingBase64;
    body = const Utf8Decoder().convert(base64.decode(body64));
  } catch (exception, _) {
    return false;
  }
  Map data = jsonDecode(body);
  DateTime expiration =
      DateTime.fromMillisecondsSinceEpoch(data["exp"] * 1000, isUtc: true);

  if (expiration.isAfter(DateTime.now().toUtc())) {
    return true;
  }
  return false;
}

Future<void> storeLoginToken(String token, int personId) async {
  final prefs = await SharedPreferences.getInstance();

  prefs.setString(KeepLoggedInToken.key, token);
  prefs.setInt(KeepLoggedInToken.userId, personId);
}

Future<void> logOutDeleteToken() async {
  final prefs = await SharedPreferences.getInstance();

  await prefs.remove(KeepLoggedInToken.key);
  await prefs.remove(KeepLoggedInToken.userId);
}
