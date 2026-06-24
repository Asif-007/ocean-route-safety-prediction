# 🌊 Ocean Route Safety Prediction

A machine learning project that predicts whether an ocean route is **safe or unsafe** based on real ocean sensor data — combined with an interactive React dashboard to explore and visualize the predictions.

---

## 📌 Project Overview

This project uses the **California Cooperative Oceanic Fisheries Investigations (CalCOFI) bottle dataset** containing ocean sensor readings (depth, temperature, salinity, oxygen levels) to:

- Clean and preprocess large-scale real-world oceanographic data
- Engineer meaningful features like `WaterCondition`, `DensityIndex`, and `VisibilityRisk`
- Train ML models to predict ocean temperature, oxygen levels, and route safety
- Visualize insights through an interactive React frontend dashboard

---

## 🧠 Machine Learning Pipeline (`ML_CBP.ipynb`)

### Dataset
- **Source:** `bottle.csv` — CalCOFI ocean sensor dataset
- **Key Features Used:** `Depthm`, `T_degC`, `Salnty`, `O2ml_L`

### Steps

**1. Data Cleaning**
- Selected relevant columns
- Handled missing values using mean/median imputation per column

**2. Feature Engineering**
- `SafeRoute` — Binary label: 1 (safe) if depth > 50m, temp 2–30°C, salinity 30–38, O2 > 2 ml/L
- `WaterCondition` — Categorical: Normal / Poor / Danger based on temp and oxygen
- `DensityIndex` — Derived: `Salinity − (Temperature × 0.2)`
- `VisibilityRisk` — Binary: Low Visibility Risk / Normal

**3. Models Trained**

| Model | Task | Result |
|---|---|---|
| Linear Regression | Predict Temperature from Depth + Salinity | R² score evaluated |
| Linear Regression | Predict Oxygen from Depth + Salinity | R² score evaluated |
| Logistic Regression | Classify SafeRoute (0 or 1) | Accuracy + Confusion Matrix |

**4. Visualizations**
- Correlation heatmap (Seaborn)
- Confusion matrix for Logistic Regression
- Feature and cleaned dataset previews

---

## 💻 Frontend Dashboard (React + Recharts)

An interactive web dashboard built with **React**, **Tailwind CSS**, and **Recharts**.

### Pages

| Page | Description |
|---|---|
| **Dashboard** | Summary stats, Temperature vs Depth line chart, Salinity vs Oxygen scatter plot (color-coded by safety) |
| **Analytics** | Avg temperature by water condition, oxygen level histogram, safe vs unsafe pie chart |
| **Data Explorer** | Filterable + paginated table of all ocean records (filter by depth range and safety status) |
| **Route Predictor** | Interactive sliders to input ocean parameters and instantly evaluate route safety |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| ML & Data | Python, Pandas, NumPy, Scikit-learn, Seaborn, Matplotlib |
| Frontend | React, Vite, Tailwind CSS, Recharts |
| Dataset | CalCOFI bottle.csv (real oceanographic sensor data) |

---

## 🚀 Getting Started

### ML Notebook
```bash
# Install dependencies
pip install pandas numpy scikit-learn seaborn matplotlib jupyter

# Run the notebook
jupyter notebook ML_CBP.ipynb
```

### React Dashboard
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📊 Key Insights

- Ocean depth and temperature have a **strong negative correlation** — deeper water is colder
- Higher salinity generally increases the **density index**
- Low oxygen levels (< 2 ml/L) correlate with **higher visibility risk**
- Logistic Regression achieved high accuracy on the engineered SafeRoute classification task

---

## 📁 Project Structure

```
├── ML_CBP.ipynb                  # ML pipeline: cleaning, feature engineering, models
├── bottle.csv                    # Raw CalCOFI ocean sensor dataset
├── src/
│   ├── pages/
│   │   ├── Dashboard.jsx         # Overview stats and charts
│   │   ├── Analytics.jsx         # Analytical visualizations
│   │   ├── DataExplorer.jsx      # Filterable data table
│   │   └── RoutePredictor.jsx    # Interactive safety predictor
│   ├── components/
│   │   ├── StatCard.jsx
│   │   └── SafetyBadge.jsx
│   └── data/
│       └── mockData.js           # Preprocessed dataset for frontend
├── package.json
└── vite.config.js
```

---

## 👤 Author

**[Your Name]**  
B.Tech [Your Branch] | [Your College Name]  
[Your GitHub Profile] | [Your LinkedIn]
