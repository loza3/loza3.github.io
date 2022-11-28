import 'package:flutter/material.dart';
import 'package:cool_alert/cool_alert.dart';
import 'package:my_ticket_care/models/models.dart';
import 'package:my_ticket_care/reusable/reusable.dart';
import 'package:my_ticket_care/services/login/login_api.dart';

class ForgotPasswordScreen extends StatelessWidget {
  const ForgotPasswordScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final key = GlobalKey<FormState>();
    String email = '';

    return Scaffold(
      appBar: AppBar(
        title: const Text('Recuperar tu cuenta'),
        centerTitle: true,
      ),
      body: SizedBox(
        width: double.infinity,
        child: Column(
          children: [
            const SizedBox(
              height: 80,
            ),
            const Text(
              'Ingresa tu correo',
              style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
            ),
            const SizedBox(
              height: 20,
            ),
            SizedBox(
              width: 300,
              child: Form(
                key: key,
                child: Column(
                  children: [
                    CustomTextFormField(
                      hintText: 'example@gmail.com',
                      labelText: 'Email',
                      icon: Icons.email,
                      keyboardType: TextInputType.emailAddress,
                      onChanged: (value) => email = value,
                      validator: Validator.validatorEmail,
                    ),
                    const SizedBox(
                      height: 30,
                    ),
                    ElevatedButton(
                        onPressed: () async {
                          if (key.currentState?.validate() ?? false) {
                            final person = Person(email: email);
                            final masterResponse =
                                await MyTicketLogin().forgotPassword(person);

                            if (masterResponse.status == 200) {
                              CoolAlert.show(
                                context: context,
                                type: CoolAlertType.success,
                                text: masterResponse.message,
                                backgroundColor: Colors.blue,
                                onConfirmBtnTap: () =>
                                    Navigator.pushReplacementNamed(
                                        context, 'login_screen'),
                              );
                            } else {
                              CoolAlert.show(
                                context: context,
                                type: CoolAlertType.error,
                                text: masterResponse.message,
                                backgroundColor: Colors.blue,
                                onConfirmBtnTap: () => Navigator.pop(context),
                              );
                            }
                          }
                        },
                        child: const Text(
                          'Recuperar',
                          style: TextStyle(
                              fontSize: 20, fontWeight: FontWeight.bold),
                        ))
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
