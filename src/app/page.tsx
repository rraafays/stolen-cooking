import React from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-mono text-4xl">stolen cooking</h1>
        <h2 className="font-mono text-lg">watch this space</h2>
        <h3 className="font-mono text-sm">- raf</h3>
      </main>
    </div>
  );
}
