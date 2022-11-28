import 'package:flutter/material.dart';
import 'package:my_ticket_care/reusable/widgets/model_cards.dart';
import 'package:my_ticket_care/reusable/widgets/office_map_widget.dart';
import 'package:my_ticket_care/screens/booking/make_booking.dart';
import 'package:provider/provider.dart';

import '../../models/models.dart';
import '../../providers/providers.dart';

class OfficeProfileScreen extends StatelessWidget {
  const OfficeProfileScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    final Office selectedOffice =
        context.watch<MakeBookingProvider>().selectedOffice;
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            leading: IconButton(
              icon: const Icon(Icons.arrow_back),
              onPressed: () {
                context.read<ChoiceChipOfficeProvider>().changeIndex(0);
                Navigator.pop(context);
              },
            ),
            pinned: true,
            expandedHeight: 250,
            backgroundColor: colorScheme.primary,
            title: Text(selectedOffice.officeName),
            bottom: PreferredSize(
              preferredSize: const Size.fromHeight(20),
              child: Padding(
                padding: const EdgeInsets.only(top: 10, bottom: 8.0),
                child: Row(
                  children: [
                    const SizedBox(width: 10),
                    ChoiceChipNavigation(
                        label: "Información",
                        index: 0,
                        keyContext: ScrollKeys.key1),
                    const SizedBox(width: 10),
                    ChoiceChipNavigation(
                      label: "Ubicación",
                      index: 1,
                      keyContext: ScrollKeys.key2,
                    ),
                    const SizedBox(width: 10),
                    ChoiceChipNavigation(
                      label: "Servicios",
                      index: 2,
                      keyContext: ScrollKeys.key3,
                    )
                  ],
                ),
              ),
            ),
            flexibleSpace: FlexibleSpaceBar(
              background: Container(
                  color: colorScheme.primary,
                  padding: const EdgeInsets.only(top: 50),
                  child: Image.network(selectedOffice.companyLogo!)),
            ),
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 10),
              child: Text(
                "Información básica",
                key: ScrollKeys.key1,
                style: Theme.of(context).textTheme.titleLarge,
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: OfficeInformationCard(
              title: "Sucursal",
              body:
                  "${selectedOffice.officeName}, ${selectedOffice.companyName!}",
            ),
          ),
          SliverToBoxAdapter(
              child: OfficeInformationCard(
                  title: "Dirección", body: selectedOffice.address)),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 10),
              child: Text(
                "Ubicación",
                key: ScrollKeys.key2,
                style: Theme.of(context).textTheme.titleLarge,
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 15),
              height: 400,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
              ),
              child: OfficeMapWidget(
                  office: selectedOffice, onTap: (position, _) {}),
            ),
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 10),
              child: Text(
                "Servicios",
                key: ScrollKeys.key3,
                style: Theme.of(context).textTheme.titleLarge,
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 5),
              child: Text(
                "Elige un servicio para reservar en este sucursal",
                style: Theme.of(context).textTheme.bodyLarge,
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: SizedBox(
              child: FutureBuilder(
                  future: context
                      .read<SearchProvider>()
                      .searchServicesByOffice(selectedOffice.officeId),
                  builder: (context, snapshot) {
                    if (snapshot.hasData &&
                        snapshot.connectionState == ConnectionState.done) {
                      List<Service> services = snapshot.data as List<Service>;

                      return ListView.builder(
                        physics: const NeverScrollableScrollPhysics(),
                        shrinkWrap: true,
                        itemCount: services.length,
                        itemBuilder: (context, index) {
                          return ServiceCard(
                            item: services[index],
                            nextScreen: MakeBookingScreen(
                              officeId: context
                                  .read<MakeBookingProvider>()
                                  .selectedOffice
                                  .officeId,
                            ),
                          );
                        },
                      );
                    }
                    if (snapshot.hasError) {
                      return const Center(child: Text("Error"));
                    }
                    return const Center(
                      child: CircularProgressIndicator(),
                    );
                  }),
            ),
          ),
          SliverToBoxAdapter(
            child: SizedBox.fromSize(
              size: const Size.fromHeight(100),
            ),
          ),
        ],
      ),
    );
  }
}

class ScrollKeys {
  static final key1 = GlobalKey();
  static final key2 = GlobalKey();
  static final key3 = GlobalKey();
}

class ChoiceChipNavigation extends StatelessWidget {
  const ChoiceChipNavigation(
      {super.key,
      required this.label,
      required this.index,
      required this.keyContext});

  final String label;
  final int index;
  final GlobalKey keyContext;
  @override
  Widget build(BuildContext context) {
    bool isSelected = context.watch<ChoiceChipOfficeProvider>().index == index;

    return ChoiceChip(
      label: Text(label),
      selected: isSelected,
      selectedColor: Theme.of(context).colorScheme.secondary,
      labelStyle: isSelected ? const TextStyle(color: Colors.white) : null,
      onSelected: (value) {
        context.read<ChoiceChipOfficeProvider>().changeIndex(index);

        Scrollable.ensureVisible(keyContext.currentContext!,
            duration: const Duration(seconds: 1));
      },
    );
  }
}

class OfficeInformationCard extends StatelessWidget {
  const OfficeInformationCard(
      {Key? key, required this.title, required this.body})
      : super(key: key);

  final String title, body;

  final TextStyle titleStyle = const TextStyle(
    fontSize: 19,
    color: Colors.black45,
    fontWeight: FontWeight.bold,
  );

  final TextStyle bodyStyle = const TextStyle(
    fontSize: 18,
    color: Colors.black,
  );

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 15),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: titleStyle),
            Text(body, style: bodyStyle),
          ],
        ),
      ),
    );
  }
}
