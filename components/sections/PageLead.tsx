import { ButtonLink } from "@/components/ui/ButtonLink";
import clsx from "clsx";

interface Action {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
}

interface PageLeadProps {
  eyebrow: string;
  title: string;
  description: string;
  detailEyebrow?: string;
  detailTitle?: string;
  detailBody?: string;
  actions?: Action[];
  highlights?: string[];
}

export function PageLead({
  eyebrow,
  title,
  description,
  detailEyebrow,
  detailTitle,
  detailBody,
  actions = [],
  highlights = [],
}: PageLeadProps) {
  const hasDetailPanel = Boolean(detailTitle || detailBody);
  const leadHeaderClass = hasDetailPanel
    ? "grid gap-8 xl:grid-cols-[1fr_auto] xl:items-start"
    : "grid gap-6";
  const actionsClass = hasDetailPanel
    ? "flex flex-col gap-3 sm:flex-row sm:flex-wrap xl:justify-end"
    : "flex flex-col gap-3 sm:flex-row sm:flex-wrap";

  return (
    <section className="page-lead-space">
      <div className="page-shell">
        <div
          className={clsx(
            "grid gap-5",
            hasDetailPanel && "xl:grid-cols-[1.02fr_0.98fr]",
          )}
        >
          <div className="soft-card surface-feature radius-feature overflow-hidden px-6 py-7 sm:px-10 sm:py-10">
            <div className={leadHeaderClass}>
              <div>
                <p className="eyebrow">{eyebrow}</p>
                <h1 className="display-title display-page balanced-text text-on-light mt-4 max-w-4xl font-semibold">
                  {title}
                </h1>
                <p className="body-copy-lg text-on-light-muted mt-6 max-w-3xl">
                  {description}
                </p>
              </div>
              {actions.length ? (
                <div className={actionsClass}>
                  {actions.map((action) => (
                    <ButtonLink
                      key={action.href}
                      href={action.href}
                      variant={action.variant ?? "primary"}
                    >
                      {action.label}
                    </ButtonLink>
                  ))}
                </div>
              ) : null}
            </div>

            {highlights.length ? (
              <>
                <div className="section-rule mt-8" />
                <div className="mt-5 flex flex-wrap gap-2 text-[0.74rem] font-semibold tracking-[var(--tracking-ui)] uppercase text-[var(--color-ink-soft)]">
                  {highlights.map((highlight) => (
                    <span key={highlight} className="inset-surface radius-inset px-3 py-2">
                      {highlight}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          {hasDetailPanel ? (
            <div className="soft-card surface-panel radius-panel px-6 py-7 sm:px-10 sm:py-10">
              <p className="eyebrow">{detailEyebrow ?? eyebrow}</p>
              {detailTitle ? (
                <h2 className="display-title display-section text-on-light mt-4 font-semibold">
                  {detailTitle}
                </h2>
              ) : null}
              {detailBody ? (
                <p className="body-copy-sm text-on-light-muted mt-5 sm:text-base">
                  {detailBody}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
