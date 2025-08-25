// lib/googleSheets.js
import { google } from "googleapis";
import path from "path";

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(process.cwd(), "credentials.json"), // your service account file
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function getSheets() {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });
  return sheets;
}

export const SPREADSHEET_ID = "1zGt5JQcu9IOPxCRgwPV3KwcyEMzkdL7TckqIs4oNZqo"; // from Google Sheets URL
