#!/bin/bash
script="/home/john/Mina-DAK/cron.sh"      
min=$(( 24 * 60 ))
rmin=$(( $RANDOM % $min ))
at -f "$script" now+${rmin}min
