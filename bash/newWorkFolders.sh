#!/bin/bash

db=~/Documents/Projects/work/NEW_PROJECT

## 01 - Project Files

mkdir -p $db'/[01] PROJECT FILES/AE JOBS/_OLD SAVES'
mkdir -p $db'/[01] PROJECT FILES/ILLUSTRATOR'
mkdir -p $db'/[01] PROJECT FILES/PREMIERE JOBS'

## 02 - Media

mkdir -p $db'/[02] MEDIA/IMAGES'
mkdir -p $db'/[02] MEDIA/RAW'
mkdir -p $db'/[02] MEDIA/VIDEO'

## 03 - Graphics

mkdir -p $db'/[03] GRAPHICS/ASSETS'
mkdir -p $db'/[03] GRAPHICS/FONTS'
mkdir -p $db'/[03] GRAPHICS/INSPIRATION'
mkdir -p $db'/[03] GRAPHICS/RENDERS'

## 04 - Audio

mkdir -p $db'/[04] AUDIO/MUSIC'
mkdir -p $db'/[04] AUDIO/SOUND EFFECTS'
mkdir -p $db'/[04] AUDIO/VOICE/PROCESSED'
mkdir -p $db'/[04] AUDIO/VOICE/RAW'
mkdir -p $db'/[04] AUDIO/VOICE/SCRATCH'

## 05 - Exports

mkdir -p $db'/[05] EXPORTS/OFFLINE'
mkdir -p $db'/[05] EXPORTS/ONLINE/TV'
mkdir -p $db'/[05] EXPORTS/ONLINE/WEB'
mkdir -p $db'/[05] EXPORTS/STYLEFRAMES'
mkdir -p $db'/[05] EXPORTS/TESTS'

## XX - Admin

mkdir -p $db'/[XX] ADMIN'

## open created folder
open -R "$db"
