import Features from "./Features";
import Hero from "./Hero";
import FeaturedHamburgers from "./FeaturedHamburgers.tsx";
import Testimonials from "./Testimonial";

const Home = () => {
    return (<div>
        <Hero />
        <Features />
        <FeaturedHamburgers />
        <Testimonials />
    </div>);
};

export default Home;