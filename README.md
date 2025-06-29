<h1 align="center">
  🌌 AstroGuardian
</h1>
<p align="center">
  <strong>A real-time space intelligence dashboard powered by NASA, NOAA, and global space APIs.</strong><br>
  <em>Monitor the cosmos — from ISS tracking to solar flares — in one seamless platform.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/drishyatomar2904/AstroGuardian?color=blue" alt="License">
  <img src="https://img.shields.io/github/languages/top/drishyatomar2904/AstroGuardian" alt="Top Language">
  <img src="https://img.shields.io/github/last-commit/drishyatomar2904/AstroGuardian" alt="Last Commit">
</p>

---

## 🚀 Overview

**AstroGuardian** is a real-time web platform that visualizes live space data using modern design, space-themed UI, and multi-API integration. It brings you:
- 🔴 Solar flare alerts
- 🛰 Real-time ISS tracking
- ☄️ Asteroid close approaches
- 📸 NASA's APOD
- 🌐 Space weather & Earth imagery

---

## 🌠 Live Modules

| 🌐 Module | 🌟 Description |
|----------|----------------|
| 🛰️ **ISS Tracker** | Real-time ISS location, speed, altitude & next pass predictions |
| ☄️ **Asteroid Monitor** | Near-Earth object alerts with hazard detection & velocity data |
| ☀️ **Solar Flare Watch** | X/M/C/B-class flares, impact analysis, and forecast visualizations |
| 📷 **NASA APOD** | Beautiful daily image from NASA with scientific captions |
| 🧪 **Space Weather** | Planetary K-index, radiation storm forecasts, Earth-facing solar views |

---

## 📊 Data Visualization Highlights

- 🔁 Real-time ISS orbit animation
- 🌞 Live solar flare meters (by class)
- 🌍 NASA EPIC Earth imagery feed
- 📈 Forecast graphs using Chart.js
- 🧠 Smart fallback & caching architecture

---

## 🔧 Tech Stack

| Layer       | Stack / Tools |
|-------------|----------------|
| **Frontend**| HTML5, CSS3, Bootstrap 5, JS, Chart.js, Glassmorphism UI |
| **Backend** | Python, Flask, Jinja2, Threaded API fetchers |
| **Data**    | NASA, NOAA, WhereTheISS.at, Satellites.fly.dev, OpenNotify |
| **UX**      | Scroll animations, dark theme, interactive visual layers |

---

## 📡 API Sources

### 🚀 NASA

| API | Purpose | Endpoint |
|-----|---------|----------|
| **APOD** | Daily Astronomy Picture | `planetary/apod` |
| **NEO WS** | Near-Earth Objects | `neo/rest/v1/feed` |
| **DONKI** | Solar flares/events | `DONKI/FLR` |
| **EPIC** | Earth imagery | `EPIC/api/natural` |

### 🛰 ISS Tracking

| API | Purpose | Endpoint |
|-----|---------|----------|
| **WhereTheISS.at** | Real-time ISS Position | `/v1/satellites/25544` |
| **Open-Notify** | ISS fallback | `/iss-now.json` |
| **Satellites.fly.dev** | Next passes | `/passes/25544` |

### ☀️ NOAA Space Weather

| Purpose | Endpoint |
|---------|----------|
| K-index | `wing-kp.json` |
| Geomagnetic Forecast | `3-day-geomag-forecast.json` |
| Solar Proton Storm | `solar-proton-event.json` |

---

## ⏱ Data Refresh Intervals

| Data Source      | Frequency     | Real-Time? |
|------------------|---------------|------------|
| ISS Position     | Every 1–5 sec | ✅ Yes     |
| NASA APOD        | Daily         | ⏳         |
| Asteroid Feed    | Daily         | ⏳         |
| Solar Flares     | 30–60 mins    | ⏱         |
| Earth View       | ~1–2 hrs      | ⏱         |

---

## 💡 Features in Action

- 📌 Dynamic alert badges for X/M-class flares
- 🌐 Location-aware ISS visibility estimation
- 🎯 Hazardous object detection & alerts
- 🎨 Responsive, immersive UI with glass cards
- 🌐 Offline mode with fallback JSONs (coming soon)

---

## 🛣️ Roadmap

- [ ] 🌍 Add WebSocket ISS live path animation  
- [ ] 📧 Email alerts for solar flares & NEOs  
- [ ] 📊 Historical graphing of flare events  
- [ ] 🔓 User login to save favorite locations  
- [ ] 🌐 Multi-language localization  

---

## 🧠 Why AstroGuardian?

AstroGuardian is **not just a dashboard** — it’s an experience:

- **For space lovers**: Follow space events as they unfold.
- **For students & educators**: Learn about celestial threats, events, and phenomena.
- **For developers**: Explore a modular Flask-based API integration stack.

---

## 🧑‍💻 Author

**Drishya Tomar**  
📎 GitHub: [@drishyatomar2904](https://github.com/drishyatomar2904)  

## 🌌 Final Thought

> _"The cosmos is within us. We are made of star stuff. We are a way for the universe to know itself."_  
> — Carl Sagan

> **AstroGuardian** — because the universe deserves a real-time dashboard.


