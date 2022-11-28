import 'package:flutter/material.dart';

void showLoadingDialog(BuildContext context) {
  showDialog(
      // The user CANNOT close this dialog  by pressing outsite it

      barrierDismissible: false,
      context: context,
      builder: (_) {
        return Dialog(
          child: SizedBox(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: const [
                Center(
                  child: Padding(
                    padding: EdgeInsets.all(15.0),
                    child: CircularProgressIndicator(),
                  ),
                ),
              ],
            ),
          ),
        );
      });
}
