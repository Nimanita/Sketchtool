import asyncio
import json
from channels.consumer import AsyncConsumer
class sketchToolConsumer(AsyncConsumer):
  async def websocket_connect(self, event):
    print('connected', event)
    board_room = "boardroom"
    self.board_room = board_room
    await self.channel_layer.group_add(
      board_room,
      self.channel_name
    )
    await self.send({
      "type": "websocket.accept"
    })
  async def websocket_receive(self, event):
    print("received" , event)
    drawing_data = event.get('text', None)
    await self.channel_layer.group_send(
      self.board_room,
      {
        "type": "board_message",
        "text": drawing_data
      })
  async def board_message(self, event):
    await self.send({
      "type": 'websocket.send',
      'text': event['text']
    })
  async def websocket_disconnect(self, event):
    print('disconnected', event)