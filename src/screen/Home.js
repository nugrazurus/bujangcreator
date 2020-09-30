import React from "react";
import Card from "../components/card";
import CodeIll from "../asset/codeIllustration.svg";
import Web from "../asset/web.svg";
import Mobile from "../asset/mobile.svg";
import Design from "../asset/design.svg";
import PontianakLaptop from "../asset/pontianaklaptop.jpeg";
import Sipallima from "../asset/sipallima.png";

const Home = () => {
  return (
    <div className="flex flex-col py-8">
        <div className="py-4 container mx-auto">
          <div className="flex flex-row h-auto">
            <div className="w-1/2 mr-4 mt-10">
              <h1 className="pb-4 text-5xl font-bold font-sans leading-none">
                Grow up <br />
                your brand now.
              </h1>
              <p className="text-lg">
                Bergerak di bidang web development, mobile app development, dan
                graphic design. Kami melayani klien pihak swasta dan personal
                maupun institusi pemerintahan.
              </p>
            </div>
            <div className="flex w-1/2">
              <img src={CodeIll} alt="" />
            </div>
          </div>
        </div>
        <div className="pb-4 my-4 bg-purple-400">
          <div className="container mx-auto leading-none py-4">
            <h1 className=" text-3xl font-sans font-bold text-black-900">
              Our Product
            </h1>
            <h1 className="text-2xl font-sans font-medium text-black">
              Produk yang telah kami buat
            </h1>
          </div>
          <div className="container grid grid-flow-row grid-cols-3 grid-rows-1 gap-6 px-4 py-4 mx-auto">
            <Card
              picCLass="w-full"
              foto={PontianakLaptop}
              title="Pontianak Laptop"
              desc="Website jual beli laptop untuk area Pontianak dan Kalimantan Barat."
            />
            <Card
              foto={Sipallima}
              picCLass="w-full"
              title="Website Kelurahan Pal Lima"
              desc="Website informasi untuk Kelurahan Pal Lima."
            />
            <Card
              foto={Sipallima}
              picCLass="w-full"
              title="Website Kelurahan Pal Lima"
              desc="Website informasi untuk Kelurahan Pal Lima."
            />
          </div>
        </div>
        <div className="container mx-auto py-4">
          <h1 className="text-black font-bold font-sans text-3xl leading-none">
            Our Services
          </h1>
          <h1 className="text-purp font-medium font-sans text-2xl leading-none">
            Apa yang kami tawarkan
          </h1>
          <div className="container grid grid-flow-row grid-cols-3 gap-6 px-4 py-8 mx-auto">
            <Card
              picCLass="w-32 mt-4"
              title="Web Development"
              foto={Web}
              desc="Melayani jasa pembuatan dan pengembangan website untuk keperluan anda."
            />
            <Card
              picCLass="w-32 mt-4"
              foto={Mobile}
              title="Mobile App Development"
              desc="Melayani jasa pembuatan aplikasi mobile dalam platform android dan iOS untuk keperluan anda."
            />
            <Card
              picCLass="w-32 mt-4"
              foto={Design}
              title="Content Design"
              desc="Melayani jasa desain konten untuk segala keperluan anda."
            />
          </div>
        </div>
    </div>
  );
};
export default Home;
