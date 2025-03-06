from flask import Flask, request, jsonify
from flask_cors import CORS  # ✅ Import CORS
from googletrans import Translator

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for all routes

translator = Translator()

@app.route("/translate", methods=["POST"])
def translate():
    data = request.get_json()
    text = data.get("text")
    target_lang = data.get("target_lang", "hi")  # Default to Hindi
    translated_text = translator.translate(text, dest=target_lang).text
    return jsonify({"translated": translated_text})

if __name__ == "__main__":
    app.run(debug=True)
