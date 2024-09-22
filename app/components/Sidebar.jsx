"use client"

import { IconHeart } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={`w-[280px] h-screen sticky top-0 left-0 z-[2] border-r p-4 border-neutral-300/80 bg-white transition-all`}>
      <h1 className="text-xl font-bold text-center mb-5 text-neutral-800" >
        <b className="text-xl font-bold text-pink-400">Wedding</b> Site
      </h1>
      <Link href={'/marriage-data'} className={`${pathname == '/marriage-data' ? 'text-pink-400 font-medium cursor-default' : 'text-neutral-500 hover:bg-gray-100'} flex gap-2 items-center px-2 py-1.5 rounded-lg mt-4 mb-4 transition-all`}>
          <IconHeart className={`${pathname == '/marriage-data' ? 'stroke-pink-400' : 'stroke-neutral-500'}`} />
        <div>
          Marriage Data
        </div>
      </Link>
    </aside>
  )
}