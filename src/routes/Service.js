import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";


function Service(){
    return(
        <>
        <Navbar/>
        <Hero
           cName="hero-mid"
           heroImg="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
           title="Service"
           btnClass="hide"
           />
           <Trip/>
           <Footer/>
        </>

    );
}

export default Service;