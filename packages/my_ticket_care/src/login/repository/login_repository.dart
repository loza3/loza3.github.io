import 'dart:convert';

import 'package:http/http.dart' as http;

import '../../shared/models/person.dart';
import '../../shared/shared_constants/shared_url.dart';
import '../../shared/shared_utilities/base_repository.dart';
import '../../shared/shared_utilities/token_manager.dart';

abstract class LoginRepository {
  Future<Person> registerPerson(Person person);

  Future<Person> loginPerson(String email, String password);

  Future<Person> getUserInformation(int userId, String token);
}

class LoginRepositoryHTTP extends BaseRepository implements LoginRepository {
  @override
  Future<Person> registerPerson(Person person) async {
    String token =
        "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmljYXJkb2FzaW4xQGdtYWlsLmNvbSIsImV4cCI6MTY3MjAyMDgyM30.icVEE3YC_8_C7lW_mYup5FzPz00Gdlq8pQYwQykvXpuXtm5HU-eRNrVEMdxUW3npzTw8QEIJK4wOiieIgtjt7g";

    Map<String, String> header = Map.from(jsonHeader);
    header.addAll({"token": token});
    final response = await post(
      Uri.parse("${urlLogin}Login/register"),
      headers: header,
      body: jsonEncode(
        person.toMap(),
      ),
    );

    Person newUser = Person.fromMap(response.data);
    return newUser;
  }

  @override
  Future<Person> loginPerson(String email, String password) async {
    ResponseAPI response = await post(
      Uri.parse("${urlLogin}Login/login"),
      headers: jsonHeader,
      body: jsonEncode({"email": email, "password": password}),
    );

    Map data = response.data;

    String token = data["token"];
    TokenManager(token: token);

    Person user = Person.fromMap(data["person"]);
    user.jwtToken = token;
    return user;
  }

  @override
  Future<Person> getUserInformation(int userId, String token) async {
    Map<String, String> header = Map.from(defaultHeader);
    header["token"] = token;
    header.addAll({"Personid": userId.toString()});
    http.Response response = await http.get(
      Uri.parse("$urlMyTicket/Person/getbypersonid"),
      headers: header,
    );

    return Person.fromMap(jsonDecode(response.body));
  }
}
