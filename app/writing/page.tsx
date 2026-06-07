import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[#F7F6EE] text-black">
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#F7F6EE]/80 border-b border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-sm">
          <Link href="/" className="font-medium hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/#work" className="hover:underline">Work</Link>
            <span className="text-black/50">Writing</span>
            <Link href="/#play" className="hover:underline">Play</Link>
            <Link href="/#info" className="hover:underline">Info</Link>
          </nav>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-14">
        <article className="max-w-2xl mx-auto text-[15px] leading-7 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Echoes of Surat: A Tapestry of Memory and Identity</h2>

          <p>
            My thoughts often drift back to the corners of my past, each memory a piece of the mosaic that forms my identity. Amidst this whirlwind of recollections, there&apos;s a sense of clarity. It&apos;s a fusion of my generational values, the unique lens of my birthplace, and my educational journey that shape my essence.
          </p>

          <p>
            Surat, a quaint city in Western India, was my playground and cage. All societies of houses were called a &ldquo;Sheri&rdquo; Interspersed with these and converging together towards the market are lines of more minor, originally Indo-Saracenic houses. They exhibit the influence of the early Art Deco and Neo-classical styles, reflected in the ribbon-like motifs that blend wooden and stucco work. Even the house&apos;s interior exhibits details of Art Deco in its flooring and the stained glass patterns of the partitions (Tamboli).
          </p>

          <p>
            Growing up, I felt stifled, craving escape from the narrow streets and prying eyes of the sheri. Be it leaving or returning, the neighborhood was always under the panoptic gaze of old-time elders who sat on their verandas. When I was younger, their gaze seemed protective, but it was like food for gossip as I grew older. We never locked the main doors to our houses, and neighbors would drop by with food and stories at any time of the day. When I was five or six, I used to sit on the veranda and prompt an uncle from my Sheri to treat me to ice cream or Indian sweets called laddoos, making everyone feel like an extended family. In my Sheri, there was no such thing as anonymity. All knew each other.
          </p>

          <p>
            Amidst this seeing, only two places were my refuge: school and my grandmother&apos;s house. Going to my grandmother&apos;s house was like summer vacation, the best time of the year. In the heat, my cousins and I used to go in the garden right next to her house, and precisely at 5 pm every day, my nani, that&apos;s what I called her, made masala tea. She used to shout for us from the window of her house in the garden, and we used to go back running there. I breathed freedom and forged friendships that now tether my heart to these streets there.
          </p>

          <p>
            In Surat, afternoons are sacred – a time for rest, a trait I initially scorned. It seemed antithetical to progress, to my dreams. But distance has lent perspective. Now, I see the wisdom in those quiet afternoons, the balance they bring to the relentless pace of life.
          </p>

          <p>
            My foray into computer science is through the simple yet rich &lsquo;Hello World!&rsquo; This step into programming, amid my education in the US, was an uncharted territory to explore and embody my potential. It was the first time in my eighteen years of prying eyes that I was alone in a new country. I felt completely invisible. In my code, I found creativity, challenge, and autonomy.
          </p>

          <p>
            As a Gen Zer, I am molded in the plains of technology and pragmatic decision-making. We are informed consumers who have rewarded authentic experiences over celebrity endorsements. Like my code, I tried to make my decisions deliberate and hint at my worldview (Francis). Brewing tea in my dorm with spices sent by my grandmother, I am transported back to those summer breaks and the sense of community that saw me for who I am, not for what I achieved. So, occasionally, every leisurely afternoon, I make a cup of tea and FaceTime with her.
          </p>
        </article>
      </main>
    </div>
  );
}
