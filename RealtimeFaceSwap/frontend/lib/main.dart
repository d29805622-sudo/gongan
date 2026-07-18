import 'package:flutter/material.dart';

import 'pages/home_page.dart';
import 'services/config_service.dart';


void main() async {

  WidgetsFlutterBinding.ensureInitialized();

  // 启动时加载用户配置（服务器地址等）
  await ConfigService.load();

  runApp(const FaceSwapApp());

}


class FaceSwapApp extends StatelessWidget {

  const FaceSwapApp({super.key});

  @override
  Widget build(BuildContext context) {

    return MaterialApp(

      debugShowCheckedModeBanner: false,

      title: "RealtimeFaceSwap",

      theme: ThemeData.dark(useMaterial3: true),

      home: const HomePage()

    );

  }

}
