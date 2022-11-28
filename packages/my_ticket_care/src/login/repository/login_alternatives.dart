import 'dart:convert';
import 'dart:developer';

import 'package:flutter/services.dart';
import 'package:flutter_facebook_auth/flutter_facebook_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';
import 'package:my_ticket_care/src/shared/shared_constants/shared_url.dart';
import 'package:my_ticket_care/src/shared/shared_utilities/token_manager.dart';

import '../../shared/models/person.dart';
import '../../shared/shared_utilities/base_repository.dart';

abstract class LoginAlternativeRepository {
  /// Obtiene facebook_id a través del login con Facebook
  Future<Person> signInFacebook(String email, String fbId, String fbToken);

  /// Luego de signInFacebook, se verifica si existe alguna
  /// persona con el mismo facebook_id
  Future<bool> emailIsRegisted(String email);

  /// Post con la información del usuario a MyTicket
  Future<Person> registerFacebook(Person person, String fbId, String fbToken);

  Future<Person> signInGoogle(String email, String token);

  Future<Person> registerGoogle(Person person, String googleToken);
}

class LoginAlternativeRepositoryHttp extends BaseRepository
    implements LoginAlternativeRepository {
  @override
  Future<bool> emailIsRegisted(String email) async {
    Map<String, String> header = Map.from(jsonHeader);
    header.addAll({'Email': email});

    final response = await fetch(
      Uri.parse("${urlMyTicket}Auth/accountexist"),
      headers: header,
    );

    return (response.data == "true") ? true : false;
  }

  @override
  Future<Person> signInFacebook(
      String email, String fbId, String fbToken) async {
    Map<String, dynamic> body = {
      "facebookToken": fbToken,
      "faceboofUserid": fbId,
      "userEmail": email
    };
    final response = await post(
      Uri.parse("${urlLogin}Login/facebooklogin"),
      headers: jsonHeader,
      body: jsonEncode(body),
    );

    TokenManager(token: response.data["token"]);
    return Person.fromMap(response.data["person"]);
  }

  @override
  Future<Person> registerFacebook(
    Person person,
    String fbId,
    String fbToken,
  ) async {
    person.birthday = DateFormat("yyyy-MM-dd").format(
      DateFormat("dd/MM/yyyy").parse(person.birthday),
    );
    Map body = {
      "facebookToken": fbToken,
      "faceboofUserid": fbId,
      "userEmail": person.email,
      "person": person.toMap(),
    };
    ResponseAPI response = await post(
      Uri.parse("${urlLogin}Login/facebooklogin"),
      headers: jsonHeader,
      body: jsonEncode(body),
    );

    Map data = response.data;

    Person user = Person.fromMap(data["person"]);
    TokenManager(token: data["token"]);

    user.facebookProfilePic = person.facebookProfilePic;
    user.facebookId = person.facebookId;
    return user;
  }

  @override
  Future<Person> signInGoogle(String email, String token) async {
    Map<String, dynamic> body = {"userEmail": email, "googleToken": token};
    final response = await post(
      Uri.parse("${urlLogin}Login/googlelogin"),
      headers: jsonHeader,
      body: jsonEncode(body),
    );

    TokenManager(token: response.data["token"]);
    return Person.fromMap(response.data["person"]);
  }

  @override
  Future<Person> registerGoogle(Person person, String googleToken) async {
    person.birthday = DateFormat("yyyy-MM-dd").format(
      DateFormat("dd/MM/yyyy").parse(person.birthday),
    );
    Map body = {
      "googleToken": googleToken,
      "userEmail": person.email,
      "person": person.toMap(),
    };

    ResponseAPI response = await post(
      Uri.parse("${urlLogin}Login/googlelogin"),
      headers: jsonHeader,
      body: jsonEncode(body),
    );

    Map data = response.data;

    Person user = Person.fromMap(data["person"]);
    TokenManager(token: data["token"]);

    return user;
  }
}

class GoogleSignInApi {
  static final _googleSignIn = GoogleSignIn(
    scopes: [
      'email',
    ],
  );
  Future<GoogleSignInAccount?> login() async {
    try {
      await _googleSignIn.signOut();
      return await _googleSignIn.signIn();
    } catch (error, _) {
      return null;
    }
  }
}

Future<Person?> getFacebookData() async {
  LoginResult loginResult;
  try {
    loginResult = await FacebookAuth.i.login(permissions: [
      "public_profile",
      "email",
      "user_birthday",
      "user_gender"
    ]);
  } on PlatformException catch (error, _) {
    return null;
  }
  if (loginResult.accessToken == null) {
    return null;
  }

  Map<String, dynamic> data = await FacebookAuth.i
      .getUserData(fields: "name,email,picture.width(200),birthday,gender");

  return Person.fromFacebookMap(data);
}
