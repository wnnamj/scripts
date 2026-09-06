#!/bin/bash

# variables
aeVersion=26.3
sync="rsync -aPvH --info=progress2"

# directories
aeRepo=~/Documents/Projects/repositories/adobe/afterfx
aePrefRepo=~/Documents/Projects/repositories/preferences/afterfx/$aeVersion
aePrefLocal=~/.config/afterfx/$aeVersion

# create folder
mkdir -p $aePrefRepo

# keyboard shortcuts
printf "\n====== syncing keyboard shortcuts... ======\n"
$sync "$aePrefLocal/aeks/" $aeRepo/aeks
printf "\nkeyboard shortcuts synced!\n"

# workspaces
printf "\n====== syncing workspaces... ======\n"
$sync "$aePrefLocal/ModifiedWorkspaces" $aePrefRepo
$sync "$aePrefLocal/OriginalUserWorkspaces" $aePrefRepo
$sync "$aePrefLocal/Workspaces.xml" $aePrefRepo
printf "\nworkspaces synced!\n"

# preferences
printf "\n====== syncing preferences... ======\n"
$sync $aePrefLocal/"Adobe After Effects"* $aePrefRepo
printf "\npreferences synced!\n"

# clean up
printf "\n====== finding temporary files... ======\n"
find $aeRepo/ $aePrefLocal/ $aePrefRepo/ -name '*._*'
find $aeRepo/ $aePrefLocal/ $aePrefRepo/ -name '*._*' -delete
find $aeRepo/ $aePrefLocal/ $aePrefRepo/ -name '*.DS*'
find $aeRepo/ $aePrefLocal/ $aePrefRepo/ -name '*.DS*' -delete
find $aeRepo/ $aePrefLocal/ $aePrefRepo/ -name '*.log*'
find $aeRepo/ $aePrefLocal/ $aePrefRepo/ -name '*.log*' -delete
printf "\nclean up complete!\n"

# complete
printf "\n====== preferences sync complete!! ======"
