// app/page.js
import { client } from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuPage from "@/components/menu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default async function Page() {
  const menuItems = await client.fetch(`*[_type == "menuItem"][0...6]{
    _id, name, price, "imageUrl": image.asset->url, tags
  }`);

  const testimonials = await client.fetch(`*[_type == "testimonial"]{
    author, text, rating, "imageUrl": image.asset->url
  }`);

  const posts = await client.fetch(`*[_type == "instagramPost"] | order(postedAt desc)[0...8]{
    caption, url, "imageUrl": image.asset->url
  }`);

  return (
    <main>
      <Navbar />
      <Hero />
      <MenuPage />
      <About />
      <Contact />
      <Testimonials testimonials={testimonials} />
      <InstagramFeed posts={posts} />
      <Footer />
    </main>
  );
}
