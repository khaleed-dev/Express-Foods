import { BiCalendar, BiIdCard } from "react-icons/bi";
import { company } from "@/lib/data/company";

export function LegalCredentials() {
  return (
    <section className="border-y border-border-primary bg-background-secondary/40 px-[5%] py-6 md:py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
              <BiIdCard className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-light">
                Tax registration
              </p>
              <p className="text-base font-bold text-foreground">
                {company.legal.taxRegistration}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex size-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
              <BiCalendar className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-light">
                Established
              </p>
              <p className="text-base font-bold text-foreground">
                {company.legal.establishedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalCredentials;
