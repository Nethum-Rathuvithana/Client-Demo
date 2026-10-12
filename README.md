# Cleopatra Nightclub — Colombo (Liberty Plaza)
### Premium Nightlife Venue & VIP Entertainment Client Demo Website

> **Live GitHub Pages URL:** [https://nethum-rathuvithana.github.io/Client-Demo/](https://nethum-rathuvithana.github.io/Client-Demo/)

---

## 🌟 Executive Overview

A bespoke, high-converting digital experience designed specifically for **Cleopatra Nightclub**, Colombo’s premier nightlife and entertainment venue situated at **Liberty Plaza, Colombo 03, Sri Lanka**.

This website balances ancient Egyptian opulence with contemporary electronic music culture, cutting-edge Void Acoustics sound, and curated VIP bottle service.

---

## 🚀 Live Demo Deployment (GitHub Pages)

This project is built as a zero-dependency, ultra-lightweight Single Page Application (total footprint < 120 KB). It requires **zero `node_modules`** and **zero backend servers**, saving hard drive space while delivering instantaneous global CDN loading times.

### How to Enable GitHub Pages (One-Time Setup in GitHub):
1. Navigate to the GitHub repository: [https://github.com/Nethum-Rathuvithana/Client-Demo](https://github.com/Nethum-Rathuvithana/Client-Demo)
2. Click **Settings** (top right tab).
3. In the left navigation sidebar, select **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`
   - **Branch:** Select `main` and folder `/ (root)`
5. Click **Save**.
6. Within 60 seconds, your site is live at:
   👉 **`https://nethum-rathuvithana.github.io/Client-Demo/`**

---

## 👑 Creative Direction & Visual Identity

- **Obsidian Black (`#070709` / `#0A0A0E`):** Deep, velvety nocturnal backdrop.
- **Antique Gold (`#D4AF37` / `#FFE082` / `#AA771C`):** Luxurious shimmers, art-deco borders, and golden headings.
- **Royal Egyptian Purple (`#2A0845` / `#1A052C`):** Atmospheric ambient radial lighting glows.
- **Warm Ivory (`#F5F2EB`):** High-contrast, legible editorial text.
- **Typography:** `Cinzel` (ancient luxury serif), `Playfair Display`, and `Plus Jakarta Sans` (modern UI sans-serif).
- **Egyptian Motifs:** Delicate geometric art-deco line dividers, ankh crowns, and ambient glowing highlights.

---

## 💎 Features & Sections

### 1. Refined Responsive Navigation
- Sticky glassmorphic navbar with gold brand mark: **CLEOPATRA COLOMBO • LIBERTY PLAZA**.
- Quick navigation: Home, Events, Venue, Lineup, Gallery, Contact.
- 1-click **Book VIP Table** action & **Admin Portal** button.
- Accessible mobile drawer menu with touch and keyboard support.

### 2. Cinematic Hero Experience
- High-contrast venue atmosphere photography.
- Distinctive headline: *"AN EXPERIENCE BEYOND THE ORDINARY"*.
- Verified venue metadata pills:
  - 📍 *Liberty Plaza, Colombo 03*
  - 🕒 *Wed – Sun | 10:00 PM – 4:30 AM*
  - 🔊 *Void Acoustics 30kW Custom Rig*

### 3. Featured Upcoming Event with Live Countdown
- Highlighted marquee event with live ticking countdown clock (Days, Hours, Minutes, Seconds).
- Displays headliner, date, time, pricing guidance (LKR), remaining VIP booths, and 1-click RSVP.

### 4. Filterable Upcoming Events Directory
- Editorial-style cards for upcoming club nights.
- Real-time search by DJ name, event title, or musical genre.
- Category filters:
  - *All Events*
  - *International Guests*
  - *House & Techno*
  - *Afro & Melodic*
  - *Hip-Hop & R&B*
  - *Special Galas*
- Displays cover charge (LKR), table prices, and remaining booth allocations.

### 5. Individual Event Detail Modal (`#/events/:id`)
- Shareable URL structure for every event.
- Detailed itinerary and lineup timetable (e.g. 10 PM Warm-up, 1 AM Main Showcase).
- Strict dress code and admission criteria (21+, physical NIC/Passport).
- Instant button to pre-fill the table reservation form with the event selected.

### 6. The Venue Experience
- Explores Cleopatra's 4 architectural entertainment zones:
  1. **The Pharaoh's Mainstage:** Center dancefloor, Void Acoustics audio, 360° laser array.
  2. **Anubis VIP Mezzanine:** Elevated private booths with dedicated bottle concierge and private security.
  3. **Giza Mixology Sanctuary:** Gold-leaf artisanal cocktails and vintage champagne towers.
  4. **Nile Shisha Terrace:** Open-air alfresco chillout lounge with premium organic shisha.

### 7. Sonic Curators & Resident Artists
- Flexible artist showcase highlighting Colombo’s top electronic DJs:
  - **DJ Mark Kross** (Melodic Techno / Resident)
  - **DJ Tara Vance** (Afro-House / Resident Curator)
  - **DJ Dimitri Vance** (Progressive House / Peak-Time)
  - **DJ Kiara Silva** (Urban R&B & Deep Grooves)

### 8. Visual Gallery & Interactive Lightbox
- High-resolution atmospheric photography of past events, cocktails, and crowd energy.
- Category filters (*Atmosphere, VIP Lounge, Mixology, Crowd*).
- Fullscreen lightbox with previous/next controls, image captions, and keyboard arrows navigation.

### 9. Location, Dress Code & VIP Reservation Form
- Verified Liberty Plaza address, telephone, and direct WhatsApp hotline (+94 77 123 4567).
- Real-time VIP Table Reservation Form:
  - Name, Phone / WhatsApp, Email, Date, Event selector, Party size (2 to 20+), Seating tier, Bottle preferences.
  - Generates reservation reference code (e.g., `#CLEO-8491`).
  - Automatically saves enquiry into the local CRM store.
  - Launches celebration modal with 1-click WhatsApp concierge notification.

### 10. Built-in Admin Management Portal (`#/admin`)
- Accessible via the top bar or header with 1 click.
- **Overview Dashboard:** Live counters for Active Events, Pending Enquiries, Confirmed Guests, and Gallery Media.
- **Events Manager:** Create new events, delete events, toggle "Featured" status with instant live homepage sync.
- **Table Bookings CRM:** Real-time inbox of all incoming table reservations with status updater (*New*, *In Progress*, *Confirmed*, *Archived*), customer details, and 1-click WhatsApp chat.
- **Gallery Manager:** Add new photos with image URL, title, and category.
- **Demo Controls:** "Reset to Pristine Default State" button to restore seed data anytime.

---

## 🛠️ Architecture & Tech Stack

- **HTML5:** Semantic, accessible markup.
- **Styling:** Tailwind CSS (via CDN) + Custom Egyptian gold design tokens (`styles.css`).
- **Typography:** Google Fonts (`Cinzel`, `Playfair Display`, `Plus Jakarta Sans`).
- **Icons:** Lucide Icons.
- **Data Persistence:** `StorageManager` leveraging browser `localStorage` seeded with realistic Colombo nightlife data.
- **Zero Node Dependencies:** Instant download, instant open, zero disk space bloat.

---

## 🔄 Reusability for Future Client Demos

The underlying code is completely modular:
- Swap out `SEED_DATA.venue`, `events`, and `gallery` inside `data.js` to instantly rebrand this template for other luxury nightlife venues, boutique hotels, high-end restaurants, or private members' clubs.
- All styles, modals, lightbox engines, and CRM tables adapt dynamically to the data provided.

---

## 📞 Venue Contact Details (Colombo)

- **Venue:** Cleopatra Nightclub
- **Location:** Liberty Plaza, R. A. De Mel Mawatha, Colombo 03, Sri Lanka
- **Operating Hours:** Wednesday – Sunday | 10:00 PM – 04:30 AM
- **VIP Hotline:** +94 11 257 4899
- **WhatsApp Concierge:** +94 77 123 4567
- **Email:** `vip@cleopatracolombo.lk`
