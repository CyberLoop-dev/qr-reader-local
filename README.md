<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:%23facc15&height=170&section=header&text=QR%20Reader%20Local&fontSize=40&fontColor=ffffff" alt="QR Reader Local banner"/></p>
<p align="center"><img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&pause=1000&color=facc15&center=true&vCenter=true&width=650&lines=Decode%20QR%20images%20privately%20in%20your%20browser" alt="Typing title"/></p>
<p align="center"><img src="https://img.shields.io/github/license/CyberLoop-dev/qr-reader-local"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/qr-reader-local"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/qr-reader-local"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/qr-reader-local"/></p>
<p align="center"><img src="assets/overview.svg" alt="QR Reader Local illustration" width="92%"/></p>

## 🧭 Overview
QR Reader Local decodes QR codes from image files using a browser canvas and the jsQR library. Image pixels are processed in the browser; the app has no upload endpoint or analytics.

## ✨ Features
- 📷 Reads QR codes from PNG, JPEG, and other browser-supported images.
- 🔍 Shows decoded text and the detected QR format.
- 📋 Copies the decoded value with one click.
- 🔒 Processes the image locally in your browser.

## 🎬 Demo
```text
Choose an image containing a QR code → the decoded text appears below the preview.
No camera access or account is required.
```
This is a local example; files are processed in your browser or on your machine.

## 🚀 Quick Start
```bash
npm install
npm start
```
Open the Vite address printed in the terminal. Use a clear, well-lit image for best results.

## 🧰 Tech Stack
- Node.js 18+
- Vite
- jsQR
- Browser File API and Canvas

## 🗂️ Folder Structure
```text
index.html
src/main.js
src/qr-utils.js
src/styles.css
tests/qr-utils.test.js
package.json
assets/overview.svg
```

## 🗺️ Roadmap
- [x] Core workflow
- [x] Local-first processing
- [ ] More format and edge-case coverage
- [ ] Optional CI examples

## 🤝 Contributing
Issues and focused pull requests are welcome. Add regression tests for bug fixes and document new behavior.

## 📄 License
Released under the [MIT License](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:%23facc15&height=110&section=footer" alt="Animated footer"/></p>
