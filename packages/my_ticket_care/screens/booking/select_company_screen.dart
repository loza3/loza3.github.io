import 'package:flutter/material.dart';
import 'package:my_ticket_care/screens/screens.dart';
import 'package:my_ticket_care/services/service_api.dart';
import 'package:provider/provider.dart';

import '../../models/models.dart';
import '../../providers/providers.dart';
import '../../reusable/widgets/model_cards.dart';

class SelectCompanyScreen extends StatelessWidget {
  const SelectCompanyScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: colorScheme.secondary,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: Text(
          "Mostrando sucursales",
          style: Theme.of(context)
              .textTheme
              .headline6!
              .copyWith(color: colorScheme.onPrimary),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.only(left: 15, right: 15, top: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "Que ofrecen: ${context.watch<MakeBookingProvider>().selectedService.serviceName}",
              style: Theme.of(context).textTheme.headline6,
            ),
            const SizedBox(
              height: 20,
            ),
            Expanded(
              child: FutureBuilder(
                future: ServiceAPI.getOfficesFromServiceId(context
                    .watch<MakeBookingProvider>()
                    .selectedService
                    .serviceId),
                builder: (context, snapshot) {
                  if (snapshot.hasData) {
                    List<Office> offices = snapshot.data as List<Office>;
                    return ListView.builder(
                      itemCount: offices.length,
                      itemBuilder: (context, index) {
                        return OfficeCard(
                          item: offices[index],
                          nextScreen: MakeBookingScreen(
                            officeId: offices[index].officeId,
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
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
