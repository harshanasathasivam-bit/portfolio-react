
import { Navbar } from "@/Components/Navbar"
import { MainSection } from "@/Components/MainSection"
import { AboutSection } from "@/Components/About"
import { Skills } from "@/Components/Skills"
import { Project } from "@/Components/Project"
import { Resume } from "@/Components/Resume"
import { Contact } from "@/Components/Contact"
import { Footer } from "../Components/footer"

export const Home = () => {
    return (
        <div className="min-h-screen text-forground overflow-x-hidden" style={{ background: 'transparent' }}>
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <MainSection />
                <AboutSection />
                <Skills />
                <Project />
                <Resume />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}