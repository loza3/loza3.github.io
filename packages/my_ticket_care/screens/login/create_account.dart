import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:cool_alert/cool_alert.dart';

import 'package:my_ticket_care/services/login/login_api.dart';
import 'package:my_ticket_care/reusable/reusable.dart';

import '../../models/models.dart';

class CreateAccountScreen extends StatefulWidget {
  const CreateAccountScreen({Key? key}) : super(key: key);

  @override
  State<CreateAccountScreen> createState() => _CreateAccountScreenState();
}

class _CreateAccountScreenState extends State<CreateAccountScreen> {
  bool isSelectMasculino = false;
  bool isSelectFemenino = false;
  bool isValidGender = false;
  bool isValidTime = false;
  bool isValid = false;

  DateTime _dateTime = DateTime.now();
  String name = '';
  String email = '';
  String password = '';
  int sex = 0;
  String phone = '';

  final GlobalKey<FormState> _key = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    final titleStyle = Theme.of(context)
        .textTheme
        .headline4!
        .copyWith(color: colorScheme.onBackground);
    return Scaffold(
      body: AuthBackground(
        child: SingleChildScrollView(
          child: Column(
            children: [
              const SizedBox(
                height: 120,
              ),
              CardContainer(
                child: Column(
                  children: [
                    Text(
                      'Crear cuenta',
                      style: titleStyle,
                    ),
                    Form(
                      key: _key,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          _inputsPerson(),
                          Text(
                            'Genero',
                            style: Theme.of(context).textTheme.headline6,
                          ),
                          _genderWidget(colorScheme),
                          if (isValidGender &&
                              !(isSelectFemenino || isSelectMasculino))
                            const Text(
                              'Seleccione un genero',
                              style: TextStyle(color: Colors.red),
                            ),
                          Padding(
                            padding: const EdgeInsets.only(top: 10),
                            child: Text(
                              'Fecha de Nacimiento',
                              style: Theme.of(context).textTheme.headline6,
                            ),
                          ),
                          _birthDateWidget(colorScheme),
                          if (isValidTime)
                            const Text(
                              'Mayor a 18 años',
                              style: TextStyle(color: Colors.red),
                            ),
                          _buttonCreate(colorScheme),
                          _buttonGoBack(colorScheme, context),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Center _buttonCreate(ColorScheme colorScheme) {
    return Center(
      child: Container(
          margin: const EdgeInsets.only(top: 10),
          width: 220,
          child: ElevatedButton(
            style:
                ElevatedButton.styleFrom(backgroundColor: colorScheme.primary),
            onPressed: () async {
              if (!(_key.currentState?.validate() ?? false) ||
                  !isValidGender ||
                  isValidTime) {
                setState(() {
                  isValidGender = true;
                  if (_dateTime.year > 2004) {
                    isValidTime = true;
                  } else {
                    isValidTime = false;
                  }
                });
              } else {
                Person person = Person(
                    personId: 0,
                    personName: name,
                    email: email,
                    mobile: phone,
                    birthDate: _dateTime,
                    sex: 1);
                setState(() {
                  isValid = true;
                });
                final masterResponse =
                    await MyTicketLogin().createPerson(person, "create");
                setState(() {
                  isValid = false;
                });
                if (masterResponse.status == 200) {
                  CoolAlert.show(
                    context: context,
                    type: CoolAlertType.success,
                    text: masterResponse.message,
                    backgroundColor: colorScheme.primary,
                    onConfirmBtnTap: () =>
                        Navigator.pushReplacementNamed(context, 'login_screen'),
                  );
                } else {
                  CoolAlert.show(
                      context: context,
                      type: CoolAlertType.error,
                      text: masterResponse.message,
                      backgroundColor: AppColors.primaryColor,
                      onConfirmBtnTap: () => Navigator.pop(context));
                }
              }
            },
            child: isValid
                ? Row(children: const [
                    CircularProgressIndicator(
                      color: Colors.white,
                    ),
                    SizedBox(
                      width: 24,
                    ),
                    Text('Please Wait...')
                  ])
                : const Text('Crear cuenta',
                    style: TextStyle(fontSize: 20, color: Colors.white)),
          )),
    );
  }

  Column _inputsPerson() {
    return Column(
      children: [
        CustomTextFormField(
          hintText: '',
          labelText: 'Nombre completo',
          icon: Icons.people,
          keyboardType: TextInputType.name,
          onChanged: (value) => name = value,
          validator: Validator.validatorName,
        ),
        CustomTextFormField(
          hintText: 'example@gmail.com',
          labelText: 'Email',
          icon: Icons.email_outlined,
          keyboardType: TextInputType.emailAddress,
          onChanged: (value) => email = value,
          validator: Validator.validatorEmail,
        ),
        CustomTextFormField(
          hintText: '73155648',
          labelText: 'Telefono',
          icon: Icons.numbers_outlined,
          keyboardType: TextInputType.phone,
          onChanged: (value) => phone = value,
          validator: Validator.validatorPhoneNumer,
        ),
      ],
    );
  }

  Container _birthDateWidget(ColorScheme colorScheme) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 10),
      decoration: BoxDecoration(
          color: Colors.black26, borderRadius: BorderRadius.circular(10)),
      child: ListTile(
        title: Text(
          DateFormat('dd-MM-yyyy').format(_dateTime),
          style: const TextStyle(fontSize: 20),
        ),
        trailing: const Icon(Icons.calendar_month_outlined),
        onTap: () => _showDatePicker(),
      ),
    );
  }

  Row _genderWidget(ColorScheme colorScheme) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Checkbox(
            activeColor: colorScheme.primary,
            value: isSelectMasculino,
            onChanged: (value) => setState(() {
                  isSelectMasculino = value ?? false;
                  isSelectFemenino = false;
                  isValidGender = false;
                  sex = 0;
                  if (!(isSelectFemenino && isSelectMasculino)) {
                    isValidGender = true;
                  }
                })),
        GestureDetector(
            onTap: () => setState(() {
                  isSelectMasculino = true;
                  isSelectFemenino = false;
                  isValidGender = false;
                  sex = 0;
                }),
            child: const Text('Masculino')),
        const SizedBox(
          width: 20,
        ),
        Checkbox(
            value: isSelectFemenino,
            activeColor: colorScheme.primary,
            onChanged: (value) => setState(() {
                  isSelectFemenino = value ?? false;
                  isSelectMasculino = false;
                  isValidGender = false;
                  sex = 1;
                  if (!(isSelectFemenino && isSelectMasculino)) {
                    isValidGender = true;
                  }
                })),
        GestureDetector(
            onTap: () => setState(() {
                  isSelectFemenino = true;
                  isSelectMasculino = false;
                  isValidGender = false;
                  sex = 1;
                }),
            child: const Text('Femenino')),
      ],
    );
  }

  Center _buttonGoBack(ColorScheme colorScheme, BuildContext context) {
    return Center(
      child: Container(
        margin: const EdgeInsets.only(top: 10),
        child: ElevatedButton(
          style:
              ElevatedButton.styleFrom(backgroundColor: colorScheme.secondary),
          onPressed: () => Navigator.pop(context),
          child: const Text(
            'Volver',
            style: TextStyle(fontSize: 20, color: Colors.white),
          ),
        ),
      ),
    );
  }

  void _showDatePicker() {
    showDatePicker(
            context: context,
            initialDate: DateTime.now(),
            firstDate: DateTime(1925),
            lastDate: DateTime.now())
        .then((value) {
      setState(() {
        _dateTime = value ?? DateTime.now();
        if (_dateTime.year > 2004) {
          isValidTime = true;
        } else {
          isValidTime = false;
        }
      });
    });
  }
}
