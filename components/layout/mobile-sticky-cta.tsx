import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[rgba(247,247,243,0.95)] p-3 backdrop-blur lg:hidden">
      <Container className="px-0">
        <ButtonLink href="/contact" className="w-full">
          Book Consultation
        </ButtonLink>
      </Container>
    </div>
  );
}
