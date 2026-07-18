import 'package:flutter/material.dart';


class SettingsPage extends StatelessWidget {

  const SettingsPage({
    super.key
  });

  @override
  Widget build(
    BuildContext context
  ) {

    return Scaffold(

      appBar: AppBar(

        title: const Text(
          "设置"
        )

      ),

      body: const Center(

        child: Text(

          "摄像头\n\nAI模型\n\nGPU加速"

        )

      ),

    );

  }

}
