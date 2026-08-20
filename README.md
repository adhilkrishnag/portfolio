# Adhil Krishna G. — Portfolio

Personal portfolio website for Adhil Krishna G., a Software Engineer specializing in Flutter/Dart, application architecture, performance engineering, healthcare software, and open-source development.

---

## Highlights

- **4+ years** of software engineering and production systems experience.
- **Production Flutter & Healthcare Systems**: Clean Architecture, MVVM, RESTful APIs, document processing, and AI automation.
- **Performance Engineering**: Startup optimization (7.3s → 1.8s) and list/grid viewport rendering (~15s → <1s).
- **Featured Open Source**: Author and maintainer of [`dicom_viewer`](https://pub.dev/packages/dicom_viewer), a pure-Dart DICOM viewer for Flutter.
- **Cross-Platform Delivery**: Feature development across Mobile (iOS/Android), Desktop (macOS/Windows/Linux), and Web.

---

## Tech Stack

- **HTML5**: Semantic document structure, accessibility attributes, and OpenGraph / JSON-LD schemas.
- **CSS3**: Custom properties, responsive grid and flexbox layouts, and dark/light themes.
- **Vanilla JavaScript (ES Modules)**: Dynamic DOM rendering, viewport counter observers, theme state, and clipboard utilities.
- **Static JSON Metadata**: Cached public package and repository metadata snapshot.
- **Dart (Optional)**: Lightweight local development preview server script (`serve.dart`).

---

## Project Structure

```text
portfolio/
├── assets/
│   └── AdhilKrishnaG.pdf             # Downloadable résumé
├── data/
│   ├── experience.js                 # Work history & verified responsibilities
│   ├── github.js                     # Repository metadata adapter
│   ├── github-metadata.json          # Cached public repository metadata
│   ├── metrics.js                    # Verified engineering outcomes & benchmarks
│   ├── openSource.js                 # dicom_viewer specifications & pipeline
│   ├── principles.js                 # Core engineering principles & lifecycle
│   ├── profile.js                    # Profile data, education, and contact details
│   ├── projects.js                   # Healthcare & messaging project case studies
│   └── skills.js                     # Categorized skills taxonomy
├── scripts/
│   ├── app.js                        # Main application bootstrap and view renderers
│   ├── copy-util.js                  # One-click clipboard copy utility
│   ├── counter.js                    # Smooth numeric counter animations
│   ├── refresh-public-metadata.js    # Build-time public metadata refresher
│   └── theme.js                      # Dark / light theme manager
├── styles/
│   ├── animations.css                # Keyframe definitions and transitions
│   ├── components.css                # UI component styling (cards, nav, badges)
│   ├── layout.css                    # Grid system, container spacing, and layout utilities
│   └── variables.css                 # Color tokens, typography, and theme variables
├── .gitignore                        # Git exclusion rules
├── CONTENT-LICENSE.md                # Personal content copyright notice
├── index.html                        # Semantic single-page application shell
├── LICENSE                           # MIT License for website source code
├── README.md                         # Project documentation
├── robots.txt                        # Search crawler directives
├── serve.dart                        # Optional local development HTTP server
└── sitemap.xml                       # SEO sitemap
```

---

## Local Development

To run the portfolio locally, use any static web server:

### Option 1: Using Python
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080/`.

### Option 2: Using Node.js / npx
```bash
npx serve .
```

### Option 3: Using Dart (Optional)
```bash
dart run serve.dart
```

---

## Refreshing Public Metadata

To refresh the static package and repository metadata snapshot from pub.dev and GitHub at build time:

```bash
node scripts/refresh-public-metadata.js
```

---

## Deployment

The website is a static, zero-dependency web application and can be deployed directly to **GitHub Pages**, **Cloudflare Pages**, or **Firebase Hosting**.

### Deploying to GitHub Pages
1. Push this repository to GitHub (`https://github.com/adhilkrishnag/portfolio`).
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Set the branch to `main` / `root` (`/`) and click **Save**.

---

## Links

- **Portfolio**: [adhilkrishnag.github.io/portfolio](https://adhilkrishnag.github.io/portfolio/)
- **GitHub Profile**: [github.com/adhilkrishnag](https://github.com/adhilkrishnag)
- **LinkedIn Profile**: [linkedin.com/in/adhilkrishnag](https://www.linkedin.com/in/adhilkrishnag/)
- **dicom_viewer on pub.dev**: [pub.dev/packages/dicom_viewer](https://pub.dev/packages/dicom_viewer)
- **dicom_viewer on GitHub**: [github.com/adhilkrishnag/dicom_viewer](https://github.com/adhilkrishnag/dicom_viewer)

---

## License & Personal Content Notice

The website source code is licensed under the [MIT License](LICENSE).

Personal content within this repository, including the résumé, profile information, personal branding, and identifying information, remains © 2026 Adhil Krishna G. and is not licensed for reuse. See [CONTENT-LICENSE.md](CONTENT-LICENSE.md).