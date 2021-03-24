import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:carryout/theme.dart';

class AppBarWidget extends StatelessWidget {
  final String username;
  final String img;
  const AppBarWidget({Key key, this.username, this.img}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            SizedBox(
              height: 10,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  width: MediaQuery.of(context).size.width * 0.6,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Hi ' + username,
                        style: GoogleFonts.quicksand(
                          fontSize: 32,
                          color: AppTheme.colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      Text(
                        'We hope you are in good mood of ordering',
                        style: GoogleFonts.inter(
                          fontSize: 18,
                          color: AppTheme.colors.light,
                        ),
                      ),
                    ],
                  ),
                ),
                GestureDetector(
                  onTap: () {},
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(25),
                    child: Container(
                      height: 70,
                      width: 70,
                      child: Image.network(
                        img,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
