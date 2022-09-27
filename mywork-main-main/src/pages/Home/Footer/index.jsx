import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./Footer.scss"

function Footer() {
  return (
    <div className="footercover bg-cat py-4 ">
      <section >
        <Section1 />
      </section>
   <section>
        <Section2 />
      </section>
      <section><Section3 /></section> 
    </div>
  );
}

export default Footer;
