cordova build --release $2
blackberry-deploy -installApp -launchApp -device 169.254.0.1 -password $1 -package platforms/blackberry10/build/device/bb10app.bar
