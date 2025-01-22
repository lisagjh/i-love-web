---
title: "The rise of AI-powered Voice Interfaces"

date: 2025-01-17

description: Dave Bitters

tags: ["S18", "talk", "workflow"]
---

Dave Bitter, Frontend Lead van [IO](https://www.iodigital.com/ "https://www.iodigital.com/")

IO is a digital design agency. Doen development, design, reclames, product fotografie. Dave is werkzaam in het detacheer deel.

# The rise of AI-powered Voice Interfaces

**PresiParrot:** a project Dave made for real time transcriptions during a presentation. Not perfect, but very cool that that was possible seven years ago. It's made using speech recognition.

## A brief history in Voice Recognition

Voice Recognition is embedded more into our lives than every before.
The first version of this was in the 1950s. This was mainly focused on understanding numbers being said.
In 1970s this was getting more advanced, with a bigger vocab.
In the 1990s programs like "Dragon Dictate" and "IBM ViaVoice".
In 2000s Google implemented it in their search machine.
In the 2010s its getting used for Home Assistance; alexa, siri, google, etc.

> AI is just another data source. It's the UX that makes the difference.

There is a change happening in how people find information: the magic AI black box. AI Chatbots are being used more and more. But chatting is not the most natural way. Talking is more natural.

## Speech Synthesis & Recognition Web API

### Input

1. Check if its in window / supported
   etc

### Output

1. Check support
2. utterance
3. preferred voice

## Connecting it with the AI

How to provide context?

- How is it being used
- The personality of the AI
- The select role by the user

How to provide feedback to the user?

- abstract visualization: orb that slightly moves when idle, but when actively listening more movement and saturated colors, even more so when the AI is speaking
  - made with ThreeJS

> Don't forget about older techniques.

Proof of Concept
It's fully functional!

Adding AI powered Speech Synthesis through ElevenLabs.

Surprising result: the latency destroys the illusion. Because there is an additional call that needs to happen to use the voice. This breaks the feeling of a real conversation. The longer the answer, the longer the loading time.
Performance >>> everything else.

Make cool stuff. Build, don't just discuss!

**Article**
https://techhub.iodigital.com/tags/voice
