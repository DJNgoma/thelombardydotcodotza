import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="soft-card surface-feature radius-feature p-8 sm:p-12">
          <p className="eyebrow">Page not found</p>
          <h1 className="display-title display-page mt-4 font-semibold text-[var(--color-ink)]">
            The page you requested is not currently available.
          </h1>
          <p className="body-copy-lg mt-6 max-w-2xl">
            Use the primary navigation to return to estate information, notices,
            governance, or management information.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Return home</ButtonLink>
            <ButtonLink href="/news" variant="secondary">
              View notices
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
