import ContactPage from "./_components/Contact";
import DashboardPage from "./_components/Dashboard";
import Eligibility from "./_components/Eligibility";
import Gallery from "./_components/Gallery";
import Hero from "./_components/Hero";
import MobileApp from "./_components/MobileApp";

export default function Home() {
  return (
    <>
    <Hero />
    <Gallery />
    <Eligibility />
    <MobileApp />
    <DashboardPage />
    <ContactPage />
    </>
  );
}
