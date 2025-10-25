 const landing = document.getElementById("landing");
    const chatbot = document.getElementById("chatbot");
    const adminLogin = document.getElementById("admin-login");
    const adminDashboard = document.getElementById("admin-dashboard");
    
    document.getElementById("startBtn").onclick = () => {
      landing.classList.remove("active");
      chatbot.classList.add("active");
    };

    document.getElementById("adminBtn").onclick = () => {
      landing.classList.remove("active");
      adminLogin.classList.add("active");
    };

    document.getElementById("backToLanding").onclick = () => {
      chatbot.classList.remove("active");
      landing.classList.add("active");
    };

    document.getElementById("backToLandingFromLogin").onclick = () => {
      adminLogin.classList.remove("active");
      landing.classList.add("active");
    };

    document.getElementById("backToLandingFromAdmin").onclick = () => {
      adminDashboard.classList.remove("active");
      landing.classList.add("active");
    };

    document.getElementById("loginBtn").onclick = () => {
      const user = document.getElementById("adminUser").value;
      const pass = document.getElementById("adminPass").value;
      if (user === "admin@cec" && pass === "admin123") {
        adminLogin.classList.remove("active");
        adminDashboard.classList.add("active");
      } else {
        alert("Invalid credentials! Try again.");
      }
    };

    // Chatbot function
    const sendBtn = document.getElementById("sendBtn");
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");

    sendBtn.onclick = sendMessage;
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
      const msg = userInput.value.trim();
      if (!msg) return;
      displayMessage(msg, "user-msg");
      userInput.value = "";
      setTimeout(() => {
        const reply = getBotReply(msg.toLowerCase());
        displayMessage(reply, "bot-msg");
      }, 700);
    }

    function displayMessage(text, type) {
      const div = document.createElement("div");
      div.className = type;
      div.textContent = text;
      chatBox.appendChild(div);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotReply(input) {
      if (input.includes("enrollment")) return "Enrollment starts on November 15.";
      else if (input.includes("event")) return "CEC Foundation Week 🎉: December 3–7!";
      else if (input.includes("schedule")) return "Check your class schedule on the student portal.";
      else if (input.includes("tuition")) return "Tuition varies by level — contact Accounting for details.";
      else return "I didn’t quite catch that. Ask about enrollment, schedule, or events!";
    }