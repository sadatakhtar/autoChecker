#!/usr/bin/env bash

JAVA_VERSION="17.0.10-amzn"


source "/home/sadat/.sdkman/bin/sdkman-init.sh"
sdk use java $JAVA_VERSION

npx react-native run-android