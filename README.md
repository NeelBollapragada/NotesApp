# React Native Notes App

Very simple notes app with user authentication and notes saved to the cloud.

This project was used to learn React Native and is taken from Traversy Media ([youtube video](https://www.youtube.com/watch?v=bCpFbERgj7s)).

## App Features

- Notes screen to view, add, edit and remove notes
- Authentication and cloud storage for each note

## Implementation

- Built with **React Native** using **Expo** and **expo-router**
- **Appwrite** used for authentication and storing users notes

## Usage

1. Launch the app and register using email and password
2. Add and view notes
3. Edit or remove notes

## Project Structure

- `Screens`:

  - `index.jsx` - Homepage
  - `notes/index.jsx` - Main notes page
  - `auth/index.jsx` - Register/login page

- `services` - All services used
  - `appwrite.js`, `authService.js`, `databaseService.js` - Appwrite authentication + current user information, interacting with appwrite database functions
  - `noteService.js` - Methods for getting, adding, updating, and removing notes

## Potential Improvements and Modifications

- Add collaborative notes between users functionality
- Add password protection for notes
