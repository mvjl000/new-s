import { ArticlesList } from "@/components/Articles/ArticlesList";

const getData = async () => {
  const params = new URLSearchParams({
    apiKey: process.env.NEWS_API_KEY || "",
    country: "us",
    pageSize: "20",
  });

  const res = await fetch("https://newsapi.org/v2/top-headlines?" + params, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 3600,
    },
  });

  return res.json();
};

export default async function Home() {
  const { articles } = await getData();

  return (
    <>
      <h1 className="font-playfair text-3xl md:text-4xl xl:text-5xl text-orange-900 tracking-wide">
        On everyone{"'"}s tongue
        <ArticlesList articles={articles} />
      </h1>
    </>
  );
}
