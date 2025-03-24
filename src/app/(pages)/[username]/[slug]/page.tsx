import { PROJECTS } from "../../../../../_data/contents";
import { extractOwnerAndRepo } from "@/utils/api";
import MarkdownViewer from "./_components/markdown-viewer";
import MetaDataCard from "./_components/metadata-card";

// Cloudflare Pages は、現状 edge ランタイムのみをサポート
// export const runtime = "edge";

export default async function Detail({
  params,
}: {
  params: Promise<{ username: string; slug: string }>;
}) {
  const username = (await params).username;
  const slug = (await params).slug;
  const repoUrl = `https://github.com/${username}/${slug}`;

  return (
    <div className="md:flex-row flex flex-col max-w-7xl mx-auto gap-4">
      <div className="md:w-2/3 w-full h-full ">
        <MarkdownViewer repoUrl={repoUrl} />
      </div>
      <div className="md:w-1/3 w-full sticky top-24 h-screen overflow-hidden">
        <MetaDataCard repoUrl={repoUrl} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map(({ repoUrl }) => {
    const { owner, repo } = extractOwnerAndRepo(repoUrl);
    return { username: owner, slug: repo };
  });
}
