import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";
import Logo from "../asset/logoNavbar.png";
import SmallLogo from "../asset/logo.png";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100 h-full">
        <Navbar logo={Logo} small={SmallLogo} />
        <div className="py-4 container mx-auto">
          <h1 className=" pb-4 text-5xl font-bold font-sans leading-none">
            Kami ada <br />
            saat anda membutuhkan.
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
            eaque molestiae explicabo quas iusto quasi sunt! Suscipit quo minima
            vero, modi mollitia nihil. Eaque totam ut dicta eum dolorem
            adipisci.
          </p>
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
          <div className="container grid grid-flow-row grid-cols-3 grid-rows-2 gap-6 px-4 py-4 mx-auto">
            <Card
              title="Test"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          eaque molestiae explicabo quas iusto quasi sunt! Suscipit quo minima
          vero, modi mollitia nihil. Eaque totam ut dicta eum dolorem
          adipisci."
            />
            <Card
              title="Test"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          eaque molestiae explicabo quas iusto quasi sunt! Suscipit quo minima
          vero, modi mollitia nihil. Eaque totam ut dicta eum dolorem
          adipisci."
            />
            <Card
              title="Test"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          eaque molestiae explicabo quas iusto quasi sunt! Suscipit quo minima
          vero, modi mollitia nihil. Eaque totam ut dicta eum dolorem
          adipisci."
            />
            <Card
              title="Test"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          eaque molestiae explicabo quas iusto quasi sunt! Suscipit quo minima
          vero, modi mollitia nihil. Eaque totam ut dicta eum dolorem
          adipisci."
            />
          </div>
        </div>
        <div className="container mx-auto py-4">
      <h1 className="text-black font-bold font-sans text-3xl leading-none">Our Services</h1>
      <h1 className="text-purp font-medium font-sans text-2xl leading-none">Apa yang kami tawarkan</h1>
          <div className="container grid grid-flow-row grid-cols-3 grid-rows-2 gap-6 px-4 py-8 mx-auto">
            <Card
              title="Test"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          eaque molestiae explicabo quas iusto quasi sunt! Suscipit quo minima
          vero, modi mollitia nihil. Eaque totam ut dicta eum dolorem
          adipisci."
            />
            <Card
              title="Test"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          eaque molestiae explicabo quas iusto quasi sunt! Suscipit quo minima
          vero, modi mollitia nihil. Eaque totam ut dicta eum dolorem
          adipisci."
            />
            <Card
              title="Test"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          eaque molestiae explicabo quas iusto quasi sunt! Suscipit quo minima
          vero, modi mollitia nihil. Eaque totam ut dicta eum dolorem
          adipisci."
            />
            <Card
              title="Test"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          eaque molestiae explicabo quas iusto quasi sunt! Suscipit quo minima
          vero, modi mollitia nihil. Eaque totam ut dicta eum dolorem
          adipisci."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
