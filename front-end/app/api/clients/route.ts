import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const clientData = await axios.get(process.env.BASE_URL + "clients");
    return NextResponse.json(clientData.data, { status: 200 });
  } catch (exceptions) {
    if (exceptions instanceof Error) console.error(exceptions);
    // If there is an error, you might want to return an appropriate response
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const response = await axios.post(process.env.BASE_URL +"clients/post", request);
    return NextResponse.json(response.data, { status: 201 });
  } catch (exceptions) {
    if (exceptions instanceof Error) console.error(exceptions);
    // If there is an error, you might want to return an appropriate response
    return NextResponse.json({ error: "Failed to add data" }, { status: 500 });
  }
}
