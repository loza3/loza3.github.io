import 'package:flutter/material.dart';

import '../register_screen.dart';

class RegisterButton extends StatelessWidget {
  const RegisterButton({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: Theme.of(context).colorScheme.secondary,
        minimumSize: const Size.fromHeight(38),
        maximumSize: const Size.fromHeight(38),
        padding: EdgeInsets.zero,
      ),
      onPressed: () {
        Navigator.push(context,
            MaterialPageRoute(builder: (context) => const RegisterScreen()));
      },
      child: const Text("Registrarse", maxLines: 1),
    );
  }
}

class LoginButton extends StatelessWidget {
  const LoginButton({
    Key? key,
    required this.onPressed,
  }) : super(key: key);

  final Function()? onPressed;
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        minimumSize: const Size.fromHeight(38),
        maximumSize: const Size.fromHeight(38),
        padding: EdgeInsets.zero,
      ),
      onPressed: onPressed,
      child: const Text("Ingresar", maxLines: 1),
    );
  }
}

class ForgottenPassword extends StatelessWidget {
  const ForgottenPassword({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      padding: const EdgeInsets.only(top: 10),
      child: Container(
        decoration: const BoxDecoration(
            border: Border(
                bottom: BorderSide(
                    color: Color.fromARGB(255, 49, 49, 49), width: 1))),
        child: GestureDetector(
          onTap: () => Navigator.pushNamed(context, 'forgot_password_screen'),
          child: const Text(
            '¿Olvidaste tu contraseña?',
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.bold,
              color: Color.fromARGB(255, 49, 49, 49),
            ),
          ),
        ),
      ),
    );
  }
}
