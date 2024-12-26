"use client";
import Image from "next/image";
import * as react from "react";

export default function Home() {
  const [isVisible, setIsVisible] = react.useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="bg-[url(/Asset/images/4871703.jpg)] bg-no-repeat">
      {/* Header */}
      <nav className="bg-[#FFCFCF] border-gray-200 dark:bg-[#FFCFCF]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={"/Asset/images/Love.png"} alt="Logo" width={'50'} height={'50'}></Image>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dzafa - Fadza Web</span>
          </a>
          <button type="button" onClick={toggleVisibility} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isVisible ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-[#FFCFCF] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#FFCFCF] dark:bg-[#FFCFCF] md:bg-[#FFCFCF]">
              <li>
                <a href="/" className="block py-2 px-3 text-[#FF3253] bg-[#FFFDEC] rounded md:bg-transparent md:text-[#FF3253] md:p-0 dark:text-[#FF3253] md:dark:text-[#FF3253]" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/valentine" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FF3253] md:p-0 dark:text-white md:dark:hover:text-[#FF3253] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Valentine</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Body */}
      <main className="flex flex-col px-8 md:px-24 py-12 justify-center items-center gap-8 bg-[url(/Asset/images/animation.gif)] bg-center">
        <h1 className="text-9xl text-center">3 Tahun</h1>
        <p className="">"Tiga tahun bersamamu terasa seperti perjalanan penuh warna—kadang ada badai, tapi lebih sering ada pelangi. Aku bersyukur bisa terus berjalan bersamamu, menghadapi setiap tantangan dan tumbuh bersama. Tiga tahun ini mengajarkanku bahwa cinta bukan tentang kesempurnaan, tapi tentang saling melengkapi dan tetap bertahan meski ada kekurangan. Setiap momen yang kita lewati adalah cerita cinta yang kita tulis bersama, dan aku tetap merasa beruntung memilikimu di sisiku. Terima kasih untuk setiap tawa, pelajaran, dan kenangan indah yang kita buat. Semoga cinta kita terus bertumbuh di tahun-tahun berikutnya."</p>
      </main>

      {/* Footer */}
      <footer className="w-screen h-[50px] flex justify-center items-center text-center bg-[#FFCFCF] mb-0 mx-0">
        <p className="w-screen flex justify-center justify-self-center text-center text-[#FF3253]">© 2024 nawafnny13616</p>
      </footer>
    </div>
  );
}
