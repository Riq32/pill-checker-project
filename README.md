# PillChecker 💊

A modern, React-based healthcare interface that decodes complex FDA drug labels into a scannable format, helping users quickly identify medication interaction warnings and safety alerts. 

## 🚀 Features

* **Direct FDA Integration:** Queries the OpenFDA API in real-time to fetch Structured Product Labeling (SPL) data.
* **Smart Interaction Checker:** Evaluates potential interactions between two medications by cross-referencing contraindication, drug interaction, and warning fields using substring matching.
* **Data Cleaning & Deduplication:** Intercepts highly redundant OpenFDA payload data at the service layer, deduplicating entries via composite keys (generic name + dosage form) and sorting by brand recognition to ensure high-quality search results.
* **Persistent Theme Management:** App-wide dark and light mode built with a custom React Context and Tailwind CSS v4, seamlessly falling back to the user's OS-level `prefers-color-scheme`.
* **Glassmorphism Design:** A fully responsive, accessible UI utilizing a teal and indigo palette, soft shadows, and dynamic background overlays.

## 🛠 Tech Stack

* **Frontend:** React (Vite), React Router DOM
* **Styling:** Tailwind CSS v4, Lucide React (Icons)
* **Architecture:** Context API (Theme state management), Service-oriented API layer
* **Data Source:** [OpenFDA API](https://open.fda.gov/) (Drug Label endpoint)

## 📦 Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Riq32/pill-checker-project.git