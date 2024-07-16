// import { Helmet } from "react-helmet-async";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      {/* <Helmet>
        <title>Nhật Linh profile</title>
        <meta name="description" content="Nhật Linh - Lập trình viên Front End. Ghé thăm trang web giới thiệu bản thân của Nhật Linh !" />
        <meta name="keywords" content="Nhật Linh, React Vite, Profile, Portfolio" />
        <meta property="og:title" content="Trang chủ - Nhật Linh" />
        <meta property="og:description" content="Nhật Linh - Lập trình viên Front End. Ghé thăm trang web giới thiệu bản thân của Nhật Linh !" />
        <meta property="og:type" content="website" />
      </Helmet> */}
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          {/* <Features /> */}
          {/* <Projects /> */}
          {/* <Resume /> */}
          {/* <Testimonial /> */}
          <Contact />
          {/* <Footer /> */}
          <FooterBottom />
        </div>
      </div>
    </>
  );
}

export default App;
