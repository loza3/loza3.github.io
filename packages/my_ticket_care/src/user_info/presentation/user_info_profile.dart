import 'package:flutter/material.dart';
import 'package:flutter_facebook_auth/flutter_facebook_auth.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:my_ticket_care/src/login/presentation/splash_screen.dart';
import 'package:my_ticket_care/src/login/providers/user_data_provider.dart';
import 'package:my_ticket_care/src/shared/models/person.dart';

import '../../shared/shared_utilities/keep_logged_in.dart';

class UserInfoProfileScreen extends ConsumerWidget {
  const UserInfoProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final person = ref.watch(userDataProvider);
    return ListView(
      children: [
        const SizedBox(height: 20),
        (person.facebookProfilePic == null)
            ? const UserProfileIconWidget()
            : UserProfileFacebookWidget(image: person.facebookProfilePic!),
        UserInfoProfileTileWidget(
          title: "Nombre",
          subtitle: person.personName,
          iconData: Icons.person,
        ),
        UserInfoProfileTileWidget(
          title: "Correo electrónico",
          subtitle: person.email,
          iconData: Icons.email,
        ),
        UserInfoProfileTileWidget(
          title: "Teléfono",
          subtitle: person.mobile,
          iconData: Icons.phone,
        ),
        UserInfoProfileTileWidget(
          title: "Fecha de nacimiento",
          subtitle: person.birthday,
          iconData: Icons.cake,
        ),
        UserInfoProfileTileWidget(
          title: "Genero",
          subtitle: (person.sex == 0) ? "Masculino" : "Femenino",
          iconData: (person.sex == 0) ? Icons.male : Icons.female,
        ),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 15.0, horizontal: 40),
          child: ElevatedButton(
            onPressed: () async {
              if (person.authMethod == AuthMethod.facebook) {
                await FacebookAuth.i.logOut();
              }

              final googleSignIn = GoogleSignIn();

              bool isSignedIn = await googleSignIn.isSignedIn();
              if (isSignedIn) {
                await googleSignIn.disconnect();
                await googleSignIn.signOut();
              }
              logOutDeleteToken().then((_) {
                Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(
                        builder: (context) => const SplashScreen()));
                ref.read(userDataProvider.state).state = Person.empty();
              });
            },
            child: const Text("Cerrar sesión"),
          ),
        )
      ],
    );
  }
}

class UserInfoProfileTileWidget extends StatelessWidget {
  const UserInfoProfileTileWidget({
    required this.title,
    required this.subtitle,
    required this.iconData,
    Key? key,
  }) : super(key: key);

  final String title;
  final String subtitle;
  final IconData iconData;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Padding(
        padding: const EdgeInsets.only(top: 4),
        child: Icon(iconData),
      ),
      title: Text(title),
      subtitle: Text(subtitle),
    );
  }
}

class UserProfileIconWidget extends StatelessWidget {
  const UserProfileIconWidget({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Container(
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: colorScheme.primary,
      ),
      child: const Icon(
        Icons.person,
        size: 150,
        color: Colors.white,
      ),
    );
  }
}

class UserProfileFacebookWidget extends StatelessWidget {
  const UserProfileFacebookWidget({Key? key, required this.image})
      : super(key: key);

  final String image;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: ClipOval(
        child: SizedBox(
          height: 150,
          width: 150,
          child: Image.network(
            image,
            height: 150,
            width: 150,
            fit: BoxFit.fitHeight,
          ),
        ),
      ),
    );
  }
}
