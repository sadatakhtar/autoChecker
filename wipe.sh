#!/bin/bash

# Ensure script fails if any command fails
set -e

# Define your React Native app's package name
APP_PACKAGE="com.autochecker"
MAIN_ACTIVITY=".MainActivity"

# Restarting the React Native app using adb commands
echo "Restarting the React Native app..."

# Ensure adb is running as root
adb root

# Stop the app
adb shell am force-stop $APP_PACKAGE

# Clear the app's data (optional, remove this line if you don't want to clear app data)
adb shell pm clear $APP_PACKAGE
adb shell am start -n $APP_PACKAGE/$MAIN_ACTIVITY
echo "React Native app restarted successfully."