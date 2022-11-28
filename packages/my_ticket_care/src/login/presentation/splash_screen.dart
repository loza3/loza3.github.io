import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_ticket_care/src/home/presentation/home.dart';
import 'package:my_ticket_care/src/login/presentation/login_screen.dart';
import 'package:my_ticket_care/src/login/repository/login_repository.dart';
import 'package:my_ticket_care/src/shared/shared_utilities/keep_logged_in.dart';

import '../providers/user_data_provider.dart';

class SplashScreen extends ConsumerStatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends ConsumerState<SplashScreen> {
  String action = "";

  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      _checkUserIsLoggedIn();
    });
  }

  _checkUserIsLoggedIn() async {
    int? userId = await retrieveUserId();

    retrieveLoginToken().then((token) {
      if (token == null || userId == null) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => const LoginScreen(),
          ),
        );
        return;
      }

      action = "Iniciando sesión...";
      setState(() {});
      final api = LoginRepositoryHTTP();
      api.getUserInformation(userId, token).then((user) {
        ref.read(userDataProvider.state).state = user;
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => const HomeScreen(),
          ),
        );
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final titleStyle = TextStyle(
      fontSize: 40,
      color: colorScheme.background,
    );

    final actionStyle = TextStyle(
      fontSize: 25,
      color: colorScheme.background,
    );
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              colorScheme.primary,
              colorScheme.secondary,
            ],
          ),
        ),
        height: double.infinity,
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.class_outlined,
              color: colorScheme.background,
              size: 75,
            ),
            Text("MyTicket", style: titleStyle),
            Text(action, style: actionStyle),
          ],
        ),
      ),
    );
  }
}
