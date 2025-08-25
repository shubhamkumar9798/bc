import { NextResponse } from "next/server";
import { getSheets, SPREADSHEET_ID } from "@/lib/googleSheets";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const sheets = await getSheets();

    // Include all columns to safely access D & E
    const read = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:F", // all relevant columns
    });

    const users = read.data.values || [];

    // Column D = email (index 3), Column E = password (index 4)
    const user = users.find((row) => row[3] === email && row[4] === password);

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
