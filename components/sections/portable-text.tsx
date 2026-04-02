import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableContent } from "@/lib/types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
  },
};

export function PortableTextRenderer({ value }: { value: PortableContent }) {
  return (
    <div className="prose-rich space-y-6">
      <PortableText value={value} components={components} />
    </div>
  );
}
