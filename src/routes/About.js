import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(){
    return(
        <>
        <Navbar/>
        <Hero
           cName="hero-mid"
           heroImg="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
           title="About"
           btnClass="hide"
           />
           <AboutUs/>
           <Footer/>
        </>

    );
}

export default About;