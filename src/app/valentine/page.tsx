"use client";
import { useRouter } from 'next/navigation' 

export default function Valentine() {
    const router = useRouter();

  return (
    <div className="bg-[url(/Asset/images/4871703.jpg)] bg-no-repeat m-0 p-0">
      <div className="flex w-screen">
        <button
          type="button"
          className="w-[82px] h-[92px] bg-[#FFE6EA] flex-[auto] bg-[url(/Asset/images/Love.png)] bg-no-repeat bg-center m-0 p-0 rounded-[0px_0px_40px_0px] border-[0px_1px_1px_0px] border-[#FF3253]"
          onClick={() => router.push('/')}
        />
        <div className="bg-[#FFE6EA] w-screen h-[63px] content-center items-center rounded-none border-solid border-[#FF3253] border-[0px_1px_1px_1px]">
          <p className="content-center text-center text-2xl text-[#FF3253]">Dzafa-Fadza Web</p>
        </div>
      </div>
      <div className="w-screen h-fit flex justify-center text-center flex-col">
        <p className="text-center items-center text-lg text-[#FF3253] m-0">Play Me, Please!</p>
        <audio controls={true} loop={true} className="self-center w-[200px]">
          <source
            src="/Asset/music/Nadhif Basalamah-Penjaga Hati.mp3"
            type="audio/mpeg"
          />
        </audio>
        <div className="items-center self-center bg-[#FFE6EA] w-[183px] h-[109px] content-center flex justify-center flex-col text-center mt-10 rounded-[15px]">
          <img
            src="/Asset/images/Alluzxi Mochi Cats GIF - Alluzxi Mochi Cats Throwing Hearts - Discover & Share GIFs.gif"
            className="w-[159px] h-[110px] mb-[30px] rounded-[15px]"
          />
        </div>
        <p className="text-center items-center text-[28px] text-[#FF3253] -mt-5">Selamat Hari Kasih Sayang!</p>
      </div>
      <div className="w-screen h-fit flex justify-center text-center flex-row mt-[25px]">
        <div className="items-center self-center bg-[#FFE6EA] w-[151px] h-[168px] content-center flex justify-center flex-row text-center rounded-[15px]">
          <img src="/Asset/images/Banner2.png" />
        </div>
        <div className="items-center self-center bg-[#FFE6EA] w-[151px] h-[168px] content-center flex justify-center flex-row text-center ml-[23px] rounded-[15px]">
          <img src="/Asset/images/Banner3.png" />
        </div>
      </div>
      <div className="w-screen h-fit flex justify-center text-center">
        <p className="mt-[-15px] text-center items-center text-[28px] text-[#FF3253] flex-col">With Love and For Love</p>
      </div>
      <div className="w-screen h-fit flex justify-center text-center flex-row align-middle mt-[25px]">
        <div className="items-center self-center bg-[#FFE6EA] w-[151px] h-[280px] content-center justify-center text-center rounded-[15px]">
          <img src="/Asset/images/Banner4.png" className="pl-5 pr-0 pt-5 pb-0" />
          <img
            src="/Asset/images/Ảnh động trái tim cực đẹp.gif"
            className="translate-y-[-100px] w-[187px] h-auto"
          />
        </div>
        <p className="relative w-[150px] h-[158px] text-left text-xs ml-[35px] top-2/4">
          Waktu mengambil <br /> potret ini rasanya <br /> dag dig dug serrr....
          <br />
          <br />
          “Mencintai itu dimulai dari hal-hal yang sederhana dan bermakna”
        </p>
      </div>
      <div className="bg-[url(/Asset/images/animation.gif)] bg-center w-screen h-fit flex justify-center text-center flex-col">
        <div className="w-screen h-fit flex justify-center text-center flex-row align-middle mt-[63px]">
          <p className="relative w-[150px] h-[158px] text-left text-xs mr-[25px] top-2/4">
            Mencintai tidak lengkap <br /> kalau tidak bersama <br /> menyayangi,
            karena <br /> sejatinya cinta itu niat <br /> dan menyayangi <br />{" "}
            adalah sikap dan <br /> perbuatan dari cinta. <br />
            <br />
            -Ayangg cek cantiknya yaaa--
          </p>
          <div className="bg-[#FFE6EA] w-[151px] h-[280px] pl-0 pr-[30px] pt-5 pb-0 rounded-[15px]">
            <img src="/Asset/images/Banner5.png" className="banner3" />
          </div>
        </div>
        <div className="w-screen h-fit flex justify-center text-center flex-col">
          <div className="items-center self-center bg-[#FFE6EA] w-[312px] h-36 content-center flex justify-center flex-col text-center mt-[75px] rounded-[15px]">
            <img src="/Asset/images/Banner6.png" />
          </div>
          <p className="text-xs mt-5">
            “Sayangkuu, cintakuu, ratukuu, wanitakuu <br />
            I love u so muchh <br />
            Thank youu for being mine dengan semua <br /> support dan bantuannya{" "}
            <br />
            Selalu berdoa kepada yang sang Maha Cintaa” <br />
          </p>
          <div className="items-center self-center bg-[#FFE6EA] w-[312px] h-36 content-center flex justify-center flex-col text-center mt-5 rounded-[15px]">
            <img src="/Asset/images/Banner7.png" />
          </div>
        </div>
        <div className="w-screen h-[50px] flex justify-center  items-center text-center bg-[#FFE6EA] mt-[50px] mb-0 mx-0">
          <p className="w-screen flex justify-center justify-self-center text-center text-[#FF3253]">© 2024 nawafnny13616</p>
        </div>
      </div>
    </div>
  );
}
