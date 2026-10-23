@echo off
chcp 65001 > nul
title HSK 3 Master - ระบบติวและทดสอบภาษาจีน HSK ระดับ 3
cd /d "%~dp0"
echo ========================================================
echo    Starting HSK 3 Master Web App...
echo    กำลังเปิดโปรแกรม HSK 3 Master สำหรับเตรียมสอบ...
echo ========================================================
python server.py
pause
