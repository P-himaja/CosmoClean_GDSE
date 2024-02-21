import requests

GEMINI_API_KEY = "AIzaSyC9SK0ULLO8I0tWGjHUILyYltHzuJr7Ml8"  
GEMINI_ENDPOINT = "https://language.googleapis.com/v1/documents:analyzeSentiment"

def send_message(message):
        
        payload = {
            "input": message
        }
        headers = {
            "Authorization": f"Bearer {GEMINI_API_KEY}"
        }
        response = requests.post(GEMINI_ENDPOINT, json=payload, headers=headers)
        if not response.text:
            return "API did not return any response"
        else:
            print(response.text)
            return response.json()["generatedText"]

def chat():
        print("Welcome to the chatbot! Say 'hi' to begin.")
        while True:
            user_message = input("> ").lower()
            if user_message == "quit":
                break
            if user_message == "hi":
                bot_message = "Hello! What would you like to talk about?"
            else:
                bot_message = send_message(user_message)
            print(f"Bot: {bot_message}")

if __name__ == "__main__":
        chat()