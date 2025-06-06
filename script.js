function handleClick(topic) {
  appendMessage("user", formatTopicText(topic));
  const response = getTutorial(topic.toLowerCase());

  setTimeout(() => {
    appendMessage("bot", response);
  }, 500);
}
/* typing bar*/


function formatTopicText(topic) {
  const map = {
    "send photo": "📸 How to send a photo",
    "video call": "📞 Start a video call",
    "create group": "👥 Make a WhatsApp group",
    "send voice": "🎤 Record & send voice",
    "share location": "📍 Share my location"
  };
  return map[topic] || topic;
}

function getTutorial(topic) {
  const tutorials = {
    "send photo": "1. Open WhatsApp\n2. Open a chat\n3. Tap 📎 (attach icon) → Gallery\n4. Select a photo → Tap Send",
    "video call": "1. Open WhatsApp\n2. Select a contact\n3. Tap the 📹 Video Call icon on the top right",
    "create group": "1. Open WhatsApp\n2. Tap the three dots (⋮) → 'New Group'\n3. Add people → Set group name → Create",
    "send voice": "1. Open a chat in WhatsApp\n2. Hold down the 🎤 Mic icon → Speak\n3. Release to send",
    "share location": "1. Open a chat in WhatsApp\n2. Tap 📎 → Location\n3. Choose 'Send your current location'"
  };
  return tutorials[topic] || "Sorry, I don’t have a guide for that yet!";
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
