from fastapi import FastAPI, WebSocket
import asyncio

from camera import Camera
from modules.stream import encode


app = FastAPI()

camera = Camera()


@app.get("/")
def index():

    return {
        "name": "RealtimeFaceSwap",
        "version": "0.1"
    }


@app.websocket("/camera")
async def camera_ws(
    websocket: WebSocket
):

    await websocket.accept()

    while True:

        frame = camera.get_frame()

        if frame is not None:

            data = encode(frame)

            await websocket.send_text(
                data
            )

        await asyncio.sleep(
            0.03
        )
