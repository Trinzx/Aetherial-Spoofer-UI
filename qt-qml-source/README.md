# Nova Red Loader - Qt 6 / QML Source

This directory contains the production-ready source code for the **Nova Red** loader UI mockup, built with **Qt 6** and **QML**.

## Directory Structure
- `main.cpp`: The C++ entry point that initializes the QML engine and registers the data models.
- `AppWindow.qml`: The root application window and view manager.
- `Theme.qml`: Aesthetic tokens (colors, spacing, radii) for a consistent dark premium look.
- `LoginPage.qml`: Cinematic hero login screen with animated background hooks.
- `Sidebar.qml`: Glassmorphism navigation sidebar with smooth selection states.
- `TopBar.qml`: Header area with user profile and session info.
- `DashboardPage.qml`: Hero summary, stats cards, and quick actions.
- `NovaModel.h/cpp`: C++ back-end model providing placeholder sample data for the product catalog.

## Requirements
- Qt 6.2+
- CMake or qmake
- C++17 compliant compiler

## How to Run (Directly)
1. Ensure the Qt environment is in your path.
2. Open the project in **Qt Creator**.
3. Create a `.qrc` resource file and add the `.qml` files to the root `/` prefix.
4. Build and Run.

## Architecture Notes
The implementation follows a **Model-View-Delegate** pattern. The C++ `NovaModel` handles data management, while QML handles the rendering and animations (Page transitions, hover states).
