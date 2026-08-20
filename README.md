# 🌤️ Weather Web App - React.js & OpenWeather API

A responsive and user-friendly weather web application built with **React.js and Vite**. The application uses the **OpenWeather API** to fetch and display real-time weather information based on the user's searched location.

## 🚀 Features

* 🌍 Search weather by city
* 🌡️ Display current temperature
* ☁️ Display weather conditions
* 💨 Show additional weather information
* 📱 Responsive design
* ⚡ Real-time weather data
* ⚛️ Built with React.js
* 🔥 Powered by Vite
* 🌐 Integrated with OpenWeather API

## 🛠️ Technologies Used

* **React.js**
* **Vite**
* **JavaScript**
* **HTML5**
* **CSS3**
* **OpenWeather API**

## 📋 Prerequisites

Before running this project, make sure you have **Node.js** and **npm** installed on your computer.

Check your installed versions:

```bash
node -v
npm -v
```

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/iftikharhussain6266/Weather-Web-App-reactjs-openweatherapi.git
```

### 2. Navigate to the Project

```bash
cd Weather-Web-App-reactjs-openweatherapi
```

### 3. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This command automatically creates the `node_modules` folder and installs all dependencies from `package.json`.

> **Note:** You don't need to manually create the `node_modules` folder.

## 🔑 OpenWeather API Key Setup

This project requires an **OpenWeather API key** to fetch weather information.

### 1. Get Your API Key

Create an account on OpenWeather and generate an API key.

### 2. Create a `.env` File

Create a `.env` file in the root directory of the project:

```text
Weather-Web-App-reactjs-openweatherapi/
├── src/
├── public/
├── .env
├── package.json
├── vite.config.js
└── README.md
```

### 3. Add Your API Key

Since this project uses **Vite**, the environment variable should start with `VITE_`.

Add the following to your `.env` file:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual OpenWeather API key.

> ⚠️ **Important:** Never commit your `.env` file or expose your API key publicly on GitHub.

Make sure `.env` is included in your `.gitignore`:

```gitignore
node_modules
.env
dist
```

## ▶️ Run the Project

After installing the dependencies and adding your API key, start the development server:

```bash
npm run dev
```

Vite will display a local development URL in your terminal, usually:

```text
http://localhost:5173/
```

Open the URL in your browser to use the application.

## 📦 Available Scripts

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```text
Weather-Web-App-reactjs-openweatherapi/
│
├── public/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> The exact structure may vary depending on the implementation.

## 🌦️ OpenWeather API

The application uses the **OpenWeather API** to retrieve real-time weather information.

An API key is required for the application to work properly. Make sure you create your `.env` file and add your API key before starting the application.

## 🎯 Project Purpose

This project was created to practice and demonstrate:

* React.js development
* Vite project setup
* REST API integration
* Fetching data from external APIs
* React components
* State management
* Environment variables
* Responsive web design

## 📸 Screenshot

You can add a screenshot of your application here:

```md
![Weather Web App Screenshot](./screenshot.png)
```

## 👨‍💻 Author

**Iftikhar Hussain**

GitHub: **iftikharhussain6266**

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

**Made with ❤️ by Iftikhar Hussain**
