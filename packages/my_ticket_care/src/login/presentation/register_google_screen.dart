import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart';
import 'package:my_ticket_care/src/login/repository/login_alternatives.dart';

import '../../shared/models/person.dart';
import '../../shared/shared_utilities/form_related.dart';
import '../utils/form_validators.dart';
import 'widgets/background_widget.dart';
import 'widgets/login_card.dart';

class RegisterGoogleScreen extends StatefulWidget {
  const RegisterGoogleScreen({
    Key? key,
    required this.person,
    required this.token,
  }) : super(key: key);

  final Person person;
  final String token;
  @override
  State<RegisterGoogleScreen> createState() => _RegisterGoogleScreenState();
}

class _RegisterGoogleScreenState extends State<RegisterGoogleScreen> {
  Person userData = Person.empty();

  @override
  Widget build(BuildContext context) {
    userData = widget.person;

    final colorScheme = Theme.of(context).colorScheme;

    final titleStyle = Theme.of(context).textTheme.headline4!.copyWith(
          color: colorScheme.onBackground,
        );

    final subtitleStyle = Theme.of(context).textTheme.headline6;
    final infoStyle = Theme.of(context).textTheme.subtitle1!.copyWith(
          color: colorScheme.onBackground.withAlpha(150),
        );

    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: AuthBackground(
        child: LoginCard(
          margin: const EdgeInsets.only(top: 120),
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 20),
          children: [
            Text(
              "Inicio con Google",
              textAlign: TextAlign.center,
              style: titleStyle,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
            const SizedBox(height: 10),
            Text(
              "Verifica tu información para registrarte con MyTicket",
              textAlign: TextAlign.center,
              style: infoStyle,
            ),
            const SizedBox(height: 10),
            CustomTextFormField(
              enabled: false,
              initialValue: widget.person.email,
              hintText: 'example@gmail.com',
              labelText: 'Email',
              icon: Icons.email_outlined,
              keyboardType: TextInputType.emailAddress,
              validator: Validator.validatorEmail,
            ),
            CustomTextFormField(
              onChanged: (n) => userData.personName = n,
              hintText: '',
              initialValue: widget.person.personName,
              labelText: 'Nombre completo',
              icon: Icons.people,
              keyboardType: TextInputType.name,
              validator: Validator.validatorName,
            ),
            CustomTextFormField(
              onChanged: (m) => userData.mobile = m,
              initialValue: widget.person.mobile,
              hintText: '73155648',
              labelText: 'Telefono',
              icon: Icons.numbers_outlined,
              keyboardType: TextInputType.phone,
              validator: Validator.validatorPhoneNumer,
            ),
            Text(
              'Genero',
              style: subtitleStyle,
            ),
            GenderPickerWidget2(
              person: userData,
              initialValue: Gender.values[widget.person.sex],
            ),
            Text('Fecha de nacimiento', style: subtitleStyle),
            const SizedBox(height: 10),
            DatePickerWidget2(
              person: widget.person,
              initialDate:
                  DateFormat("dd/MM/yyyy").parse(widget.person.birthday),
            ),
            const SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    child: const Text("Volver"),
                  ),
                ),
                const SizedBox(width: 15),
                Expanded(
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: colorScheme.secondary,
                    ),
                    onPressed: () async {
                      final api = LoginAlternativeRepositoryHttp();

                      try {
                        await api.registerGoogle(userData, widget.token);
                      } catch (error, _) {
                        // TODO: Manejar excepción inicio sesión google
                      }
                    },
                    child: const Text("Crear"),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
