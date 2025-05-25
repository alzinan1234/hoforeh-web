import AboutPage from "@/components/about/AboutPage";

import ContactUs from "@/components/contact/ContactUs";

import Banner from "@/components/Home/banner/Banner";
import OurProduct from "@/components/product/OurProduct";
import ServicePage from "@/components/service/ServicePage";

import Services from "@/components/service/ServicePage";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Banner/>
       <AboutPage/>

  <ServicePage/>

     <OurProduct/>



     
     
    </div>
  );
}
