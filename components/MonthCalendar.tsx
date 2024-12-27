import React from "react";
import styles from "./MonthCalendar.module.css";
import { getHolidays } from "@/data/holiday";

interface MonthCalendarProps {
  year: number;
  month: number;
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({ year, month }) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  // 月の最初の曜日を取得
  const firstDay = new Date(year, month - 1, 1).getDay();
  // 先頭をゼロ埋めした日付配列
  const days = [
    ...Array.from({ length: firstDay }, () => 0),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ];
  // 週ごとに分割された二次元配列
  const weeks = days.reduce((acc, day) => {
    if (acc.length === 0 || acc[acc.length - 1].length === 7) {
      acc.push([]);
    }
    acc[acc.length - 1].push(day);
    return acc;
  }, [] as number[][]);

  // 週の行コンポーネント
  const WeekRow: React.FC<{ days: number[] }> = ({ days }) => {
    return (
      <tr>
        {days.map((day, idx) => (
          <DayCell day={day} key={idx} />
        ))}
      </tr>
    );
  };

  // 日付セルコンポーネント
  const DayCell: React.FC<{ day: number }> = ({ day }) => {
    if (day < 1) {
      return <td></td>;
    }

    //曜日を取得
    const weekday = new Date(year, month - 1, day).getDay();
    const holiday = getHolidays(year).find(
      (holiday) =>
        holiday.date.getTime() === new Date(year, month - 1, day).getTime()
    );
    const dateClass =
      weekday === Weekday.Sunday
        ? styles.wdSunday
        : weekday === Weekday.Saturday
          ? styles.wdSaturday
          : holiday
            ? styles.holiday
            : "";
    return (
      <td className={`${dateClass} border border-black p-1`}>
        <div>{day}</div>
        <div className="text-[0.5rem]">{holiday ? holiday.name : "　"}</div>
      </td>
    );
  };

  // 月の最後の曜日までの空白を追加
  return (
    <div className="border-b border-dashed">
      <h2 className="font-extrabold text-2xl">{month}月</h2>
      <table className="table-fixed border-black border-2 w-full">
        <thead>
          <tr>
            <th className={`${styles.wdSunday} border border-black`}>日</th>
            <th className="border border-black">月</th>
            <th className="border border-black">火</th>
            <th className="border border-black">水</th>
            <th className="border border-black">木</th>
            <th className="border border-black">金</th>
            <th className={`${styles.wdSaturday} border border-black`}>土</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, idx) => (
            <WeekRow key={idx} days={week} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export default MonthCalendar;
