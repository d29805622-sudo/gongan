# 架构文档

## 系统架构

```
┌─────────────┐     WebSocket     ┌──────────────┐
│  Flutter    │ ◄──────────────► │   Backend    │
│  Client     │   视频流传输       │  (FastAPI)   │
└─────────────┘                  └──────┬───────┘
                                        │
                          ┌─────────────┼─────────────┐
                          │             │             │
                   ┌──────▼─────┐ ┌─────▼──────┐ ┌────▼─────┐
                   │  Camera    │ │ FaceDetect │ │ FaceSwap │
                   │  (OpenCV)  │ │ (Insight)  │ │ (ONNX)   │
                   └────────────┘ └────────────┘ └──────────┘
```

## 模块说明

### Backend (Python)

- `app.py` - FastAPI 入口，提供 HTTP 和 WebSocket 接口
- `config.py` - 配置参数（摄像头ID、分辨率、端口）
- `camera.py` - 摄像头采集模块
- `modules/stream.py` - 视频帧编码（Base64）

### Frontend (Flutter)

- 通过 WebSocket 接收实时视频流
- 提供用户交互界面

### AI 模块

- 人脸检测：InsightFace
- 人脸换脸：ONNX Runtime 推理

## 数据流

1. Camera 采集视频帧
2. 帧送入人脸检测
3. 检测到的人脸送入换脸模型
4. 处理后的帧编码为 Base64
5. 通过 WebSocket 发送到客户端

## 版本规划

- v0.1 项目基础架构 ✅
- v0.2 摄像头实时传输
- v0.3 Flutter客户端
- v0.4 人脸检测模块
- v0.5 AI换脸推理模块
- v0.6 GPU加速
- v0.7 虚拟摄像头
- v1.0 发布版
