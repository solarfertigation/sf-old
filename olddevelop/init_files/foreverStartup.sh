#!/bin/bash
sleep 5
cd /home/pi/SF-OLD/olddevelop/
forever start forever.json --watchIgnore '*.log'>>/home/pi/forever_logs/output.log 2>>/home/pi/forever_logs/error.log
