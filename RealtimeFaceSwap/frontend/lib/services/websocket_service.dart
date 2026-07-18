import 'package:web_socket_channel/web_socket_channel.dart';


class WebSocketService {

  WebSocketChannel? channel;


  Stream<String> connect({
    required String url
  }) {

    // 重连前先关闭旧连接，避免泄漏
    close();

    channel = WebSocketChannel.connect(Uri.parse(url));

    return channel!.stream.map((event) => event.toString());

  }


  void close() {

    channel?.sink.close();

    channel = null;

  }

}
