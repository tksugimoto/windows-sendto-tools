@echo off

rem move to batch file's directory
cd /d %~dp0

rem %~f1: 1st arguments file's full path
rem clip: copy input text (CScript's echo)
CScript /NoLogo js\box.js "%~f1" | clip
