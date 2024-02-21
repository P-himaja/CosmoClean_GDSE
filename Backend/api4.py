import pathlib
import textwrap

import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown


def to_markdown(text):
    text = text.replace('•', '  *')
    return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))


genai.configure(api_key='AIzaSyB1iezzoIb8qy511wjb2YRFclF27LKW0kI')
model = genai.GenerativeModel('gemini-pro')

print("Chatbot: Hi! How can I assist you today?")

while True:
    user_input = input("You: ")
    
    if user_input.lower() in ['exit', 'quit', 'bye']:
        print("Chatbot: Goodbye!")
        break
    
    response = model.generate_content(user_input)
    answer = response.candidates[0].content.parts[0].text
    print(answer)
    