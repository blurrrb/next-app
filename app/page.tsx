import Image from 'next/image'

async function getTime() {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata", {
    next: {
      revalidate: 5
    }
  });

  return (await res.json())['utc_datetime'];
}

export default async function Home() {
  const time = await getTime();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {time}
    </main>
  )
}
