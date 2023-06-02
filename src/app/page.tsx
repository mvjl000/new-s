import { ArticlesList } from "@/components/Articles/ArticlesList";

export default function Home() {
  return (
    <>
      <h1 className="font-playfair text-3xl md:text-4xl xl:text-5xl text-orange-900 tracking-wide">
        On everyone{"'"}s tongue
        <ArticlesList />
      </h1>
    </>
  );
}
