import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get("code") !== null) {
    try {
      const response = await fetch(
        "https://api.simple.taipei/clock/import.php?code=" +
          request.nextUrl.searchParams.get("code"),
      );
      const data = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error: "Error fetching data" });
    }
  }
  return NextResponse.json([
    { id: 1, subject: "化學", startTime: "11:10", endTime: "12:00" },
    { id: 2, subject: "數位邏輯", startTime: "13:10", endTime: "14:00" },
    { id: 3, subject: "自然", startTime: "15:10", endTime: "16:00" },
  ]);
}
