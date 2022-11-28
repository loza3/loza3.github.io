import 'package:flutter/material.dart';
import 'package:flutter_signin_button/flutter_signin_button.dart';

class CustomSignInButton extends StatelessWidget {
  final Buttons buttons;
  final String buttonText;
  final Function onPressed;
  final EdgeInsets margin;
  const CustomSignInButton({
    Key? key,
    required this.buttons,
    required this.buttonText,
    required this.onPressed,
    required this.margin,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: margin,
      child: SignInButton(
        buttons,
        text: buttonText,
        onPressed: onPressed,
      ),
    );
  }
}
