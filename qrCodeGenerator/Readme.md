# 📘 QR Code Generator – Study Notes

## 📌 Project Overview

**Goal**: Create a web app that takes input text/URL and generates a QR code using a public API.

**Tech Stack**: HTML, CSS, JavaScript (Vanilla)

---

## 🧱 File Structure

```plaintext
qr-generator/
│
├── index.html     → HTML structure
├── style.css      → UI styling with Flexbox
└── script.js      → JS logic + API call + Download feature
```

---

## 🧩 Key Concepts Used

| **Concept**            | **Usage in Project**                                   |
|-------------------------|-------------------------------------------------------|
| DOM Manipulation        | `querySelector`, `addEventListener`                   |
| External API            | QR Server API to generate QR code                     |
| Conditional Rendering   | Show/hide image and download button                   |
| Dynamic `src` binding   | Update `<img src="">` with generated URL              |
| Flexbox Layout          | Center content and align items                        |
| Download with JavaScript| Create `<a>` tag dynamically for download             |

---

## 🔗 QR Code API Used

```bash
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YOUR_TEXT
```

- `size=150x150` → Dimensions  
- `data=...` → URL-encoded input text or URL  

---

## ⚙️ Working Flow

1. User enters text or URL into the input box.
2. On button click:
          - Checks if input is not empty.
          - Updates `<img>` `src` with the QR code API + user input.
          - Displays QR image and "Download" button.
3. If input is empty:
          - Hides QR image and "Download" button.

---



---

## 🎨 Styling Highlights (CSS)

- `body` uses flex to center the container.
- `.imgContainer` initially hidden using `display: none`.
- Smooth UX with rounded inputs and buttons.
- "Download" button styled with green background (`#28a745`).

---

## 🖱️ Download Button Logic

```javascript
downloadBtn.onclick = function () {
  const link = document.createElement("a");
  link.href = qrURL;            // Same as <img> src
  link.download = "qr_code.png";
  document.body.appendChild(link);
  link.click();                 // Triggers download
  document.body.removeChild(link);
};
```

---

## 📈 What I Learned

- How to integrate and use public APIs.
- Dynamic DOM manipulation using Vanilla JS.
- Conditionally rendering elements with JS.
- Styling responsive and neat UIs using Flexbox.
- How to trigger downloads in JavaScript.

---



---

## 🚀 Future Scope / Add-ons

- ✅ Input validation for proper URLs.
- ✅ Spinner while QR is loading.
- ✅ Allow QR size customization (dropdown).
- ✅ Dark mode toggle for better UX.
- ✅ Add copy-to-clipboard feature for input.