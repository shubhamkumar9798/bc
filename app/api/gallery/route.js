import { NextResponse } from "next/server";
import { getSheets, SPREADSHEET_ID } from "@/lib/googleSheets";

export async function GET() {
  try {
    const sheets = await getSheets();

    // Assuming Gallery sheet has columns: Title | ImageURL | Description
    const read = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Gallery!A:C",
    });

    const rows = read.data.values || [];
    const data = rows.slice(1).map(([title, image, description]) => ({
      title,
      image,
      description,
    }));

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Gallery fetch error:", error);
    return NextResponse.json({ message: "Failed to fetch gallery" }, { status: 500 });
  }
}
