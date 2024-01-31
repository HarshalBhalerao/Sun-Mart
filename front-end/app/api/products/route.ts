import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const productData = await axios.get("http://localhost:3030/products");
      return NextResponse.json(productData.data, { status: 200 });
    } catch (exceptions) {
      if (exceptions instanceof Error) console.error(exceptions);
      // If there is an error, you might want to return an appropriate response
      return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}