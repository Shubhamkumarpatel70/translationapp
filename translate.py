from googletrans import Translator

# Initialize the translator
translator = Translator()

# Translate text from English to Hindi
text = "Hello, how are you?"
translated_text = translator.translate(text, src="en", dest="hi")

# Print the translated text
print(f"Original: {text}")
print(f"Translated: {translated_text.text}")
