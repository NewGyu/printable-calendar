import MonthCalendar from "@/components/MonthCalendar";
const months = Array.from({ length: 12 }, (_, i) => i + 1);

export default async function Page({
  params
}: {
  params: Promise<{ year: number }>;
}) {
  const { year } = await params;
  return (
    <div>
      <h1 className="font-extrabold text-center text-3xl">{year}年</h1>

      <div className="grid grid-cols-3 gap-4">
        {months.map((month) => (
          <MonthCalendar key={month} year={year} month={month} />
        ))}
      </div>
    </div>
  );
}
