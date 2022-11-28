import 'package:flutter/material.dart';

import 'package:my_ticket_care/models/frontend/menu_option.dart';
import 'package:my_ticket_care/screens/screens.dart';

class AppRoutes {
  static final menuOptions = <MenuOption>[
    MenuOption(route: 'my_bookings_screen', screen: const MyBookings()),
    MenuOption(route: 'main_screen', screen: MainScreen()),
    MenuOption(route: 'create_account_screen', screen: const CreateAccountScreen()),
    MenuOption(route: 'forgot_password_screen', screen: const ForgotPasswordScreen()),
    MenuOption(route: 'login_screen', screen: const LoginScreen()),
    MenuOption(route: 'client_profile_screen', screen: const ClientProfileScreen()),
    MenuOption(route: 'search_all_screen', screen: const SearchAllScreen()),
  ];

  static Map<String, Widget Function(BuildContext)> getRoutes() {
    Map<String, Widget Function(BuildContext)> routes = {};
    for (final option in menuOptions) {
      routes.addAll({option.route: (BuildContext context) => option.screen});
    }
    return routes;
  }
}
