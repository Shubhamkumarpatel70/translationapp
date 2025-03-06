document.getElementById("translateBtn").addEventListener("click", async function () {
    const text = document.getElementById("textInput").value.trim();
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;
    const resultText = document.getElementById("translatedText");

    if (!text) {
        alert("Please enter text to translate.");
        return;
    }

    resultText.innerText = "Translating...";

    try {
        const response = await fetch("http://127.0.0.1:5000/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, source: sourceLang, target: targetLang })
        });

        const data = await response.json();
        if (data.translatedText) {
            resultText.innerText = data.translatedText;
        } else {
            throw new Error("Translation failed.");
        }
    } catch (error) {
        console.error("Translation Error:", error);
        resultText.innerText = "Translation failed. Please try again.";
    }
});
