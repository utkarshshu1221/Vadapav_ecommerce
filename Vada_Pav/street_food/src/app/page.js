// app/page.js
//import { client } from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuPage from "@/components/menu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import TestimonialsSection from "@/components/Testimonials";
import testimonials from"@/schemas/testimonials"
import SocialFeed from "@/components/SocialFeed";
import feedItems from "@/schemas/feedItems";
import Footer from "@/components/Footer";

export default async function Page() {
  // const menuItems = await client.fetch(`*[_type == "menuItem"][0...6]{
  //   _id, name, price, "imageUrl": image.asset->url, tags
  // }`);

  // const testimonials = await client.fetch(`*[_type == "testimonial"]{
  //   author, text, rating, "imageUrl": image.asset->url
  // }`);

  // const posts = await client.fetch(`*[_type == "instagramPost"] | order(postedAt desc)[0...8]{
  //   caption, url, "imageUrl": image.asset->url
  // }`);

  return (
    <main>
      <Navbar />
      <Hero />
      <MenuPage />
      <About />
      <TestimonialsSection testimonials={testimonials} />
      <SocialFeed items={feedItems} />
      <Contact />
      <Footer />
    </main>
  );
}
