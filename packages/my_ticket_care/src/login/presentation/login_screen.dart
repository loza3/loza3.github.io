import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter_facebook_auth/flutter_facebook_auth.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_signin_button/flutter_signin_button.dart';
import 'package:my_ticket_care/reusable/widgets/custom_sign_in_button.dart';
import 'package:my_ticket_care/src/login/presentation/register_google_screen.dart';
import 'package:my_ticket_care/src/shared/shared_utilities/keep_logged_in.dart';
import 'package:my_ticket_care/src/shared/shared_widgets/loading_dialog.dart';

import '../../../reusable/widgets/custom_text_form_field_widget.dart';
import '../../home/presentation/home.dart';
import '../../shared/models/person.dart';
import '../providers/user_data_provider.dart';
import '../repository/login_alternatives.dart';
import '../repository/login_repository.dart';
import '../utils/form_validators.dart';
import 'register_facebook_screen.dart';
import 'widgets/background_widget.dart';
import 'widgets/login_buttons.dart';
import 'widgets/login_card.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;
    final titleStyle = Theme.of(context)
        .textTheme
        .headline4!
        .copyWith(color: colorScheme.onBackground);

    const loginWithStyle = TextStyle(fontSize: 15, fontWeight: FontWeight.bold);
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: AuthBackground(
        child: LoginCard(
          margin: const EdgeInsets.only(top: 120),
          children: [
            const SizedBox(height: 20),
            Text(
              "Iniciar sesión",
              textAlign: TextAlign.center,
              style: titleStyle,
            ),
            const SizedBox(height: 10),
            const LoginForm(),
            const KeepLoggedInWidget(),
            const ForgottenPassword(),
            const Divider(height: 30),
            const SizedBox(height: 20),
            const Text(
              'O iniciar sesión con:',
              textAlign: TextAlign.center,
              style: loginWithStyle,
            ),
            const SignUpGoogle(),
            const SignUpFacebook(),
            const SizedBox(height: 10),
          ],
        ),
      ),
    );
  }
}

class SignUpGoogle extends ConsumerWidget {
  const SignUpGoogle({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return CustomSignInButton(
        margin: const EdgeInsets.symmetric(horizontal: 20),
        buttons: Buttons.Google,
        buttonText: 'Iniciar con Google',
        onPressed: () async {
          final api = GoogleSignInApi();
          final account = await api.login();

          if (account == null) {
            return;
          }

          final auth = await account.authentication;
          final token = auth.idToken;

          if (token == null) {
            //TODO: Handle error
            return;
          }

          Person person = Person.empty();
          person.personName = account.displayName ?? "";
          person.email = account.email;
          person.authMethod = AuthMethod.google;
          final loginApi = LoginAlternativeRepositoryHttp();
          bool emailExists = await loginApi.emailIsRegisted(person.email);
          if (emailExists) {
            try {
              final user = await loginApi.signInGoogle(person.email, token);
              ref.read(userDataProvider.state).state = user;
            } catch (exception, _) {
              //TODO: Manejar error inicio sesión google
            }

            Future.delayed(Duration.zero).then((_) {
              Navigator.push(context,
                  MaterialPageRoute(builder: (a) => const HomeScreen()));
            });
          } else {
            Future.delayed(Duration.zero).then((_) {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (a) => RegisterGoogleScreen(
                    person: person,
                    token: token,
                  ),
                ),
              );
            });
          }
          final googleKey = await account.authentication;
          log(googleKey.idToken ?? "");
        });
  }

  Future signIn() async {}
}

class SignUpFacebook extends ConsumerWidget {
  const SignUpFacebook({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return CustomSignInButton(
        margin: const EdgeInsets.symmetric(horizontal: 20),
        buttons: Buttons.Facebook,
        buttonText: 'Iniciar con Facebook',
        onPressed: () async {
          Person? person = await getFacebookData();

          if (person == null) {
            return;
          }

          final token = await FacebookAuth.i.accessToken;

          final api = LoginAlternativeRepositoryHttp();
          bool emailExists = await api.emailIsRegisted(person.email);

          if (emailExists) {
            api
                .signInFacebook(person.email, person.facebookId!, token!.token)
                .then((user) {
              user.facebookId = person.facebookId;
              user.facebookProfilePic = person.facebookProfilePic;
              ref.read(userDataProvider.state).state = user;
              Navigator.push(context,
                  MaterialPageRoute(builder: (a) => const HomeScreen()));
            });
          } else {
            Future.delayed(Duration.zero).then((_) {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (a) => RegisterFacebookScreen(
                    person: person,
                    fbToken: token!.token,
                  ),
                ),
              );
            });
          }
        });
  }
}

class LoginForm extends StatefulWidget {
  const LoginForm({Key? key}) : super(key: key);

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();

  String email = "", password = "";

  final emailTextController = TextEditingController();
  final passwordTextController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Form(
      key: formKey,
      autovalidateMode: AutovalidateMode.onUserInteraction,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 30.0),
        child: Column(
          children: [
            CustomTextFormField(
              onChanged: (String? val) {
                email = val ?? "";
              },
              hintText: 'example@gmail.com',
              labelText: 'Email',
              icon: Icons.alternate_email,
              keyboardType: TextInputType.emailAddress,
              validator: Validator.validatorEmail,
            ),
            CustomTextFormField(
              onChanged: (String? val) {
                password = val ?? "";
              },
              hintText: '********',
              labelText: 'Contraseña',
              icon: Icons.lock_outline_sharp,
              keyboardType: TextInputType.visiblePassword,
              obscureText: true,
              validator: Validator.validatorPassword,
            ),
            const SizedBox(height: 10),
            Row(
              children: [
                Expanded(
                  child: Consumer(builder: loginButtonPress),
                ),
                const SizedBox(width: 10),
                const Expanded(
                  child: RegisterButton(),
                )
              ],
            )
          ],
        ),
      ),
    );
  }

  Widget loginButtonPress(BuildContext context, WidgetRef ref, Widget? child) {
    return LoginButton(
      onPressed: () async {
        if (!(formKey.currentState?.validate() ?? false)) {
          return;
        }

        final api = LoginRepositoryHTTP();

        showLoadingDialog(context);

        try {
          await api.loginPerson(email, password).then((user) {
            Navigator.pop(context);

            final keepLoggedIn = ref.watch(keepLoggedInProvider);

            if (keepLoggedIn) {
              storeLoginToken(user.jwtToken!, user.personId);
            }

            // email, password -> Informacion del usuario (nombre)
            ref.read(userDataProvider.state).state = user;

            passwordTextController.clear();
            Navigator.push(context,
                MaterialPageRoute(builder: (context) => const HomeScreen()));
          });
        } catch (error, _) {
          print("HOLa");
          Navigator.pop(context);
        }
      },
    );
  }
}

final keepLoggedInProvider = StateProvider<bool>((ref) => false);

class KeepLoggedInWidget extends ConsumerStatefulWidget {
  const KeepLoggedInWidget({Key? key}) : super(key: key);

  @override
  ConsumerState<KeepLoggedInWidget> createState() => _KeepLoggedInWidgetState();
}

class _KeepLoggedInWidgetState extends ConsumerState<KeepLoggedInWidget> {
  bool keepSession = false;
  @override
  Widget build(BuildContext context) {
    const titleStyle = TextStyle(
      fontSize: 15,
    );

    return Padding(
      padding: const EdgeInsets.only(left: 25),
      child: CheckboxListTile(
        onChanged: (value) {
          // TODO: Falta testing en ciertos casos
          if (value == null) return;

          ref.read(keepLoggedInProvider.state).state = value;
          keepSession = value;
          setState(() {});
        },
        value: keepSession,
        visualDensity: VisualDensity.compact,
        contentPadding: EdgeInsets.zero,
        dense: true,
        controlAffinity: ListTileControlAffinity.leading,
        title: const Text("Mantener sesión iniciada", style: titleStyle),
      ),
    );
  }
}
