import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_ticket_care/models/test_data/booking_test_data.dart';

import '../../../reusable/container_cards.dart';

final showIncompleteBookings = StateProvider<bool>((ref) {
  return true;
});

final showCompletedBookings = StateProvider<bool>((ref) {
  return true;
});

final showCanceledBookings = StateProvider<bool>((ref) {
  return true;
});

class UserInfoBookingsScreen extends ConsumerWidget {
  const UserInfoBookingsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final titleStyle = Theme.of(context).textTheme.headline4!.copyWith(
          color: Colors.black,
        );
    return ListView(
      children: [
        const SizedBox(height: 15),
        Text(
          "Mis reservas",
          style: titleStyle,
          textAlign: TextAlign.center,
        ),
        const UserInfoBookingsCard(
          title: "Reservas: ",
          child: BookingFilterButtons(),
        ),
        if (ref.watch(showIncompleteBookings))
          const UserInfoBookingsCard(
            title: "En espera",
            child: IncompleteBookingsList(),
          ),
        if (ref.watch(showCompletedBookings))
          const UserInfoBookingsCard(
            title: "Completadas",
            child: Align(
                alignment: Alignment(-0.9, 0.5),
                child: Text("Ninguna reserva encontrada")),
          ),
        if (ref.watch(showCanceledBookings))
          const UserInfoBookingsCard(
            title: "Canceladas",
            child: Align(
                alignment: Alignment(-0.9, 0.5),
                child: Text("Ninguna reserva encontrada")),
          ),
      ],
    );
  }
}

class IncompleteBookingsList extends StatelessWidget {
  const IncompleteBookingsList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Map bookItem = listadoReservas[0];
    String serviceName = bookItem["serviceName"];
    String time = bookItem["time"];
    String specialistName = bookItem["specialistName"];
    String date = bookItem["date"];
    String companyName = bookItem["companyName"];
    return Column(
      children: [
        ContainersCards.cardsDecorations(
          context: context,
          hora: true,
          imagen: 'https://picsum.photos/300/301',
          titulo: serviceName,
          subtitulo: companyName,
          subtitulo2: specialistName,
          button1: date,
          button2: time,
          shadow: false,
        ),
        const Divider(thickness: 3),
        ContainersCards.cardsDecorations(
          context: context,
          hora: true,
          imagen: 'https://picsum.photos/300/300',
          titulo: serviceName,
          subtitulo: companyName,
          subtitulo2: specialistName,
          button1: date,
          button2: time,
        ),
      ],
    );
  }
}

class UserInfoBookingsCard extends StatelessWidget {
  const UserInfoBookingsCard(
      {Key? key, required this.title, required this.child})
      : super(key: key);

  final String title;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
      elevation: 3,
      child: Container(
        padding: const EdgeInsets.all(10),
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: Theme.of(context).textTheme.headline6!.copyWith(
                    color: const Color.fromARGB(255, 90, 90, 90),
                  ),
            ),
            const SizedBox(height: 8),
            child,
          ],
        ),
      ),
    );
  }
}

class BookingFilterButtons extends ConsumerWidget {
  const BookingFilterButtons({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Row(
      children: [
        Expanded(
          child: FilterSelectionButton(
            iconColor: Colors.grey,
            iconData: Icons.alarm_add,
            label: "En espera",
            provider: showIncompleteBookings,
          ),
        ),
        const SizedBox(width: 20),
        Expanded(
          child: FilterSelectionButton(
              iconColor: Colors.grey,
              iconData: Icons.alarm_on,
              label: "Completados",
              provider: showCompletedBookings),
        ),
        const SizedBox(width: 20),
        Expanded(
          child: FilterSelectionButton(
            iconColor: Colors.grey,
            iconData: Icons.alarm_off_outlined,
            label: "Cancelados",
            provider: showCanceledBookings,
          ),
        ),
      ],
    );
  }
}

class FilterSelectionButton extends ConsumerStatefulWidget {
  const FilterSelectionButton({
    Key? key,
    required this.iconColor,
    required this.iconData,
    required this.label,
    required this.provider,
  }) : super(key: key);

  final IconData iconData;
  final String label;
  final Color iconColor;
  final StateProvider provider;

  @override
  ConsumerState<FilterSelectionButton> createState() =>
      _FilterSelectionButtonState();
}

class _FilterSelectionButtonState extends ConsumerState<FilterSelectionButton> {
  bool isSelected = true;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        isSelected = !isSelected;
        ref.read(widget.provider.state).state = isSelected;

        setState(() {});
      },
      child: Container(
        decoration: BoxDecoration(
          color: isSelected
              ? const Color.fromARGB(255, 240, 240, 240)
              : const Color.fromARGB(255, 251, 251, 251),
          borderRadius: BorderRadius.circular(5),
          border: Border.all(
            width: 3,
            color: const Color.fromARGB(255, 240, 240, 240),
          ),
        ),
        padding: const EdgeInsets.all(4),
        child: Column(
          children: [
            Icon(
              widget.iconData,
              size: 45,
              color: widget.iconColor,
            ),
            Text(
              widget.label,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            )
          ],
        ),
      ),
    );
  }
}
