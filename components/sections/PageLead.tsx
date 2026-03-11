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
}

export function PageLead({
  eyebrow,
  title,
  description,
  detailEyebrow,
  detailTitle,
  detailBody,
  actions = [],
}: PageLeadProps) {
  const hasDetailPanel = Boolean(detailTitle || detailBody);

  return (
    <section className="page-lead-space">
      <div className="page-shell">
        <div
          className={clsx(
            "grid gap-5",
            hasDetailPanel && "lg:grid-cols-[1.02fr_0.98fr]",
          )}
        >
          <div className="soft-card surface-feature radius-feature px-6 py-7 sm:px-10 sm:py-10">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display-title display-page balanced-text text-on-light mt-4 font-semibold">
              {title}
            </h1>
            <p className="body-copy-lg text-on-light-muted mt-6 max-w-3xl">
              {description}
            </p>
            {actions.length ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
