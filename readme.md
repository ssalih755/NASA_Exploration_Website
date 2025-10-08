# 🚀 nasa-cli

A simple command-line interface (CLI) tool that interacts with the [NASA Open APIs](https://api.nasa.gov/) to retrieve **Near Earth Objects (NEOs)** based on a given date.

---

## ✨ Features
- Allows creation of new users and login functionality.
- Stores user credentials PostgreSQL database.
- Fetches near earth object data from NASA’s API.
- Allows users to specify start date to see NEOs.
- Displays asteroid details such as:
    - Name
    - Estimated diameter
    - Potentially hazardous status
    - Approach date and velocity
- Allows users to save favorite asteroids to the database.
- Includes a Spring Boot web server (`NasaApplication`) to expose NEO data via REST endpoints.

---

## 📦 Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/ssalih755/NASA_UserManagement_CLI.git
   ```

---

## 🔑 Getting a NASA API Key
NASA provides free API keys for accessing their APIs.

- Visit the [NASA API key signup page](https://api.nasa.gov/)
- Fill out the form with your name and email.
- Check your email for your personal API key.
- Copy the key and add it to your environment:
  ```cmd
  set NASA_API_KEY=your_api_key_here
  ```
  Or add to IntelliJ Run Configuration as `NASA_API_KEY=your_api_key_here` in Environment variables.

**Optionally, you can use the default `DEMO_KEY` provided by NASA:**
- If you do not set a `NASA_API_KEY`, the application will use `DEMO_KEY` automatically.
- **Constraints for `DEMO_KEY`:**
  - Hourly Limit: 30 requests per IP address per hour
  - Daily Limit: 50 requests per IP address per day

> For production or frequent use, it is recommended to request your own API key to avoid hitting these limits.

---

## 🌐 NasaApplication (Spring Boot Web App)

`NasaApplication` is a Spring Boot web application that exposes REST endpoints to interact with NASA's Near Earth Object (NEO) API. It allows users to fetch NEO data for specific dates via HTTP requests.

### 🚀 How to Run NasaApplication

1. **Set the NASA API Key**
   - See instructions above for setting the environment variable.
   - If not set, the app will use `DEMO_KEY` (see constraints above).

2. **Configure `application.properties`**
   The file `src/main/resources/application.properties` should contain:
   ```
   nasa.api.key=${NASA_API_KEY}
   ```
   This ensures the application reads the API key from your environment.

3. **Build and Run the Application**
   - Using Maven:
     ```cmd
     mvn spring-boot:run
     ```
   - Or run `NasaApplication.java` directly from IntelliJ IDEA.

4. **Access the Web Endpoints**
   The application will start on `http://localhost:8080` (default).
   You can interact with the REST endpoints (see your controller classes for available routes).

---

## 🖥️ CLI Usage
...existing code...
