import { type ApiData, verifyAccess } from "@vercel/flags";
import { getProviderData } from "@vercel/flags/next";
import { type NextRequest, NextResponse } from "next/server";

import * as flags from "../../../../lib/flags";

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get("Authorization"));
  if (!access) return NextResponse.json(null, { status: 401 });

  const providerData = getProviderData(flags);
  return NextResponse.json<ApiData>(providerData);
}
