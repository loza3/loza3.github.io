import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../shared/models/person.dart';

final userDataProvider = StateProvider<Person>((ref) {
  return Person.empty();
});
