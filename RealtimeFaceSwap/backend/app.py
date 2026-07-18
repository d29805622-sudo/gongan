from fastapi import FastAPI, WebSocket
import asyncio

from camera import Camera
from modules.stream import encode
from modules.face_detector import FaceDetector


app = FastAPI()

camera = Camera()

face_detector = FaceDetector()


@app.get("/")
def index():

    return {
        "name": "RealtimeFaceSwap",
        "version": "0.3"
    }


@app.websocket("/camera")
async def camera_ws(
    websocket: WebSocket
):

    await websocket.accept()

    while True:

        frame = camera.get_frame()

        if frame is not None:

            faces = face_detector.detect(
                frame
            )

            print(
                "检测到:",
                len(faces),
                "张脸"
            )

            data = encode(frame)

            await websocket.send_text(
                data
            )

        await asyncio.sleep(
            0.03
        )
