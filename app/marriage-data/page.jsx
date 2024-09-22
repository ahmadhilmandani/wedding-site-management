import { IconAdjustmentsHorizontal, IconEdit, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

export default function MarriageData() {
  return (
    <div className="px-4">
      <header className="flex gap-3 items-center mt-10 justify-center flex-wrap">
        <div className="min-w-[200px] flex-1 flex items-center gap-3">
          <h1 className="text-2xl font-bold text-pink-400">
            Marriage Data
          </h1>
          <small className="rounded-full py-1.5 px-2 text-[8px] bg-green-100 text-emerald-700 font-medium">
            10k+ Marriage
          </small>
        </div>
        <div className="flex items-center gap-3">
          <IconAdjustmentsHorizontal className="stroke-neutral-600" />
          <Link href={'/marriage-data/add'} className="flex gap-3 items-center bg-pink-400 py-1.5 px-7 rounded-lg text-white font-bold hover:bg-pink-500 transition-all">
            + Tambah
          </Link>
        </div>
      </header>

      <main className="mt-10">
        <div>
          <div className="overflow-auto rounded-lg border border-neutral-300/80">
            <table className="w-full">
              <thead className="bg-white border-b border-neutral-300/80">
                <tr>
                  <th className="w-[200px] p-3 text-sm font-semibold text-neutral-700 tracking-wide text-left">Mempelai Pria</th>
                  <th className="w-20 p-3 text-sm font-semibold text-neutral-700 tracking-wide text-left">Jml Tamu</th>
                  <th className="w-24 p-3 text-sm font-semibold text-neutral-700 tracking-wide text-left">Status</th>
                  <th className="w-32 p-3 text-sm font-semibold text-neutral-700 tracking-wide text-left">Tgl Akad</th>
                  <th className="w-32 p-3 text-sm font-semibold text-neutral-700 tracking-wide text-left">Tgl Resepsi</th>
                  <th className="w-[90px] p-3 text-sm font-semibold text-neutral-700 tracking-wide text-left">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr className="bg-white hover:bg-neutral-50 transition-all cursor-pointer">
                  <td className="p-3 text-sm whitespace-nowrap">
                    Kring New Fit office chair, mesh + PU, black
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    102
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <small className="rounded-full py-1.5 px-2 text-[8px] bg-green-100 text-emerald-700 font-medium">
                      Done
                    </small>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">16/10/2021</td>
                  <td className="p-3 text-sm whitespace-nowrap">12/10/2022</td>
                  <td className="w-[90px] p-3 text-sm flex gap-4 flex-wrap items-center">
                    <IconEdit className="stroke-amber-500 stroke-[1.5]" size={18} />
                    <IconTrash className="stroke-red-400 stroke-[1.5]" size={18} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
