import { NextResponse } from "next/server";
import { getSheets, SPREADSHEET_ID } from "@/lib/googleSheets";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, buildClubId, registerNumber, email, password } = body;

    if (!name || !buildClubId || !registerNumber || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const sheets = await getSheets();

    const read = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!D:D",
    });

    const emails = read.data.values?.flat().map(String) || [];
    if (emails.includes(email)) {
      return NextResponse.json({ message: "Email already registered" }, { status: 400 });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, buildClubId, registerNumber, email, password, new Date().toISOString()]],
      },
    });

    return NextResponse.json({ message: "Registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: "Server error, try again later" }, { status: 500 });
  }
}
