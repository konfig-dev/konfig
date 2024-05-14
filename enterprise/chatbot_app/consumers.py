import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer


class GuideConsumer(WebsocketConsumer):
    def connect(self):
        self.chat_id = self.scope["url_route"]["kwargs"]["chat_id"]
        print(f"Connecting to group {self.chat_id} with channel {self.channel_name}")
        async_to_sync(self.channel_layer.group_add)(self.chat_id, self.channel_name)
        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        print(
            f"Disconnecting from group {self.chat_id} with channel {self.channel_name}"
        )
        async_to_sync(self.channel_layer.group_discard)(self.chat_id, self.channel_name)

    def receive(self, text_data):
        pass

    def template_update(self, event):
        template = event["template"]
        self.send(
            text_data=json.dumps({"type": "template.update", "template": template})
        )

    def guide_update(self, event):
        guide = event["guide"]
        self.send(text_data=json.dumps({"type": "guide.update", "guide": guide}))
