import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:blobs/blobs.dart';
import 'package:carryout/theme.dart';

const double size = 300;

class LoadingBlobWidget extends StatelessWidget {
  const LoadingBlobWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      flex: 1,
      child: Center(
        child: CircularProgressIndicator(
          backgroundColor: AppTheme.colors.accent,
        ),
      ),
    );
  }
}

class NothingBlobWidget extends StatelessWidget {
  const NothingBlobWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Center(
        child: Text(
          'Nothing here...',
          style: TextStyle(
            color: AppTheme.colors.light,
            fontSize: 24,
            fontFamily: 'Poppins',
          ),
        ),
      ),
    );
  }
}

class ErrorBlobWidget extends StatelessWidget {
  final error;
  const ErrorBlobWidget({
    Key key,
    @required this.error,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    log("$error");
    return Expanded(
      flex: 1,
      child: Center(
        child: Blob.animatedRandom(
          size: size,
          loop: true,
          duration: const Duration(milliseconds: 1000),
          styles: BlobStyles(
            color: AppTheme.colors.accent,
          ),
          child: Center(
            child: Text(
              'Errored!',
              style: TextStyle(
                color: AppTheme.colors.danger,
                fontFamily: 'Poppins',
                fontWeight: FontWeight.w700,
                fontSize: 22,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
