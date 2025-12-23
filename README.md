# Google Apps Script Proxy and Frontend

## Setup

1. Clone this repo
2. Deploy to Vercel (https://vercel.com/new)

This will deploy a serverless API at `/api/gas-proxy` that fetches data from your Google Apps Script web app.

The frontend at `/` fetches the data via this proxy and displays it.

## Usage

- Visit your deployed Vercel app in the browser.
- The page will load and display your Google Sheets data fetched through the proxy.

## Why proxy?

Google Apps Script web apps don’t support CORS properly, so direct fetch calls from browser are blocked.
This proxy bypasses that by server-side fetching and adding CORS headers.
