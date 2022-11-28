import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:my_ticket_care/reusable/reusable.dart';
import 'package:my_ticket_care/screens/booking/booking_info.dart';
import 'package:my_ticket_care/models/test_data/booking_test_data.dart';

class MyBookings extends StatefulWidget {
  const MyBookings({Key? key}) : super(key: key);

  @override
  State<MyBookings> createState() => _MyBookingsState();
}

class _MyBookingsState extends State<MyBookings> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: AnnotatedRegion<SystemUiOverlayStyle>(
        value: SystemUiOverlayStyle.light
            .copyWith(statusBarColor: AppColors.primaryColor),
        child: Scaffold(
          body: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Expanded(
                child: ListView.builder(
                    padding: const EdgeInsets.all(20),
                    itemCount: listadoReservas.length,
                    itemBuilder: (context, index) {
                      Map bookItem = listadoReservas[index];
                      String serviceName = bookItem["serviceName"];
                      String time = bookItem["time"];
                      String specialistName = bookItem["specialistName"];
                      String date = bookItem["date"];
                      String companyName = bookItem["companyName"];

                      return GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => BookingInfo(
                                serviceData: bookItem,
                              ),
                            ),
                          );
                        },
                        child: ContainersCards.cardsDecorations(
                            context: context,
                            hora: true,
                            imagen:
                                'https://picsum.photos/300/30${index.toString()}',
                            titulo: serviceName,
                            subtitulo: companyName,
                            subtitulo2: specialistName,
                            button1: date,
                            button2: time),
                      );
                    }),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
