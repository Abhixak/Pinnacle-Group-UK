import { ArrowRight, BookOpen, Clock, Home, Scale, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";
import { blogPosts } from "../data/blogPosts";

const categoryIcons = {
  Buying: Home,
  "Selling & Tax": WalletCards,
  Legal: Scale,
};

const Blogs = () => {
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];
  const remainingPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <>
      <SEO
        title="NRI Property Blog | Buying, Selling, Legal & Tax Guides"
        description="Practical property guidance for NRIs managing, buying, selling and protecting property in India from abroad."
        path="/blogs"
        keywords="NRI property blog, Indian property guides for NRIs, NRI property tax, NRI property management, property legal advice India"
        breadcrumbs={[{ name: "Blogs", path: "/blogs" }]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Pinnacle Group NRI Property Blog",
          url: "https://www.nriproperty.uk/blogs",
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: "https://www.nriproperty.uk/blogs/" + post.slug,
            description: post.excerpt,
          })),
        }}
      />

      <main className="bg-[#f5f8fa] text-slate-800">
        <section className="border-y border-slate-200 bg-[#102a4c] text-white">
          <div className="max-w-7xl !mx-auto !px-6 !py-16 text-center md:!py-20 lg:!px-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-200">
              NRI Property Journal
            </p>
            <h1 className="!mt-4 font-serif text-4xl font-semibold md:text-5xl">
              Clear Guidance for Property Decisions in India
            </h1>
            <p className="max-w-3xl !mx-auto !mt-5 text-base leading-8 text-white/70 md:text-lg">
              Practical articles for NRIs buying, selling, managing and protecting Indian property
              from anywhere in the world.
            </p>
          </div>
        </section>

        <section className="max-w-7xl !mx-auto !px-6 !py-12 lg:!px-10">
          <Link
            to={"/blogs/" + featuredPost.slug}
            className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative min-h-64 overflow-hidden bg-gradient-to-br from-[#9d1c1a] to-[#4c1020] !p-8 text-white">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/15" />
              <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border border-white/10" />
              <BookOpen className="relative h-10 w-10 text-red-100" aria-hidden="true" />
              <p className="relative !mt-20 text-xs font-bold uppercase tracking-[0.22em] text-red-100">
                Featured Guide
              </p>
            </div>
            <div className="flex flex-col justify-center !p-7 md:!p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9d1c1a]">
                {featuredPost.category}
              </p>
              <h2 className="!mt-3 font-serif text-3xl font-semibold leading-tight text-[#102a4c] md:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="!mt-4 leading-7 text-slate-600">{featuredPost.excerpt}</p>
              <div className="!mt-6 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {featuredPost.readTime}
                </span>
                <span className="inline-flex items-center gap-2 font-semibold text-[#9d1c1a]">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          <div className="!mt-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9d1c1a]">
                Latest Articles
              </p>
              <h2 className="!mt-2 font-serif text-3xl font-semibold text-[#102a4c]">
                Property Knowledge for NRIs
              </h2>
            </div>
          </div>

          <div className="!mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => {
              const Icon = categoryIcons[post.category] || BookOpen;
              return (
                <article
                  key={post.slug}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white !p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fbe8e2] text-[#9d1c1a]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <p className="!mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9d1c1a]">
                    {post.category}
                  </p>
                  <h3 className="!mt-2 font-serif text-2xl font-semibold leading-tight text-[#102a4c]">
                    {post.title}
                  </h3>
                  <p className="!mt-3 leading-7 text-slate-600">{post.excerpt}</p>
                  <Link
                    to={"/blogs/" + post.slug}
                    className="!mt-auto inline-flex items-center gap-2 !pt-6 font-semibold text-[#9d1c1a]"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blogs;
