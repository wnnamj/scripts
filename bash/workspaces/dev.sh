#!/bin/bash

# variables
browser=Zen
terminal=Ghostty

# open tabs
$browser "https://www.w3schools.com/html"
$browser "https://www.w3schools.com/css/default.asp"
$browser "https://github.com/wnnamj"

# open index file
$browser -new-window ~/Documents/Projects/repositories/jmdesign/index.html

# open repo folder
open -R ~/Documents/Projects/repositories/jmdesign
nvim ~/Documents/Projects/repositories/jmdesign/
