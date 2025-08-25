import { NextResponse } from "next/server";
import { getSheets, SPREADSHEET_ID } from "@/lib/googleSheets";

export async function GET() {
  try {
    const sheets = await getSheets();

    const read = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Events!A:F",
    });

    const rows = read.data.values || [];
    const headers = rows[0].map(h => h.trim().toLowerCase()); // ✅ normalize headers

    const data = rows.slice(1).map((row) =>
      Object.fromEntries(headers.map((h, i) => [h, row[i] || ""]))
    );

    return NextResponse.json({ events: data });
  } catch (error) {
    console.error("Events fetch error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
