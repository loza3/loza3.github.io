import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';
import '../../providers/make_booking_provider.dart';
import '../../models/models.dart';
import '../../screens/screens.dart';

class ServiceCard extends StatelessWidget {
  const ServiceCard({
    Key? key,
    required this.item,
    required this.nextScreen,
  }) : super(key: key);

  final Service item;
  final Widget nextScreen;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: Card(
        elevation: 0,
        child: ListTile(
          leading: const Padding(
            padding: EdgeInsets.only(left: 0),
            child: Icon(
              FontAwesomeIcons.briefcase,
              size: 35,
            ),
          ),
          title: Text(item.serviceName),
          trailing: const Icon(Icons.arrow_forward_ios_outlined),
          onTap: () {
            context.read<MakeBookingProvider>().setService(item);
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => nextScreen,
              ),
            );
          },
        ),
      ),
    );
  }
}

class SpecialistCard extends StatelessWidget {
  const SpecialistCard({Key? key, required this.item, required this.nextScreen})
      : super(key: key);

  final Employee item;
  final Widget nextScreen;
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: Card(
        elevation: 0,
        child: ListTile(
          leading: const Padding(
            padding: EdgeInsets.only(left: 0),
            child: Icon(
              Icons.person,
              size: 35,
            ),
          ),
          title: Text(item.personName),
          subtitle: Text(item.companyName),
          trailing: const Icon(Icons.arrow_forward_ios_outlined),
          onTap: () {
            context.read<MakeBookingProvider>().setEmployee(item);
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => nextScreen,
              ),
            );
          },
        ),
      ),
    );
  }
}

class OfficeCard extends StatelessWidget {
  const OfficeCard({
    Key? key,
    required this.item,
    required this.nextScreen,
  }) : super(key: key);

  final Office item;
  final Widget nextScreen;
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 0,
      child: SizedBox(
        height: 75,
        child: ListTile(
          leading: CircleAvatar(
            backgroundImage: NetworkImage(
              item.companyLogo ??
                  "https://cdn-icons-png.flaticon.com/512/172/172802.png",
            ),
          ),
          title: Padding(
            padding: const EdgeInsets.only(top: 2.0, bottom: 2),
            child: Text(item.officeName),
          ),
          subtitle: Text(
            item.address,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
          ),
          trailing: const Icon(Icons.arrow_forward_ios_outlined),
          onTap: () {
            context.read<MakeBookingProvider>().setOffice(
                  item,
                );
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => nextScreen,
              ),
            );
          },
        ),
      ),
    );
  }
}

class CompanyCard extends StatelessWidget {
  const CompanyCard({
    Key? key,
    required this.company,
    required this.office,
    this.makeBooking = false,
    this.serviceData = "",
  }) : super(key: key);

  final Office office;
  final Company company;
  final String serviceData;
  final bool makeBooking;

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 0,
      child: SizedBox(
        height: 75,
        child: ListTile(
          leading: CircleAvatar(
            backgroundImage: NetworkImage(office.companyLogo ??
                "https://cdn-icons-png.flaticon.com/512/172/172802.png"),
          ),
          title: Padding(
            padding: const EdgeInsets.only(top: 2.0, bottom: 2),
            child: Text(office.officeName),
          ),
          subtitle: Text(
            office.address,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
          ),
          trailing: const Icon(Icons.arrow_forward_ios_outlined),
          onTap: () {
            if (makeBooking) {
              return;
            }
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => CompanyProfileScreen(
                  office: office,
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
