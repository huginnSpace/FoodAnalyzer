@echo off
SETLOCAL
cd /d "%~dp0"

echo Cleaning node_modules...
rmdir /s /q node_modules 2>nul

echo Installing dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo Failed to install dependencies
    pause
    exit /b 1
)

echo Starting development server...
call npm run dev
if %ERRORLEVEL% neq 0 (
    echo Failed to start development server
    pause
    exit /b 1
)

pause