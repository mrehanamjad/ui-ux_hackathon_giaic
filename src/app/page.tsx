import Hero from "@/components/home/Hero";
import ProductSection from "@/components/home/ProductSection";
import Section2 from "@/components/home/Section2";
import data from "@/data/data.json"
import ProductCard from "@/components/ProductCard";
import NewArrivals from "@/components/home/NewArrivals";
import BlogCard from "@/components/home/BlogCard";
import Follow from "@/components/home/Follow";


export default function Home() {
  const section3Products = data.products.slice(0, 4);

  return (
    <div className="w-full">
        <Hero />
        <Section2 />
        <ProductSection title="Top Picks For You" description="Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights." btnText="View More" >
        <div className="flex justify-between  overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {section3Products.map((product, index) => (
                <div key={index} className="">
                 <ProductCard {...product} />
                </div>
              ))}
            </div>
        </ProductSection>
        <NewArrivals />
        <div className="h-16 w-full"></div>

        <ProductSection title="Top Picks For You" description="Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights." btnText="View More" >
        <div className="flex justify-between gap-4 px-2 overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              <div>
              <BlogCard  imgSrc="/blogs/Rectangle 13.png" />
              </div>
              <div>
              <BlogCard  imgSrc="/blogs/Rectangle 14.png" /></div>
              <div><BlogCard  imgSrc="/blogs/Rectangle 15.png" /></div>
            </div>
        </ProductSection>
        <Follow />
    </div>
  );
}
