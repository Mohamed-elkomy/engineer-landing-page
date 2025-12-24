import Hero from "../../components/sections/Hero/Hero";
import Features from "../../components/sections/Features/Features";
import About from "../../components/sections/About/About";
import Download from "../../components/sections/Download/Download";

export default function HomePage() {
    return (
        <main style={{ overflow: "hidden" }}>
            <Hero />
            <Features />
            <About />
            <Download />
        </main>
    );
}
