import MonthCalendar from "@/components/MonthCalendar";

export default async function Page({
     params
}: {
    params: Promise<{ year: number}>
}) {
    const { year } = await params;
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    return (
        <div>
            <div>
                <h1 className="font-extrabold text-center text-3xl">{ year }年</h1>
            </div>

            <div>
            {
                months.map((month) => (
                    <div key={month}>
                        <MonthCalendar year={year} month={month} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}
