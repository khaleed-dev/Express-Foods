import Image from "next/image";
import type { BlogPost } from "@/lib/types";

interface BlogContentProps {
  post: BlogPost;
}

/** Extract plain text paragraphs from Lexical JSON or a plain string */
function extractParagraphs(content: unknown): string[] {
  // Plain string (static data)
  if (typeof content === "string") {
    return content.split("\n\n").filter((p) => p.trim().length > 0);
  }

  // Lexical JSON (Payload richText)
  if (content && typeof content === "object") {
    const root = (content as Record<string, unknown>).root as
      | { children?: { children?: { text?: string }[] }[] }
      | undefined;
    if (root?.children) {
      return root.children
        .map((node) =>
          (node.children || []).map((child) => child.text || "").join(""),
        )
        .filter((text) => text.trim().length > 0);
    }
  }

  return [];
}

export function BlogContent({ post }: BlogContentProps) {
  const paragraphs = extractParagraphs(post.content);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <div className="prose mb-12 md:prose-md lg:prose-lg md:mb-20">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
          <div className="my-8 h-px bg-border-primary md:my-12" />
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-full bg-background-secondary">
              <Image
                src="/images/logos/logo-mark-colored.svg"
                alt="Express Foods"
                width={32}
                height={32}
              />
            </div>
            <div className="grow">
              <p className="font-semibold md:text-md">{post.author.name}</p>
              <p className="text-sm text-neutral-light">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
