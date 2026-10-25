# Professional portfolio — organized edition

This is your black-and-silver portfolio, with **HealthConnect AI**, **Word Quest**, and your other projects preserved. The original website layout and functionality have been retained; the files are now grouped by purpose.

## Quick start

1. Extract the ZIP.
2. Open **`index.html`** in a browser to preview the site.
3. For best results with interactive games, open the folder in VS Code with Live Preview or start a simple local server in this folder:
   ```sh
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.
4. Browse **Projects** to open HealthConnect AI, Word Quest (including its playable web game), CEC AI Chatbot, or Super Skatter.

## Project layout

```text
Portfolio_Organized/
├── index.html                         Main portfolio homepage
├── README.md                          This guide
├── assets/
│   ├── css/
│   │   ├── main.css                   Homepage and shared design
│   │   └── word-quest-detail.css      Word Quest project details styling
│   ├── js/
│   │   └── main.js                    Mobile navigation and filtering
│   └── images/
│       ├── profile.jpg                Portfolio profile photo
│       └── super-skatter-preview.png  Super Skatter project cover
├── pages/
│   ├── healthconnect-ai.html          HealthConnect AI overview
│   └── word-quest.html               Word Quest project overview
└── projects/
    ├── word-quest/                    Playable Word Quest + images/audio
    │   ├── index.html
    │   ├── app.js
    │   ├── styles.css
    │   ├── gameLogic.js
    │   ├── audio-manager.js
    │   ├── gameLogic.test.js
    │   ├── README.md
    │   ├── images/
    │   └── audio/
    │       ├── music/
    │       └── sfx/
    ├── cec-chatbot/                   Standalone school chatbot demo
    │   ├── index.html
    │   ├── style.css
    │   ├── script.js
    │   └── images/cec-logo.jpg
    └── super-skatter/                Standalone Super Skatter game
        ├── index.html
        ├── topup.html
        └── images/
            ├── background.png
            ├── scatter.png
            └── symbols/1.png ... 8.png
```

## Edit your site

| What to edit | File |
| --- | --- |
| Homepage text, project cards and main navigation | `index.html` |
| Black/silver appearance | `assets/css/main.css` |
| Mobile menu and project filters | `assets/js/main.js` |
| Profile picture | `assets/images/profile.jpg` |
| HealthConnect AI details | `pages/healthconnect-ai.html` |
| Word Quest introduction | `pages/word-quest.html` |
| Word Quest source and gameplay | `projects/word-quest/` |
| CEC AI Chatbot | `projects/cec-chatbot/` |
| Super Skatter | `projects/super-skatter/` |

## Publish

The website is **static HTML, CSS, and JavaScript**; no compilation is needed for the portfolio. You can upload the **contents of this ZIP** to your GitHub repository and use GitHub Pages (**main** branch, **/ root**) or import it into Vercel. **Keep the same directory structure:** the links depend on these locations. Upload the folders as well as `index.html`, not just the ZIP file.

The Word Quest `.mp3` and `.wav` files are part of the game, so do not delete them. Your Word Quest progress is saved locally in the browser. HealthConnect AI is described as a proposed concept, not a production medical tool. The two other web demos are prototypes; do not use them for real personal data or payments.

Before publishing, check your displayed name and contact email, and remove anything you do not want public. All existing browser game assets are included in this package; third-party web fonts or the chatbot's QR-code service may require an internet connection.
