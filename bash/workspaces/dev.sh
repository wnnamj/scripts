#!/bin/bash

# variables
browser=Zen
terminal=Ghostty
indexPath=~/Documents/Projects/repositories/jmdesign/index.html

# open tabs
$browser "https://www.w3schools.com/html"
$browser "https://www.w3schools.com/css/default.asp"
$browser "https://github.com/wnnamj"

# open index file
$browser -new-window $indexPath
open -n -a Helium $indexPath
open -n -a Safari $indexPath

# open repo folder
open -R ~/Documents/Projects/repositories/jmdesign
nvim ~/Documents/Projects/repositories/jmdesign/
