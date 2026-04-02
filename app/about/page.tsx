import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BRAND_NAME } from "@/lib/brand";
import { founderProfiles } from "@/lib/sample-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `About | ${BRAND_NAME}`,
  description:
    "Learn how Medico Thesis Advisor supports medical postgraduates with premium thesis advisory and strong pediatric specialization.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-20 pb-24 lg:pb-20">
      <Container className="space-y-16">
        <div className="grid gap-8 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-5">
            <Badge tone="soft">About the practice</Badge>
            <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
              Thesis advisory with a broader medico-academic identity and a strong pediatric core.
            </h1>
          </div>
          <div className="space-y-4 text-lg leading-8 text-[var(--color-ink-muted)]">
            <p>
              {BRAND_NAME} exists for medical postgraduates who need a clearer,
              more structured route through the thesis journey.
            </p>
            <p>
              The brand is broader than one specialty, but pediatrics remains a key
              area of expertise, especially for full end-to-end thesis support.
            </p>
            <p>
              The work is positioned ethically around advisory, mentoring, review,
              methodology guidance, statistical clarity, and stronger academic presentation.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Built for medical postgraduates who want clearer decisions, stronger structure, and less thesis drift.",
            "Designed to combine subject relevance, methodological thinking, and cleaner academic presentation.",
            "Delivered in a calm, premium, consultation-based style rather than generic or transactional support.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <p className="text-lg leading-8 text-[var(--color-ink-muted)]">{item}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)]">
          <Badge tone="soft">Founders</Badge>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Two complementary expert lenses, one integrated advisory experience.
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {founderProfiles.map((profile) => (
              <div
                key={profile.role}
                className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--color-accent)] shadow-[var(--shadow-card)]">
                  Photo
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  {profile.role}
                </p>
                <h3 className="mt-2 font-serif text-3xl">{profile.name}</h3>
                <p className="mt-2 text-base font-medium text-[var(--color-ink-muted)]">
                  {profile.credentials}
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--color-ink-muted)]">
                  {profile.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/services">Explore Services</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Book Consultation
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
