import 'package:flutter/material.dart';

class AuthBackground extends StatelessWidget {
  final Widget child;

  const AuthBackground({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      //color: Colors.red,
      width: double.infinity,
      height: double.infinity,
      child: Stack(
        children: [
          const _PurpleBox(),
          const HeaderIcon(),
          child,
        ],
      ),
    );
  }
}

class HeaderIcon extends StatelessWidget {
  const HeaderIcon({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        width: double.infinity,
        margin: const EdgeInsets.only(top: 20),
        child: const Icon(
          Icons.class_outlined,
          color: Colors.white,
          size: 75,
        ),
      ),
    );
  }
}

class _PurpleBox extends StatelessWidget {
  const _PurpleBox({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
      width: double.infinity,
      height: size.height,
      decoration: _buildBoxDecoration(context),
      child: Stack(
        children: const [
          Positioned(top: 90, left: 30, child: _Buble()),
          Positioned(top: -40, left: 60, child: _Buble()),
          Positioned(top: 120, left: 10, child: _Buble())
        ],
      ),
    );
  }

  BoxDecoration _buildBoxDecoration(BuildContext context) => BoxDecoration(
        gradient: LinearGradient(colors: [
          Theme.of(context).colorScheme.primary,
          Theme.of(context).colorScheme.tertiary
        ]
            // colors: [
            //   Color.fromARGB(255, 41, 107, 172),
            //   Color.fromARGB(255, 73, 148, 181)
            // ],
            ),
      );
}

class _Buble extends StatelessWidget {
  const _Buble({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100,
      height: 100,
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(100),
          color: const Color.fromRGBO(255, 255, 255, 0.05)),
    );
  }
}
