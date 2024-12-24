import { getHolidays } from "@/data/holiday";

export async function GET(
  request: Request,
  { params }: { params: Promise<{year: number}> }
) {
  return Response.json(getHolidays((await params).year));
}
