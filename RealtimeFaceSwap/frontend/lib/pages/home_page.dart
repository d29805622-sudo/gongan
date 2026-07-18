import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';

import '../config/server_config.dart';
import '../services/config_service.dart';
import '../services/websocket_service.dart';
import '../widgets/control_panel.dart';
import '../widgets/status_panel.dart';
import '../widgets/video_panel.dart';
import 'settings_page.dart';


class HomePage extends StatefulWidget {

  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();

}


class _HomePageState extends State<HomePage> {

  final _ws = WebSocketService();

  Stream<String>? _videoStream;

  bool _running = false;

  String _host = ServerConfig.defaultHost;

  int _port = ServerConfig.defaultPort;

  Map<String, dynamic>? _status;

  Timer? _pollTimer;


  @override
  void initState() {
    super.initState();
    _loadConfig();
  }


  @override
  void dispose() {
    _pollTimer?.cancel();
    _ws.close();
    super.dispose();
  }


  Future<void> _loadConfig() async {
    await ConfigService.load();
    if (!mounted) return;
    setState(() {
      _host = ConfigService.serverHost;
      _port = ConfigService.serverPort;
    });
  }


  void _start() {
    final url = ServerConfig.buildWebSocketUrl(host: _host, port: _port);
    setState(() {
      _running = true;
      _videoStream = _ws.connect(url: url);
    });
    _startPolling();
  }


  void _stop() {
    _pollTimer?.cancel();
    _pollTimer = null;
    _ws.close();
    setState(() {
      _running = false;
      _videoStream = null;
      _status = null;
    });
  }


  void _startPolling() {
    _pollTimer?.cancel();
    _pollTimer = Timer.periodic(const Duration(seconds: 1), (_) {
      _pollStatus();
    });
  }


  Future<void> _pollStatus() async {
    final client = HttpClient();
    client.connectionTimeout = const Duration(seconds: 2);
    try {
      final url = ServerConfig.buildHttpUrl(
        host: _host, port: _port, path: ServerConfig.statusPath
      );
      final req = await client.getUrl(Uri.parse(url));
      final res = await req.close();
      if (res.statusCode != 200) return;
      final body = await res.transform(utf8.decoder).join();
      final decoded = json.decode(body);
      if (mounted && decoded is Map<String, dynamic>) {
        setState(() => _status = decoded);
      }
    } catch (_) {
    } finally {
      client.close();
    }
  }


  Future<void> _openSettings() async {
    final refreshed = await Navigator.of(context).push<bool>(
      MaterialPageRoute(builder: (_) => const SettingsPage())
    );
    if (refreshed == true) {
      await _loadConfig();
      // 若正在运行，重启 WebSocket 与轮询以使用新地址
      if (_running) {
        _stop();
        _start();
      }
    }
  }


  // 响应式布局：窄屏（手机）Column 纵向，宽屏（桌面）Row 横向
  Widget _buildBody(BuildContext context) {
    final isNarrow = MediaQuery.of(context).size.width < 700;
    final video = VideoPanel(stream: _videoStream);
    final side = Column(
      children: [
        StatusPanel(status: _status, host: _host, port: _port),
        const SizedBox(height: 8),
        ControlPanel(
          running: _running,
          onStart: _start,
          onStop: _stop,
          onSettings: _openSettings
        )
      ]
    );

    if (isNarrow) {
      // 手机：上视频下控制
      return Column(
        children: [
          Expanded(flex: 3, child: video),
          Expanded(
            flex: 2,
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(8),
              child: side
            )
          )
        ]
      );
    }

    // 桌面：左视频右控制
    return Row(
      children: [
        Expanded(flex: 3, child: video),
        Expanded(
          flex: 1,
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(8),
            child: side
          )
        )
      ]
    );
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("RealtimeFaceSwap v1.1.1"),
        actions: [
          IconButton(
            icon: const Icon(Icons.info_outline),
            onPressed: () => Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => const _AboutPage())
            )
          )
        ]
      ),
      body: _buildBody(context)
    );
  }

}


class _AboutPage extends StatelessWidget {
  const _AboutPage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("关于")),
      body: const Center(
        child: Text(
          "RealtimeFaceSwap\n\nVersion 1.1.1\n\n实时 AI 换脸客户端",
          textAlign: TextAlign.center
        )
      )
    );
  }
}
