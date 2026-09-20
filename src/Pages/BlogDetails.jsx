import { ArrowLeft, ArrowRight, Check, Clock, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";
import { blogPosts, getBlogPost } from "../data/blogPosts";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <Navigate to="/blogs" replace />;

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={post.title + " | NRI Property Blog"}
        description={post.excerpt}
        path={"/blogs/" + post.slug}
        type="article"
        breadcrumbs={[
          { name: "Blogs", path: "/blogs" },
          { name: post.title, path: "/blogs/" + post.slug },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          author: { "@type": "Organization", name: "Pinnacle Group UK" },
          publisher: { "@type": "Organization", name: "Pinnacle Group UK" },
          mainEntityOfPage: "https://www.nriproperty.uk/blogs/" + post.slug,
        }}
      />

      <main className="bg-[#f8fafc]">
        <header className="border-y border-slate-200 bg-white">
          <div className="max-w-4xl !mx-auto !px-6 !py-12 md:!py-16">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9d1c1a]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to blogs
            </Link>
            <p className="!mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#9d1c1a]">
              {post.category}
            </p>
            <h1 className="!mt-3 font-serif text-4xl font-semibold leading-tight text-[#102a4c] md:text-5xl">
              {post.title}
            </h1>
            <p className="!mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>
            <p className="!mt-5 inline-flex items-center gap-2 text-sm text-slate-500">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readTime}
            </p>
          </div>
        </header>

        <div className="max-w-4xl !mx-auto !px-6 !py-12">
          <article className="rounded-2xl border border-slate-200 bg-white !p-6 shadow-sm md:!p-10">
            {post.sections.map((section, index) => (
              <section
                key={section.heading}
                className={index > 0 ? "!mt-10 border-t border-slate-200 !pt-9" : ""}
              >
                <h2 className="font-serif text-2xl font-semibold text-[#102a4c] md:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="!mt-4 text-base leading-8 text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section className="!mt-10 rounded-xl bg-[#f5f8fa] !p-6">
              <h2 className="font-serif text-2xl font-semibold text-[#102a4c]">
                Practical checklist
              </h2>
              <ul className="!mt-5 grid gap-3 sm:grid-cols-2">
                {post.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <span className="!mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9d1c1a] text-white">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {post.sourceUrl ? (
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="!mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#9d1c1a] hover:underline"
              >
                {post.sourceLabel}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}

            <p className="!mt-8 border-l-4 border-amber-400 bg-amber-50 !p-4 text-sm leading-6 text-amber-900">
              This article is general educational information, not legal, tax or financial advice.
              Rules and procedures can change and may vary by state and individual circumstances.
              Obtain advice from appropriately qualified professionals before acting.
            </p>
          </article>

          <section className="!mt-12">
            <h2 className="font-serif text-3xl font-semibold text-[#102a4c]">Related articles</h2>
            <div className="!mt-6 grid gap-4 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={"/blogs/" + related.slug}
                  className="group rounded-xl border border-slate-200 bg-white !p-5 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9d1c1a]">
                    {related.category}
                  </p>
                  <h3 className="!mt-2 font-serif text-lg font-semibold leading-6 text-[#102a4c]">
                    {related.title}
                  </h3>
                  <span className="!mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#9d1c1a]">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetails;
