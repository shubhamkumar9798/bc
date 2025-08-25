import { NextResponse } from "next/server";
import { getSheets, SPREADSHEET_ID } from "@/lib/googleSheets";

export async function GET() {
  try {
    const sheets = await getSheets();

    const read = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Events!A:F", // adjust if you have more columns like Poster, Form, etc.
    });

    const rows = read.data.values || [];
    if (rows.length < 2) {
      return NextResponse.json({ events: [] });
    }

    // ✅ Normalize headers from the first row
    const headers = rows[0].map((h) => h.trim().toLowerCase());

    // ✅ Map rows into objects
    const data = rows.slice(1).map((row) =>
      Object.fromEntries(headers.map((h, i) => [h, row[i] || ""]))
    );

    // ✅ Filter only live/current events
    const liveEvents = data.filter((event) => event.type?.toLowerCase() === "current");

    return NextResponse.json({ events: liveEvents }, { status: 200 });
  } catch (error) {
    console.error("Live events fetch error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
