import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at NovaPay",
    quote:
      "Dev Technology migrated our entire infrastructure to AWS in 6 weeks with zero downtime. Our cloud costs dropped 40% and performance doubled. They're not a vendor — they're a strategic partner.",
    rating: 5,
    avatar: "SC",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Marcus Williams",
    role: "Founder, GreenLoop",
    quote:
      "We needed a scalable platform fast. Dev Technology delivered a production-ready Next.js app in 8 weeks that's now handling 100K daily active users without a hiccup.",
    rating: 5,
    avatar: "MW",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Priya Nair",
    role: "VP Engineering, Stackify",
    quote:
      "Their DevOps team transformed our 3-week release cycle into daily deployments. The Kubernetes setup they built has been rock-solid for 18 months straight.",
    rating: 5,
    avatar: "PN",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Tom Becker",
    role: "CEO, DataPulse",
    quote:
      "The AI recommendation engine they built increased our revenue by $2M in the first quarter alone. ROI was extraordinary — these people understand business, not just code.",
    rating: 5,
    avatar: "TB",
    color: "from-orange-500 to-rose-600",
  },
  {
    name: "Aisha Kofi",
    role: "Head of Product, ClearBank",
    quote:
      "Security was our biggest concern. Dev Technology's team passed our SOC2 audit on the first try and built a compliance pipeline that makes our quarterly reviews effortless.",
    rating: 5,
    avatar: "AK",
    color: "from-cyan-500 to-sky-600",
  },
  {
    name: "James O'Brien",
    role: "CTO, ShipFast",
    quote:
      "From discovery to launch in 12 weeks. The mobile app they built has a 4.8-star rating on both stores and our team can ship new features independently thanks to their great documentation.",
    rating: 5,
    avatar: "JO",
    color: "from-rose-500 to-pink-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] opacity-8"
        style={{
          background:
            "radial-gradient(ellipse, rgba(14,165,233,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-tag mb-6 inline-flex">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6">
            Trusted by Teams{" "}
            <span className="gradient-text">Around the World</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from the engineering leaders and
            founders who chose Dev Technology.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-8 card-hover flex flex-col gap-6"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-sky-500/40" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
