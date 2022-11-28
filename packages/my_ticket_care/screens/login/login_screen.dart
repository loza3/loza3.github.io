import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:cool_alert/cool_alert.dart';

import 'package:my_ticket_care/models/backend/person.dart';
import 'package:my_ticket_care/models/frontend/master_response.dart';
import 'package:my_ticket_care/services/login/login_api.dart';

import 'package:my_ticket_care/providers/providers.dart';
import 'package:my_ticket_care/reusable/reusable.dart';

import '../../models/frontend/validator.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context)
        .textTheme
        .headline4!
        .copyWith(color: Theme.of(context).colorScheme.onBackground);

    return Scaffold(
        body: AuthBackground(
            child: SingleChildScrollView(
      child: Column(children: [
        const SizedBox(height: 140),
        CardContainer(
            child: Column(
          children: [
            const SizedBox(
              height: 10,
            ),
            Text(
              'Iniciar sesión',
              style: theme,
            ),
            const SizedBox(
              height: 30,
            ),
            _LoginForm()
          ],
        )),
        const SizedBox(
          height: 30,
        ),
      ]),
    )));
  }
}

class _LoginForm extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final loginForm = Provider.of<LoginFormProvider>(context);

    return Form(
      key: loginForm.formKey,
      autovalidateMode: AutovalidateMode.onUserInteraction,
      child: Column(children: [
        CustomTextFormField(
          hintText: 'example@email.com',
          labelText: 'Email',
          icon: Icons.alternate_email_sharp,
          keyboardType: TextInputType.emailAddress,
          onChanged: (value) => loginForm.email = value,
          validator: Validator.validatorEmail,
        ),
        CustomTextFormField(
          hintText: '**********',
          labelText: 'Password',
          icon: Icons.lock_outline_sharp,
          keyboardType: TextInputType.emailAddress,
          obscureText: true,
          onChanged: (value) => loginForm.password = value,
          validator: Validator.validatorPassword,
        ),
        const SizedBox(
          height: 10,
        ),
        const _ForgotPassword(),
        const SizedBox(
          height: 20,
        ),
        _ButtonLoginForm(loginForm: loginForm),
        const SizedBox(
          height: 10,
        ),
        const _ButtonCrearCuenta(),
        const Divider(
          height: 30,
          thickness: 1,
          indent: 10,
          endIndent: 10,
          color: Colors.grey,
        ),
        const Text(
          'O iniciar sesión con:',
          style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold),
        ),
      ]),
    );
  }
}

class _ForgotPassword extends StatelessWidget {
  const _ForgotPassword({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.centerRight,
      child: Container(
        decoration: const BoxDecoration(
            border: Border(bottom: BorderSide(color: Colors.black, width: 1))),
        child: GestureDetector(
          onTap: () => Navigator.pushNamed(context, 'forgot_password_screen'),
          child: const Text(
            'Olvidaste tu contraseña',
            style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}

class _ButtonCrearCuenta extends StatelessWidget {
  const _ButtonCrearCuenta({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 200,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: Theme.of(context).colorScheme.secondary,
        ),
        onPressed: () => Navigator.pushNamed(context, 'create_account_screen'),
        child: Text(
          "Crear cuenta",
          style: TextStyle(color: Theme.of(context).colorScheme.onSecondary),
        ),
      ),
    );
  }
}

class _ButtonLoginForm extends StatelessWidget {
  final LoginFormProvider loginForm;
  final bool mounted = true;

  const _ButtonLoginForm({
    Key? key,
    required this.loginForm,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 200,
      child: ElevatedButton(
        onPressed: loginForm.isLoading
            ? null
            : () async {
                if (!loginForm.isValidForm()) return;

                FocusScope.of(context).unfocus();

                Person person = Person(
                    email: loginForm.email, password: loginForm.password);
                loginForm.isLoading = true;
                final MasterResponse masterResponse =
                    await MyTicketLogin().loginPerson(person);

                if (masterResponse.status == 101) {
                  loginForm.isLoading = false;
                  CoolAlert.show(
                      context: context,
                      type: CoolAlertType.error,
                      text: masterResponse.message,
                      backgroundColor: AppColors.primaryColor,
                      onConfirmBtnTap: () => Navigator.pop(context));
                } else {
                  loginForm.personResponse = masterResponse.data.person!;
                  if (!mounted) return;
                  loginForm.isLoading = false;
                  Navigator.pushReplacementNamed(context, 'main_screen');
                }
              },
        child: loginForm.isLoading
            ? Row(
                children: const [
                  CircularProgressIndicator(
                    color: Colors.white,
                  ),
                  SizedBox(
                    width: 24,
                  ),
                  Text('Please Wait...')
                ],
              )
            : Text(
                "Ingresar",
                style:
                    TextStyle(color: Theme.of(context).colorScheme.onPrimary),
              ),
      ),
    );
  }
}
