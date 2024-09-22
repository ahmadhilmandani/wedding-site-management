import { IconAdjustmentsHorizontal, IconEdit, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

export default function MarriageData() {
  return (
    <div className="px-4">
      <header className="mt-10">
        <h1 className="text-2xl font-bold text-pink-400">
          Add Marriage Data
        </h1>
      </header>

      <main className="mt-10">
        <div className="p-8 border bg-white border-x-neutral-300 rounded-lg">
          <div className="mb-14">
            <h2 className="font-semibold text-pink-400 mb-3">Data Mempelai Pria</h2>
            <div className="flex gap-8 flex-wrap mb-3">
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Nama Mempelai pria
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
            </div>
            <div className="flex gap-8 flex-wrap mb-5">
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Nama Bapak Mempelai pria
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Nama Ibu Mempelai Pria
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-semibold text-pink-400 mb-3">Data Mempelai Wanita</h2>
            <div className="flex gap-8 flex-wrap mb-3">
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Nama Mempelai wanita
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
            </div>
            <div className="flex gap-8 flex-wrap mb-5">
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Nama Bapak Mempelai wanita
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Nama Ibu Mempelai Wanita
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
            </div>
          </div>


          <div className="mb-14">
            <h2 className="font-semibold text-pink-400 mb-3">Data Akad</h2>
            <div className="flex gap-8 flex-wrap mb-5">
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Lokasi Akad
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Tanggal Akad
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Jam Akad
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-semibold text-pink-400 mb-3">Data Resepsi</h2>
            <div className="flex gap-8 flex-wrap mb-5">
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Lokasi Akad
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Tanggal Akad
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Jam Akad
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-semibold text-pink-400 mb-3">Data Tamu</h2>
            <div className="flex gap-8 flex-wrap mb-5">
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Nama
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  No. Hp
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Jam Akad
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
            </div>
            <button className="block w-full bg-pink-50 text-center text-pink-400 font-medium rounded-lg py-1.5">
              Tambah +
            </button>
          </div>

          <div className="mb-14">
            <h2 className="font-semibold text-pink-400 mb-3">Data Cerita Pernikahan</h2>
            <div className="flex gap-8 flex-wrap mb-5">
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Judul Kejadian
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
              <div className="min-w-[200px] flex-1">
                <label htmlFor="" className="block mb-3 font-medium">
                  Tanggal Kejadian
                </label>
                <input type="text" name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full" />
              </div>
            </div>
            <label htmlFor="" className="block mb-3 font-medium">
              Detail Kejadian
            </label>
            <textarea name="" id="" className="block outline-none focus-within:outline-none ring-1 ring-neutral-300 focus-visible:ring-pink-400 py-1.5 px-3 rounded-lg w-full mb-5" ></textarea>
            <button className="block w-full bg-pink-50 text-center text-pink-400 font-medium rounded-lg py-1.5">
              Tambah +
            </button>
          </div>

          <Link href={'/marriage-data/add'} className="block w-full bg-pink-400 py-1.5 px-7 rounded-lg text-white font-bold hover:bg-pink-500 transition-all text-center">
            + Tambah
          </Link>

        </div>
      </main>
    </div>
  )
}
