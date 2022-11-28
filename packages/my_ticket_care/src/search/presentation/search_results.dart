import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_ticket_care/src/search/presentation/search_bar.dart';
import 'package:my_ticket_care/src/search/providers/search_query_provider.dart';

import 'search_results_list.dart';
import 'search_results_states.dart';

class SearchResultsScreen extends StatelessWidget {
  const SearchResultsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        const Padding(
          padding: EdgeInsets.all(8.0),
          child: SearchBar(),
        ),
        Consumer(
          builder: (context, ref, child) {
            String query = ref.watch(searchQueryProvider);
            if (query.isEmpty) {
              return const SearchResultsWelcome();
            } else {
              return const SearchResultsList();
            }
          },
        ),
      ],
    );
  }
}
