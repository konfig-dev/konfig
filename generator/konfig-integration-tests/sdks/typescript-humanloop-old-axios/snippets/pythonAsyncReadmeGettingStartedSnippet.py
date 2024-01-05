import asyncio
from pprint import pprint
from humanloop import Humanloop, ApiException

humanloop = Humanloop(
    api_key="YOUR_API_KEY",
    openai_api_key="YOUR_OPENAI_API_KEY",
    anthropic_api_key="YOUR_ANTHROPIC_API_KEY",
)


async def main():
    try:
        complete_response = await humanloop.acomplete(
            project="sdk-example",
            inputs={
                "text": "Llamas that are well-socialized and trained to halter and lead after weaning and are very friendly and pleasant to be around. They are extremely curious and most will approach people easily. However, llamas that are bottle-fed or over-socialized and over-handled as youth will become extremely difficult to handle when mature, when they will begin to treat humans as they treat each other, which is characterized by bouts of spitting, kicking and neck wrestling.[33]",
            },
            model_config={
                "model": "gpt-3.5-turbo",
                "max_tokens": -1,
                "temperature": 0.7,
                "prompt_template": "Summarize this for a second-grade student:\n\nText:\n{{text}}\n\nSummary:\n",
            },
            stream=False,
        )
        print(complete_response)
    except ApiException as e:
        print("Exception when calling .complete: %s\n" % e)
        pprint(e.body)
        if e.status == 422:
            pprint(e.body["detail"])
        pprint(e.headers)
        pprint(e.status)
        pprint(e.reason)
        pprint(e.round_trip_time)


asyncio.run(main())
