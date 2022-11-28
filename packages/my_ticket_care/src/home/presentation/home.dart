import 'package:flutter/material.dart';
import 'package:my_ticket_care/src/user_info/presentation/user_info_bookings.dart';

import '../../search/presentation/search_results.dart';
import '../../user_info/presentation/user_info_profile.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: PreferredSize(
          preferredSize:
              Size.fromHeight(MediaQuery.of(context).size.height * 0.09),
          child: AppBar(
            title: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: const [
                HomeTitleWidget(),
                SettingsButton(),
              ],
            ),
            automaticallyImplyLeading: false,
          ),
        ),
        bottomNavigationBar: const NavigationBarTab(),
        body: const TabBarView(
          children: [
            SearchResultsScreen(),
            UserInfoBookingsScreen(),
            UserInfoProfileScreen(),
          ],
        ),
      ),
    );
  }
}

class NavigationBarTab extends StatelessWidget {
  const NavigationBarTab({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;
    return Container(
      decoration: BoxDecoration(
        color: colorScheme.background,
        boxShadow: const [
          BoxShadow(
            color: Colors.black26,
            blurRadius: 5,
            offset: Offset(0, 0.5),
          )
        ],
      ),
      child: TabBar(
        labelColor: colorScheme.primary,
        unselectedLabelColor: colorScheme.secondary.withAlpha(135),
        labelStyle: Theme.of(context).textTheme.bodyLarge,
        tabs: const [
          Tab(height: 70, icon: Icon(Icons.search), text: "Buscar"),
          Tab(height: 70, icon: Icon(Icons.file_copy), text: "Reservas"),
          Tab(height: 70, icon: Icon(Icons.person), text: "Perfil"),
        ],
      ),
    );
  }
}

class SettingsButton extends StatelessWidget {
  const SettingsButton({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return IconButton(
        onPressed: () {},
        icon: const Icon(
          Icons.settings,
          size: 30,
        ));
  }
}

class HomeTitleWidget extends StatelessWidget {
  const HomeTitleWidget({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Icon(
          Icons.class_outlined,
          color: colorScheme.onPrimary,
          size: 33,
        ),
        const SizedBox(width: 10),
        Text(
          "My Ticket",
          style: Theme.of(context).textTheme.headline5!.copyWith(
                color: colorScheme.onPrimary,
                fontSize: 27,
              ),
        ),
      ],
    );
  }
}
