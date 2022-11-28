import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'package:my_ticket_care/models/backend/person.dart';
import 'package:my_ticket_care/providers/providers.dart';
import 'package:my_ticket_care/reusable/reusable.dart';

class ClientProfileScreen extends StatelessWidget {
  const ClientProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: const LinearGradient(colors: [Color.fromARGB(255, 142, 214, 236),Color.fromARGB(255, 125, 221, 224)]),
        borderRadius: BorderRadius.circular(20)
      ),
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          _HeaderProfile(),
          _DataProfile(),
          _ButtonsProfile(),
        ],
      ),
    );
  }
}

class _HeaderProfile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(100),
      child: const FadeInImage(
        placeholder: NetworkImage(
            'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493booqfijeo0nq9lazn1lkw7qhimau25csi0df70g91&rid=200w.gif&ct=g'),
        image: NetworkImage(
            'https://i.pinimg.com/originals/66/9c/68/669c68af00d49891e2f3c78c539862da.png'),
        width: 200,
        height: 200,
        fit: BoxFit.cover,
      ),
    );
  }
}

class _DataProfile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Person person =
        Provider.of<LoginFormProvider>(context).personResponse;
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
      child: Column(
        children: [
          Text(
            '${person.personName}',
            style: const TextStyle(
                color: Colors.black, fontWeight: FontWeight.bold, fontSize: 30),
          ),
          const SizedBox(
            height: 10,
          ),
          Text('+591 ${person.mobile}',
              style: const TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.w500,
                  fontSize: 16)),
          const SizedBox(
            height: 10,
          ),
          Text(
            '${person.email}',
            style: AppFonts.titleh2.copyWith(
                color: const Color.fromARGB(255, 78, 78, 78), fontSize: 16),
          ),
          const SizedBox(
            height: 10,
          ),
          Text(
            "Sexo: ${person.sex == 0 ? 'Hombre' : 'Mujer'}",
            style: AppFonts.titleh1black.copyWith(fontSize: 20),
          ),
          const SizedBox(
            height: 30,
          ),
        ],
      ),
    );
  }
}

class _ButtonsProfile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        ElevatedButton(
          onPressed: () =>
              Navigator.pushReplacementNamed(context, 'login_screen'),
          style: ElevatedButton.styleFrom(
              backgroundColor: const Color.fromARGB(255, 58, 81, 214)),
          child: Text(
            "Editar Perfil",
            style: Theme.of(context).textTheme.subtitle1!.copyWith(
                  color: Colors.white,
                ),
          ),
        ),
        const SizedBox(
          width: 10,
        ),
        ElevatedButton(
          onPressed: () =>
              Navigator.pushReplacementNamed(context, 'login_screen'),
          style: ElevatedButton.styleFrom(
              backgroundColor: const Color.fromARGB(255, 201, 52, 52)),
          child: Text(
            "Cerrar Sesión",
            style: Theme.of(context).textTheme.subtitle1!.copyWith(
                  color: Colors.white,
                ),
          ),
        ),
      ],
    );
  }
}
