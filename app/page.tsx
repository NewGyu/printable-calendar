import Link from "next/link";

export default function Home() {
  //今年の年を取得
  const currentYear = new Date().getFullYear();
  const range = Array.from({ length: 7 }, (_, i) => currentYear -3 + i);
  return (
    <ul>
      {range.map((year) => (
        <li key={year}>
          <Link href={`/${year}`}>{year}</Link>
        </li>
      ))}
    </ul>
  );
}
