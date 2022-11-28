// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';
import 'package:my_ticket_care/screens/screens.dart';
import 'package:provider/provider.dart';

// import 'package:my_ticket_care/models/office.dart';
// import 'package:my_ticket_care/models/backend/service.dart';
import 'package:my_ticket_care/providers/providers.dart';
import 'package:my_ticket_care/reusable/widgets/unexpected_error.dart';
import 'package:my_ticket_care/screens/booking/select_company_screen.dart';

import '../../models/models.dart';
import '../../reusable/widgets/model_cards.dart';
import '../profiles/office_profile_screen.dart';

class SearchAllScreen extends StatelessWidget {
  const SearchAllScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final SearchProvider searchProvider = context.watch<SearchProvider>();

    if (searchProvider.nothingSearched) {
      return const NingunaBusquedaWidget();
    }
    if (searchProvider.loading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (searchProvider.noResults) {
      return const NoResultsFoundWidget();
    }
    if (searchProvider.errorOcurred) {
      return const UnexpectedError();
    }
    return ListView(
      children: [
        const SizedBox(
          height: 10,
        ),
        Align(
          alignment: Alignment.center,
          child: TextButton(
              onPressed: () =>
                  context.read<SearchOptionsProvider>().toggleAdvancedOptions(),
              child: const Text("Busqueda avanzada")),
        ),
        if (context.watch<SearchOptionsProvider>().showAdvancedOptions)
          const SearchOptionsWidget(),
        if (context.watch<SearchOptionsProvider>().showServices)
          Column(
            children: [
              ListModelCardWidget<Service>(
                itemCard: createServiceCard,
                items: searchProvider.serviceResults,
                title: "Especialidades & Servicios",
              )
            ],
          ),
        if (context.watch<SearchOptionsProvider>().showOffices)
          Column(
            children: [
              ListModelCardWidget<Office>(
                itemCard: createOfficeCard,
                items: searchProvider.officeResults,
                title: "Sucursales",
              )
            ],
          ),
        if (context.watch<SearchOptionsProvider>().showEmployees)
          Column(
            children: [
              ListModelCardWidget(
                itemCard: createEmployeeCard,
                items: searchProvider.employeeResults,
                title: "Empleados",
              )
            ],
          )
      ],
    );
  }
}

class NingunaBusquedaWidget extends StatelessWidget {
  const NingunaBusquedaWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.local_hospital,
            size: 50,
            color: Theme.of(context).primaryColor,
          ),
          Text(
            "Busca y reserva tu cita",
            style: Theme.of(context).textTheme.titleLarge,
          ),
          Text(
            "Con MyTicket.",
            style: Theme.of(context).textTheme.titleLarge,
          ),
        ],
      ),
    );
  }
}

class NoResultsFoundWidget extends StatelessWidget {
  const NoResultsFoundWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.search_off,
            size: 50,
            color: Theme.of(context).primaryColor,
          ),
          Text(
            "No se encontro ningun",
            style: Theme.of(context).textTheme.titleLarge,
          ),
          Text(
            "resultado.",
            style: Theme.of(context).textTheme.titleLarge,
          ),
        ],
      ),
    );
  }
}

class SearchListViewBuilder extends StatelessWidget {
  /// Es ListView.builder pero con los parametros physics, padding removido y shrinkWrap
  const SearchListViewBuilder(
      {Key? key, required this.itemBuilder, required this.itemCount})
      : super(key: key);

  final Widget Function(BuildContext, int) itemBuilder;
  final int itemCount;
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: itemCount,
      // physics: const NeverScrollableScrollPhysics(),
      padding: const EdgeInsets.only(top: 0),
      shrinkWrap: true,
      itemBuilder: itemBuilder,
    );
  }
}

class ListModelCardWidget<T> extends StatefulWidget {
  ListModelCardWidget(
      {Key? key,
      required this.title,
      required this.items,
      required this.itemCard})
      : super(key: key);

  bool showMore = false;
  final String title;
  final List<T> items;
  final Widget Function(T item) itemCard;

  @override
  State<ListModelCardWidget> createState() => _ListModelCardWidgetState<T>();
}

class _ListModelCardWidgetState<T> extends State<ListModelCardWidget> {
  @override
  Widget build(BuildContext context) {
    return widget.items.isNotEmpty
        ? Column(
            children: [
              Padding(
                padding: const EdgeInsets.only(left: 20, top: 10, bottom: 10),
                child: Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    widget.title,
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                ),
              ),
              SearchListViewBuilder(
                  itemBuilder: (context, idx) {
                    T item = widget.items[idx];

                    if (idx >= 3) {
                      return Visibility(
                        visible: widget.showMore,
                        child: widget.itemCard(
                          item,
                        ),
                      );
                    }
                    return widget.itemCard(
                      item,
                    );
                  },
                  itemCount: widget.items.length),
              widget.items.length > 3
                  ? TextButton(
                      onPressed: () {
                        widget.showMore = !widget.showMore;
                        setState(() {});
                      },
                      child: Text(widget.showMore ? "Ver menos" : "Ver mas"),
                    )
                  : Container(),
            ],
          )
        : Container();
  }
}

Widget createOfficeCard(dynamic office) {
  return OfficeCard(item: office, nextScreen: const OfficeProfileScreen());
}

Widget createServiceCard(dynamic service) {
  return ServiceCard(item: service, nextScreen: const SelectCompanyScreen());
}

Widget createEmployeeCard(dynamic office) {
  return SpecialistCard(
      item: office, nextScreen: const EmployeeProfileScreen());
}

class SearchOptionsWidget extends StatelessWidget {
  const SearchOptionsWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    bool showServices = context.watch<SearchOptionsProvider>().showServices;
    bool showOffices = context.watch<SearchOptionsProvider>().showOffices;
    bool showEmployees = context.watch<SearchOptionsProvider>().showEmployees;

    return Row(
      children: [
        Expanded(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Checkbox(
                  value: showServices,
                  onChanged: (val) {
                    context
                        .read<SearchOptionsProvider>()
                        .setShowServices(!showServices);
                  }),
              const Text("Servicios")
            ],
          ),
        ),
        Expanded(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Checkbox(
                  value: showOffices,
                  onChanged: (val) {
                    context
                        .read<SearchOptionsProvider>()
                        .setShowOffices(!showOffices);
                  }),
              const Text("Sucursales")
            ],
          ),
        ),
        Expanded(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Checkbox(
                  value: showEmployees,
                  onChanged: (val) {
                    context
                        .read<SearchOptionsProvider>()
                        .setShowEmployees(!showEmployees);
                  }),
              const Text("Empleados")
            ],
          ),
        )
      ],
    );
  }
}
