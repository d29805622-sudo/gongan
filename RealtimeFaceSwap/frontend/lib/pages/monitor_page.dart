import 'package:flutter/material.dart';

import '../widgets/status_card.dart';


class MonitorPage extends StatelessWidget {

  const MonitorPage({
    super.key
  });

  @override
  Widget build(
    BuildContext context
  ) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "性能监控"
        )

      ),

      body: ListView(

        padding: const EdgeInsets.all(16),

        children: const [

          StatusCard(
            title: "FPS",
            value: "30"
          ),

          StatusCard(
            title: "检测到人脸",
            value: "0"
          ),

          StatusCard(
            title: "GPU",
            value: "启用"
          ),

          StatusCard(
            title: "延迟",
            value: "33ms"
          ),

        ]

      )

    );

  }

}
