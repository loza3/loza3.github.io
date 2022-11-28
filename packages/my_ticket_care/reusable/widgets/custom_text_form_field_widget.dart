import 'package:flutter/material.dart';
import 'package:my_ticket_care/reusable/input_decorations.dart';

class CustomTextFormField extends StatelessWidget {
  final String hintText;
  final String labelText;
  final IconData icon;
  final bool? autocorrect;
  final bool? obscureText;
  final TextInputType keyboardType;
  final Function(String)? onChanged;
  final String? Function(String?)? validator;
  final void Function(String?)? onSaved;
  final TextEditingController? controller;
  final String? initialValue;
  final bool? enabled;

  const CustomTextFormField({
    Key? key,
    this.onChanged,
    this.hintText = "",
    required this.labelText,
    required this.icon,
    this.autocorrect,
    this.obscureText,
    this.validator,
    this.onSaved,
    this.controller,
    this.initialValue,
    this.enabled,
    required this.keyboardType,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: TextFormField(
        enabled: enabled,
        initialValue: initialValue,
        onSaved: onSaved,
        controller: controller,
        obscureText: obscureText ?? false,
        autocorrect: autocorrect ?? false,
        keyboardType: keyboardType,
        decoration: InputDecorations.authInputDecoration(
          hintText: "",
          labelText: labelText,
          prefixIcon: icon,
        ),
        onChanged: onChanged,
        validator: validator,
        autovalidateMode: AutovalidateMode.onUserInteraction,
      ),
    );
  }
}
