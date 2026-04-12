import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata = {
  title:
    "Incremental Bootstrap Architecture for an Orbital Ring — Eat The Sun",
  description:
    "White paper proposing an incremental bootstrap approach to orbital ring construction using tethered material transport from a minimum viable $2M seed ring.",
};

function parseMarkdownToSections(content: string) {
  const lines = content.split("\n");
  const sections: { level: number; title: string; content: string }[] = [];
  let currentSection: { level: number; title: string; content: string } | null =
    null;

  // Skip the title and author block (before first ---)
  let pastFrontmatter = false;
  let frontmatterCount = 0;

  for (const line of lines) {
    if (line.trim() === "---") {
      frontmatterCount++;
      if (frontmatterCount >= 2) {
        pastFrontmatter = true;
      }
      continue;
    }

    if (!pastFrontmatter) continue;

    const headingMatch = line.match(/^(#{1,3})\s+(.*)/);
    if (headingMatch) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        level: headingMatch[1].length,
        title: headingMatch[2],
        content: "",
      };
    } else if (currentSection) {
      currentSection.content += line + "\n";
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Table detection
    if (line.includes("|") && lines[i + 1]?.includes("---")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0]
        .split("|")
        .filter((c) => c.trim())
        .map((c) => c.trim());
      const rows = tableLines.slice(2).map((row) =>
        row
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim())
      );

      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                {headers.map((h, j) => (
                  <th
                    key={j}
                    className="text-left py-2 px-3 text-muted font-medium"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j} className="border-b border-border/50">
                  {row.map((cell, k) => (
                    <td key={k} className="py-2 px-3 text-muted">
                      {cell.includes("**") ? (
                        <span
                          className="text-foreground font-medium"
                          dangerouslySetInnerHTML={{
                            __html: cell.replace(
                              /\*\*(.*?)\*\*/g,
                              "<strong>$1</strong>"
                            ),
                          }}
                        />
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Bullet list
    if (line.match(/^[-*]\s/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*]\s/)) {
        items.push(lines[i].replace(/^[-*]\s/, ""));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="list-disc list-inside space-y-1 my-4 text-muted">
          {items.map((item, j) => (
            <li
              key={j}
              dangerouslySetInnerHTML={{
                __html: item
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                  .replace(/\*(.*?)\*/g, "<em>$1</em>"),
              }}
            />
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (line.match(/^\d+\.\s/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-1 my-4 text-muted">
          {items.map((item, j) => (
            <li
              key={j}
              dangerouslySetInnerHTML={{
                __html: item
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                  .replace(/\*(.*?)\*/g, "<em>$1</em>"),
              }}
            />
          ))}
        </ol>
      );
      continue;
    }

    // Formula line (starts with $$, σ, P_, T_, or contains = with math-like content)
    if (
      line.match(/^\$\$/) ||
      line.match(/^(σ|P_|T_|θ)/) ||
      (line.includes("=") && line.match(/[²³⁴×÷σρπε]/))
    ) {
      elements.push(
        <div
          key={`formula-${i}`}
          className="font-mono text-sm bg-surface-elevated border border-border rounded-lg px-4 py-3 my-4 text-solar overflow-x-auto"
        >
          {line.replace(/^\$\$|\$\$$/g, "").trim()}
        </div>
      );
      i++;
      continue;
    }

    // Empty line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p
        key={`p-${i}`}
        className="text-muted leading-relaxed my-4"
        dangerouslySetInnerHTML={{
          __html: line
            .replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="text-foreground">$1</strong>'
            )
            .replace(/\*(.*?)\*/g, "<em>$1</em>"),
        }}
      />
    );
    i++;
  }

  return elements;
}

export default function PaperPage() {
  const filePath = path.join(
    process.cwd(),
    "research",
    "incremental-bootstrap-architecture.md"
  );
  const content = fs.readFileSync(filePath, "utf-8");
  const sections = parseMarkdownToSections(content);

  return (
    <main className="pt-24 pb-20 px-6">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-5 h-5 text-solar"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <span>Eat The Sun</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/research"
              className="text-muted hover:text-foreground transition-colors"
            >
              ← Research
            </Link>
            <Link
              href="https://github.com/vargasjr-dev/eat-the-sun"
              className="text-muted hover:text-foreground transition-colors"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto">
        {/* Paper header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full border bg-solar/10 text-solar border-solar/20">
              Draft
            </span>
            <span className="text-muted text-sm">v1.2</span>
            <span className="text-muted text-sm">·</span>
            <span className="text-muted text-sm">April 12, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Incremental Bootstrap Architecture for an Orbital Ring via Tethered
            Material Transport
          </h1>
          <p className="text-muted">
            Seethepalli, V. · Seethepalli, S. · JR, V. · Fuertes, V.
          </p>
        </div>

        {/* Table of contents */}
        <div className="bg-surface border border-border rounded-xl p-6 mb-12">
          <h2 className="font-bold text-sm uppercase tracking-wider text-muted mb-4">
            Contents
          </h2>
          <nav className="space-y-1">
            {sections
              .filter((s) => s.level <= 2)
              .map((section, i) => (
                <a
                  key={i}
                  href={`#${section.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  className={`block text-sm text-muted hover:text-solar transition-colors ${
                    section.level === 1 ? "font-medium" : "pl-4"
                  }`}
                >
                  {section.title}
                </a>
              ))}
          </nav>
        </div>

        {/* Paper content */}
        <div className="prose-custom">
          {sections.map((section, i) => (
            <section
              key={i}
              id={section.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")}
              className="mb-12"
            >
              {section.level === 1 && (
                <h2 className="text-2xl font-bold mb-4 pt-4">{section.title}</h2>
              )}
              {section.level === 2 && (
                <h3 className="text-xl font-bold mb-3 pt-2 text-solar/90">
                  {section.title}
                </h3>
              )}
              {section.level === 3 && (
                <h4 className="text-lg font-semibold mb-2 pt-1">
                  {section.title}
                </h4>
              )}
              {renderContent(section.content)}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
