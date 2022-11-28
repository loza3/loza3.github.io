// ignore_for_file: prefer_const_constructors, unused_import

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart' as pod;
import 'package:my_ticket_care/providers/navigation_booking_provider.dart';
import 'package:my_ticket_care/src/booking/presentation/reserve_booking.dart';
import 'package:my_ticket_care/src/login/presentation/login_screen.dart';
import 'package:provider/provider.dart';

import 'package:my_ticket_care/providers/providers.dart';
import 'package:my_ticket_care/reusable/reusable.dart';

import 'package:my_ticket_care/routes/app_routes.dart';

import 'src/booking/providers/booking_state.dart';
import 'src/home/presentation/home.dart';
import 'src/login/presentation/splash_screen.dart';

void main() {
  runApp(pod.ProviderScope(child: const AppState()));
}

class AppState extends StatelessWidget {
  const AppState({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<ClientProvider>(
          create: ((context) => ClientProvider()),
        ),
        ChangeNotifierProvider<SearchProvider>(
          create: ((context) => SearchProvider()),
        ),
        ChangeNotifierProvider<SearchOptionsProvider>(
          create: ((context) => SearchOptionsProvider()),
        ),
        ChangeNotifierProvider<NavigationBarProvider>(
          create: (context) => NavigationBarProvider(),
        ),
        ChangeNotifierProvider<MakeBookingProvider>(
          create: (context) => MakeBookingProvider(),
        ),
        ChangeNotifierProvider<NavigationBookingProvider>(
          create: (context) => NavigationBookingProvider(),
        ),
        ChangeNotifierProvider<LoginFormProvider>(
          create: (context) => LoginFormProvider(),
        ),
        ChangeNotifierProvider<BookingProvider>(
          create: (context) => BookingProvider(),
        ),
        ChangeNotifierProvider<ChoiceChipOfficeProvider>(
          create: (context) => ChoiceChipOfficeProvider(),
        ),
        ChangeNotifierProvider<BookingStateProvider>(
          create: (context) => BookingStateProvider(),
        )
      ],
      child: const MyApp(),
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    ThemeType themeType = ThemeType.light;

    AppTheme theme = AppTheme(type: themeType);

    return MaterialApp(
      title: 'My Ticket',
      debugShowCheckedModeBanner: false,
      home: SplashScreen(),
      routes: AppRoutes.getRoutes(),
      theme: theme.currentTheme,
    );
  }
}
