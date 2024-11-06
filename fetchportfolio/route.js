// app/api/fetchportfolio/route.js
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Make the GET request to the external API with headers
    const res = await fetch("http://api.issl.ng:7777/ibank/api/v1/getPMCustomerPortfolio3/0858", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Tenantid": "gresham"
      }
    });

    // Check if the response is okay
    if (!res.ok) {
      return NextResponse.json({ message: "Failed to fetch data" }, { status: res.status });
    }

    // Parse and return the response data
    const result = await res.text();
    return NextResponse.json({ data: result }, { status: 200 });

  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
