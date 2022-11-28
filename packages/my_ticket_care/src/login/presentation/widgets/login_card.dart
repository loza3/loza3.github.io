import 'package:flutter/material.dart';

class LoginCard extends StatelessWidget {
  const LoginCard({
    Key? key,
    required this.children,
    this.padding = EdgeInsets.zero,
    this.margin = EdgeInsets.zero,
  }) : super(key: key);

  final List<Widget> children;
  final EdgeInsetsGeometry padding;
  final EdgeInsetsGeometry margin;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: margin,
      child: ListView(
        children: [
          Card(
            margin: const EdgeInsets.only(
              left: 20,
              right: 20,
              bottom: 80,
            ),
            color: Theme.of(context).colorScheme.background,
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            elevation: 5,
            child: Padding(
              padding: padding,
              child: Column(
                children: children,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
