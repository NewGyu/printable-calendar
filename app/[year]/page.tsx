import MonthCalendar from "@/components/MonthCalendar";

const months = Array.from({ length: 12 }, (_, i) => i + 1);
const monthsPage1 = months.slice(0, 6);
const monthsPage2 = months.slice(6);

export default async function Page({
  params
}: {
  params: Promise<{ year: number }>;
}) {
  const { year } = await params;
  return (
    <div>
      <h1 className="font-extrabold text-center text-3xl print:hidden">
        {year}年
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {monthsPage1.map((month) => (
          <MonthCalendar key={month} year={year} month={month} />
        ))}
      </div>
      <hr className="break" />
      <div className="grid grid-cols-3 gap-4">
        {monthsPage2.map((month) => (
          <MonthCalendar key={month} year={year} month={month} />
        ))}
      </div>
    </div>
  );
}
