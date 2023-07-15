/* Core */
import { NextResponse } from 'next/server'
import data from "../../../blogs.json";

export async function POST(req: Request, res: Response) {

  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500))

  return NextResponse.json({ data: data })
}
