import Head from "next/head";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";

export default function about() {
  return (
    <>
      <Head>
        <title>关于我 - {siteMetadata.title}</title>
      </Head>

      <div className="layout about flex flex-col gap-6">
        <section>
          <h1 className="">关于我</h1>
          <p className="mb-3 mt-3 sm:mt-6">
            还有很多事情要做的设计师...
            <br />
            了解我的工作经历，请访问<Link href="/me" target="_blank" title="吴超亮简历">个人简历</Link>。联系我：<span className="select-all whitespace-nowrap">lrdbuff@gmail.com</span>
          </p>
        </section>
        <section>
          <h2 className="text-[22px] font-semibold">关于本站</h2>
          <p className="mt-2 sm:mt-3">
            LRD.IM 是我的个人网站，记录我的设计作品、博客等，是我设计师生涯中很重要的<span className="whitespace-nowrap">一部分。</span>自&thinsp;2017&thinsp;年&thinsp;12&thinsp;月&thinsp;31&thinsp;日建站至今，已经经历了&thinsp;3&thinsp;次 “大型” 改版重构，现在你所看到的网站是使用 <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js">Next.js</Link> 和 <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="Tailwind CSS">Tailwind CSS</Link> 搭建<span className="whitespace-nowrap">而成。</span>
          </p>

        </section>
        <section>
          <h2 className="text-[22px] font-semibold">其他</h2>
          <p className="mt-2 mb-3">
            本站永久开源，可在 <Link href="https://github.com/Pudge1996/NEXT.LRD.IM" target="_blank" rel="noopener noreferrer" title="Github">Github</Link> 中查看本站代码。同时也可以在 <Link href="/updates" title="Github">What's New</Link> 中查看站点的改版<span className="whitespace-nowrap">记录。</span>
          </p>
        </section>
      </div>
    </>
  );
}
