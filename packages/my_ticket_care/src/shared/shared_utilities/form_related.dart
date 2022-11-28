import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:intl/intl.dart';

import '../models/person.dart';

enum Gender { male, female, unselected }

class GenderPickerWidget extends ConsumerStatefulWidget {
  const GenderPickerWidget({
    Key? key,
    required this.genderProvider,
    this.initialValue = Gender.unselected,
  }) : super(key: key);

  final StateProvider<Gender> genderProvider;
  final Gender? initialValue;
  @override
  ConsumerState<GenderPickerWidget> createState() => _GenderPickerWidgetState();
}

class _GenderPickerWidgetState extends ConsumerState<GenderPickerWidget> {
  Gender selected = Gender.unselected;

  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (widget.initialValue == null) {
        return;
      }
      selected = widget.initialValue!;
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Consumer(builder: (context, ref, _) {
            return CheckboxListTile(
              contentPadding: EdgeInsets.zero,
              controlAffinity: ListTileControlAffinity.leading,
              value: selected == Gender.male,
              onChanged: (value) {
                selected = Gender.male;
                ref.read(widget.genderProvider.state).state = Gender.male;
                setState(() {});
              },
              title: const Text("Masculino"),
            );
          }),
        ),
        Expanded(
          child: Consumer(builder: (context, ref, _) {
            return CheckboxListTile(
              contentPadding: EdgeInsets.zero,
              controlAffinity: ListTileControlAffinity.leading,
              value: selected == Gender.female,
              onChanged: (value) {
                selected = Gender.female;
                ref.read(widget.genderProvider.state).state = Gender.female;
                setState(() {});
              },
              title: const Text("Femenino"),
            );
          }),
        ),
      ],
    );
  }
}

class GenderPickerWidget2 extends StatefulWidget {
  const GenderPickerWidget2({
    Key? key,
    required this.person,
    this.initialValue = Gender.unselected,
  })  : assert(initialValue != Gender.unselected),
        super(key: key);

  final Person person;
  final Gender? initialValue;
  @override
  State<GenderPickerWidget2> createState() => _GenderPickerWidget2State();
}

class _GenderPickerWidget2State extends State<GenderPickerWidget2> {
  Gender selected = Gender.unselected;

  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (widget.initialValue == null) {
        return;
      }
      widget.person.sex = (widget.initialValue == Gender.male) ? 1 : 0;
      selected = widget.initialValue!;
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: CheckboxListTile(
            contentPadding: EdgeInsets.zero,
            controlAffinity: ListTileControlAffinity.leading,
            value: selected == Gender.male,
            onChanged: (value) {
              selected = Gender.male;
              widget.person.sex = 1;
              setState(() {});
            },
            title: const Text("Masculino"),
          ),
        ),
        Expanded(
          child: CheckboxListTile(
            contentPadding: EdgeInsets.zero,
            controlAffinity: ListTileControlAffinity.leading,
            value: selected == Gender.female,
            onChanged: (value) {
              selected = Gender.female;
              widget.person.sex = 0;
              setState(() {});
            },
            title: const Text("Femenino"),
          ),
        ),
      ],
    );
  }
}

class DatePickerWidget extends ConsumerStatefulWidget {
  const DatePickerWidget({
    Key? key,
    required this.dateProvider,
    this.initialDate,
  }) : super(key: key);

  final StateProvider<DateTime?> dateProvider;
  final String? initialDate;
  @override
  ConsumerState<DatePickerWidget> createState() => _DatePickerWidgetState();
}

class _DatePickerWidgetState extends ConsumerState<DatePickerWidget> {
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      DateTime birthday;
      DateFormat format = DateFormat("dd/MM/yyyy");

      if (widget.initialDate == null) {
        return;
      }
      try {
        birthday = format.parse(widget.initialDate!);
        ref.read(widget.dateProvider.state).state = birthday;
      } catch (error, stack) {
        log(error.toString());
        log(stack.toString());
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Container(
      padding: const EdgeInsets.all(3),
      decoration: BoxDecoration(
        color: colorScheme.primaryContainer,
        borderRadius: BorderRadius.circular(8),
      ),
      child: TextButton.icon(
        onPressed: () async {
          final selectedDate = ref.watch(widget.dateProvider) ?? DateTime.now();
          DateTime? date = await pickWorkdayDate(context, selectedDate);
          if (date == null) {
            return;
          }

          ref.read(widget.dateProvider.state).state = date;
        },
        icon: const Icon(Icons.date_range),
        label: Text(
          (ref.watch(widget.dateProvider) != null)
              ? DateFormat('dd/MM/yyyy').format(ref.watch(widget.dateProvider)!)
              : widget.initialDate ??
                  DateFormat('dd/MM/yyyy').format(DateTime.now()),
          style: Theme.of(context).textTheme.bodyLarge,
        ),
      ),
    );
  }

  Future<DateTime?> pickWorkdayDate(
      BuildContext context, DateTime initialDate) async {
    DateTime? date = await showDatePicker(
      context: context,
      initialDate: initialDate,
      firstDate: DateTime(1900),
      lastDate: DateTime(2100),
    );
    return date;
  }
}

class DatePickerWidget2 extends ConsumerStatefulWidget {
  const DatePickerWidget2({
    Key? key,
    required this.person,
    this.initialDate,
  }) : super(key: key);

  final Person person;
  final DateTime? initialDate;
  @override
  ConsumerState<DatePickerWidget2> createState() => _DatePickerWidget2State();
}

class _DatePickerWidget2State extends ConsumerState<DatePickerWidget2> {
  DateTime selectedDate = DateTime.now();
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      DateFormat format = DateFormat("dd/MM/yyyy");

      if (widget.initialDate == null) {
        return;
      }
      selectedDate = widget.initialDate!;
      widget.person.birthday = format.format(widget.initialDate!);
      setState(() {});
    });
  }

  String dateToString(DateTime date) {
    return DateFormat("dd/MM/yyyy").format(date);
  }

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Container(
      padding: const EdgeInsets.all(3),
      decoration: BoxDecoration(
        color: colorScheme.primaryContainer,
        borderRadius: BorderRadius.circular(8),
      ),
      child: TextButton.icon(
        onPressed: () async {
          FocusScope.of(context).unfocus();
          DateTime? date = await pickWorkdayDate(selectedDate);
          if (date == null) {
            return;
          }

          selectedDate = date;
          widget.person.birthday = dateToString(date);
          setState(() {});
        },
        icon: const Icon(Icons.date_range),
        label: Text(
          dateToString(selectedDate),
          style: Theme.of(context).textTheme.bodyLarge,
        ),
      ),
    );
  }

  Future<DateTime?> pickWorkdayDate(DateTime initialDate) async {
    DateTime? date = await showDatePicker(
      context: context,
      initialDate: initialDate,
      firstDate: DateTime(1900),
      lastDate: DateTime(2100),
    );
    return date;
  }
}
