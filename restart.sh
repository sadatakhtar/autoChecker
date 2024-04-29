#!/usr/bin/env bash

ADB=/home/sadat/Android/Sdk/platform-tools/adb
APP_NAME="com.autochecker"

${ADB} root
${ADB} shell am force-stop ${APP_NAME}
${ADB} shell am start -n ${APP_NAME}/.MainActivity