import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import "../portfolio.css";

const PARA1 = `This project focuses on the development of an innovative waste management solution named "CityBin Sentinel." The CityBin Sentinel is a cutting-edge public dustbin designed to revolutionize urban waste collection and disposal. Its primary purpose is to ensure cleaner streets and more efficient waste management in urban environments.

The CityBin Sentinel is equipped with advanced sensors that continuously monitor the waste level inside the bin. When the bin nears full capacity, it automatically sends signals to government offices, alerting them to initiate timely waste collection. This real-time connectivity reduces the risk of overflowing bins, promotes cleaner streets, and enhances the overall efficiency of waste collection operations.`;

const PARA2 = `This is in response to recognizing the pressing need for smarter and more sustainable waste management solutions in urban areas. Overflowing bins are not only unsightly but also contribute to environmental pollution and pose health hazards.

Additionally, by adding this technological design into recycling bins used today, it can shift the meta for climate change and address vital issues that have been ongoing for some time. By addressing this challenge, we aim to make a positive impact on our communities by fostering cleanliness and environmental responsibility as well as expanding participation through awareness and understanding.`;

export default function CityBinSentinelPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>

      {/* Back nav */}
      <div className="px-[70px] py-6">
        <Link
          href="/"
          className="back-link font-bold text-[18px]"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          ←Home
        </Link>
      </div>

      {/* Slide 1 — hero */}
      <div className="relative w-full" style={{ aspectRatio: "1920/1080" }}>
        <Image
          src="/images/citybin-slide1.png"
          alt="CityBin Sentinel — cover slide"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Description block */}
      <section
        className="px-[268px] py-[80px] text-center"
        style={{ background: "var(--citybin-cream)" }}
      >
        <p
          className="text-[16px] leading-[1.45] tracking-[-0.005em] text-black mb-12 whitespace-pre-line"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          {PARA1}
        </p>
        <p
          className="text-[16px] leading-[1.45] tracking-[-0.005em] text-black whitespace-pre-line"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          {PARA2}
        </p>
      </section>

      {/* Slide 2 — smart trashcan prototype */}
      <div className="relative w-full" style={{ aspectRatio: "1920/1080" }}>
        <Image
          src="/images/citybin-slide2.png"
          alt="CityBin Sentinel — smart trashcan prototype"
          fill
          className="object-cover"
        />
      </div>

      {/* Slide 3 — app interface */}
      <div className="relative w-full" style={{ aspectRatio: "1920/1080" }}>
        <Image
          src="/images/citybin-slide3.png"
          alt="CityBin Sentinel — app interface"
          fill
          className="object-cover"
        />
      </div>

      {/* Footer nav */}
      <div className="flex justify-between px-[70px] py-12">
        <Link
          href="/"
          className="project-btn"
          style={{ background: "transparent", color: "var(--fg)", border: "1.5px solid var(--fg)" }}
        >
          ←Home
        </Link>
        <Link href="/winewright" className="project-btn">
          Next Project →
        </Link>
      </div>

    </div>
  );
}
