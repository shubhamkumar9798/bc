import { NextResponse } from "next/server";
import { getSheets, SPREADSHEET_ID } from "@/lib/googleSheets";

export async function POST(req) {
  const { email, newPassword } = await req.json();

  try {
    const sheets = await getSheets();
    const read = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:B",
    });

    const users = read.data.values || [];
    const rowIndex = users.findIndex((row) => row[0] === email);

    if (rowIndex === -1) {
      return NextResponse.json({ message: "Email not found" }, { status: 404 });
    }

    // Update password in the row
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `Sheet1!B${rowIndex + 1}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[newPassword]],
      },
    });

    return NextResponse.json({ message: "Password updated successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
