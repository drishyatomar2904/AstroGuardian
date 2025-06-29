<h1 align="center">
  🌌 AstroGuardian
</h1>

<p align="center">
  <strong>A real-time space intelligence dashboard powered by NASA, NOAA, and global space APIs.</strong><br>
  <em>Monitor the cosmos — from ISS tracking to solar flares — in one seamless platform.</em>
</p>

<p align="center">
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjFyYnhzM3JjZXhyMWFnbWg2dmI2MGxpMW5ndWx3YXM5YzBnZnpwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9jWAWNhfyr3zkJi/giphy.gif" width="700"/>
</p>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/drishyatomar2904/AstroGuardian" alt="Top Language">
  <img src="https://img.shields.io/github/last-commit/drishyatomar2904/AstroGuardian" alt="Last Commit">
</p>

---

## 🚀 Overview

**AstroGuardian** is a real-time, responsive web platform that displays live space intelligence. Designed with space-lovers, scientists, and developers in mind, it integrates multiple APIs to bring:

- 🛰 ISS tracking & predictions  
- ☄️ Asteroid proximity alerts  
- 🔥 Solar flare activity (X/M/C/B-class)  
- 📸 NASA's Astronomy Picture of the Day  
- 🌍 Earth-facing solar imagery  
- 🌐 Space weather forecasts

---

## 🌠 Live Modules

| 🌐 Module | 🌟 Description |
|----------|----------------|
| 🛰️ **ISS Tracker** | Real-time position, speed, altitude & next pass visibility |
| ☄️ **Asteroid Monitor** | NEOs, hazard detection, velocity, size & approach distance |
| ☀️ **Solar Flare Watch** | Forecasts + real-time X/M/C-class events & visual stats |
| 📷 **NASA APOD** | Daily featured space image with scientific explanation |
| 🧪 **Space Weather** | Planetary K-index, geomagnetic storm alerts & solar radiation index |

---

## 📊 Data Visualization Highlights

- 🌌 Live ISS orbit and altitude meter  
- 🔥 Flare intensity bar + class-wise distribution  
- 🌎 SDO/NASA Earth imagery panel  
- 📈 Chart.js forecasting for solar activity  
- 🧠 Smart fallback & offline-ready JSON cache  

---

## 🔧 Tech Stack

| Layer       | Tools Used |
|-------------|------------|
| **Frontend**| HTML5, Bootstrap 5, CSS3, JS, Chart.js, Animate.css |
| **Backend** | Python (Flask), Jinja2, Threaded async API fetchers |
| **Data**    | NASA APIs, NOAA SWPC, WhereTheISS.at, OpenNotify |
| **UI/UX**   | Dark mode, glassmorphism, animated loaders, responsive design |

---

## 📡 API Sources

### 🚀 NASA APIs

| API | Purpose | Endpoint |
|-----|---------|----------|
| APOD | Astronomy Pic of the Day | `/planetary/apod` |
| NEO Feed | Near-Earth Object stats | `/neo/rest/v1/feed` |
| DONKI | Solar flare activity | `/DONKI/FLR` |
| EPIC | Real-time Earth imagery | `/EPIC/api/natural` |

### 🛰 ISS Tracking

| API | Purpose | Endpoint |
|-----|---------|----------|
| WhereTheISS.at | ISS position tracking | `/v1/satellites/25544` |
| Open-Notify | Fallback tracking | `/iss-now.json` |
| Satellites.fly.dev | ISS pass predictions | `/passes/25544` |

### ☀️ NOAA Space Weather

| Purpose | Endpoint |
|---------|----------|
| Geomagnetic Forecast | `3-day-geomag-forecast.json` |
| Solar Proton Events | `solar-proton-event.json` |
| X-ray Flares (7-day) | `xrays-7-day.json` |

---

## ⏱ Data Refresh Intervals

| Data Source        | Frequency     | Real-Time |
|--------------------|---------------|-----------|
| ISS Position       | Every 1–5 sec | ✅ Yes    |
| NASA APOD          | Daily         | ⏳        |
| Asteroid Feed      | Daily         | ⏳        |
| Solar Flares       | Every 30–60m  | ⏱ Near RT |
| EPIC Earth Imagery | Every 1–2 hrs | ⏱        |

---

## 📸 Screenshots

<table>
  <tr>
    <td align="center"><strong>Dashboard Overview</strong></td>
    <td align="center"><strong>Real-Time ISS Tracker</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/58cbccdc-4525-4d1e-b316-c22ea9a53f9b" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/e224c145-8ea3-4492-bd9c-ca127aba5ef6" width="100%"/></td>
  </tr>
  <tr>
    <td align="center"><strong>Solar Flare Visuals</strong></td>
    <td align="center"><strong>Asteroid Monitoring</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/ddc562d7-749e-4bff-ade6-a3a3bc460b83"/></td>
    <td><img src="https://github.com/user-attachments/assets/2848ef82-f42c-4cc5-9451-5da614bacece" width="100%"/></td>
  </tr>




  <tr>
    <td align="center"><strong>NASA APOD Viewer</strong></td>
    <td align="center"><strong>Space Weather Analytics</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/646863ee-e2f2-476c-88fd-f38a23c0b1e9" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/eb6c9181-9cfd-44bb-94db-b84f7861a14e" width="100%"/></td>
  </tr>
</table>


## 💡 Features in Action

- 📌 Dynamic glow alerts for X/M-class flares  
- 🎯 Hazardous asteroid detection + alert banners  
- 🌐 ISS visibility based on your current location  
- 🎨 Interactive UI with real-time cards & visual pulses  
- 🔁 Progressive fallback mechanism with offline-ready JSON  

---

## 🛣️ Roadmap

- [ ] 🌍 WebSocket ISS orbit path visualization  
- [ ] 📧 Email alerts for flares/NEO encounters  
- [ ] 📊 Historical flare graphing + time filters  
- [ ] 🌐 Multilingual UI (EN, HI, FR, etc.)  
- [ ] 🔓 User login & location bookmarks  

---

## 🧑‍💻 Developed By

**Drishya Tomar**  
🔗 [GitHub Profile](https://github.com/drishyatomar2904)

---

## 🌌 Final Thought

> _“The cosmos is within us. We are made of star stuff.”_  
> — Carl Sagan

> **AstroGuardian** — Because the universe deserves a real-time system. 🛰




