import 'package:flutter/material.dart';

import '../widgets/video_view.dart';
import '../widgets/control_bar.dart';


class HomePage extends StatelessWidget {

  const HomePage({
    super.key
  });

  @override
  Widget build(
    BuildContext context
  ) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "RealtimeFaceSwap"
        ),

      ),

      body: Column(

        children: [

          Expanded(

            child: VideoView()

          ),

          const SizedBox(
            height: 20
          ),

          const ControlBar(),

          const SizedBox(
            height: 30
          ),

        ],

      ),

    );

  }

}
