import 'package:flutter/material.dart';
import 'package:my_ticket_care/reusable/reusable.dart';
import 'package:provider/provider.dart';

import 'package:my_ticket_care/providers/providers.dart';

import 'package:my_ticket_care/screens/booking/my_bookings.dart';
import 'package:my_ticket_care/screens/profiles/client_profile_screen.dart';
import 'package:my_ticket_care/screens/search/search_all_screen.dart';

class MainScreen extends StatelessWidget {
  MainScreen({Key? key}) : super(key: key);

  final _screens = const <Widget>[
    SearchAllScreen(),
    MyBookings(),
    ClientProfileScreen(),
  ];

  final _appBarTitles = [
    "MyTicket - Busqueda",
    "MyTicket - Reservas",
    "MyTicket - Perfil"
  ];

  final _appBarSubtitle = [" ", "Mis reservas", "Mi perfil"];

  final TextEditingController searchController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(170),
        child: Container(
          height: 170,
          padding:
              const EdgeInsets.only(top: 30, bottom: 10, left: 25, right: 25),
          decoration: BoxDecoration(
            color: colorScheme.primary,
            borderRadius: BorderRadius.vertical(
              bottom: Radius.elliptical(MediaQuery.of(context).size.width, 15),
            ),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Icon(
                    Icons.class_outlined,
                    color: colorScheme.onPrimary,
                    size: 38,
                  ),
                  const SizedBox(width: 10),
                  Text(
                    _appBarTitles[context.watch<NavigationBarProvider>().index],
                    textAlign: TextAlign.left,
                    style: Theme.of(context)
                        .textTheme
                        .headline5!
                        .copyWith(color: colorScheme.onPrimary),
                  ),
                ],
              ),
              if (context.watch<NavigationBarProvider>().index == 0) ...[
                SearchBar(
                  onChanged: (query) {
                    context.read<SearchProvider>().searchAllResults(query);
                  },
                  searchController: searchController,
                ),
              ] else ...[
                Text(
                  _appBarSubtitle[context.watch<NavigationBarProvider>().index],
                  style: Theme.of(context)
                      .textTheme
                      .headline5!
                      .copyWith(color: colorScheme.background),
                )
              ]
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        selectedIconTheme: const IconThemeData(
          size: 29,
        ),
        currentIndex: context.watch<NavigationBarProvider>().index,
        onTap: (index) {
          context.read<NavigationBarProvider>().changeIndex(index);
          FocusManager.instance.primaryFocus?.unfocus();
        },
        items: const [
          BottomNavigationBarItem(
              icon: Icon(
                Icons.search,
              ),
              label: "Buscar"),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.file_copy,
              ),
              label: "Citas"),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.person,
              ),
              label: "Perfil")
        ],
      ),
      body: _screens[context.watch<NavigationBarProvider>().index],
    );
  }
}
