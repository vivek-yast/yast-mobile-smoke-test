import {
  Check,
  CloudUpload,
  CodeXml,
  LockKeyhole,
  Signal,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const checks = [
  {
    label: "Mobile upload verified",
    detail: "Fixture received and readable",
    icon: CloudUpload,
  },
  {
    label: "Convex dev connected",
    detail: "Development environment ready",
    icon: CodeXml,
  },
  {
    label: "WorkOS authenticated",
    detail: "Identity check completed",
    icon: LockKeyhole,
  },
] as const;

export default function Home() {
  return (
    <div className="relative isolate min-h-svh overflow-hidden bg-[#f3f1e9] text-[#171915]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(#74786c_0.7px,transparent_0.7px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,black,transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="ambient-orb absolute -right-32 -top-28 -z-10 size-72 rounded-full bg-[#d8ff72]/60 blur-3xl sm:-right-20 sm:size-96"
      />

      <div className="mx-auto flex min-h-svh w-full max-w-[31rem] flex-col px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-8 sm:py-8">
        <header className="flex items-center justify-between" aria-label="Yast QA">
          <a
            className="group inline-flex min-h-11 items-center gap-2 rounded-full pr-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171915]"
            href="#content"
            aria-label="Yast Mobile Smoke Test home"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[#171915] text-sm font-semibold text-white transition-transform duration-300 group-hover:-rotate-6">
              Y
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em]">
              Yast QA
            </span>
          </a>

          <Badge
            variant="outline"
            className="h-7 gap-1.5 border-[#171915]/15 bg-white/65 px-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#4f534a] shadow-sm backdrop-blur"
          >
            <Signal aria-hidden="true" className="size-3 text-[#527400]" />
            Mobile
          </Badge>
        </header>

        <main
          id="content"
          className="flex flex-1 flex-col justify-center py-9 sm:py-14"
        >
          <div className="mb-7 sm:mb-9">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#596151]">
              Release confidence, at a glance
            </p>
            <h1 className="max-w-[10ch] text-[clamp(2.55rem,13vw,4.25rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-balance">
              Yast Mobile Smoke Test
            </h1>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-6 text-[#5f635a] sm:text-base">
              A tiny, focused checkpoint for the essentials that need to work
              before you ship.
            </p>
          </div>

          <Card
            className="status-card gap-0 rounded-[1.6rem] border-0 bg-[#171915] py-0 text-[#f8f8f2] shadow-[0_24px_70px_-30px_rgba(23,25,21,0.6)] ring-1 ring-black/10"
            aria-labelledby="status-title"
          >
            <CardHeader className="gap-2 px-5 pb-5 pt-5 sm:px-6 sm:pt-6">
              <CardDescription className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/50">
                Current status
              </CardDescription>
              <CardTitle
                id="status-title"
                className="max-w-[13rem] text-2xl font-medium leading-tight tracking-[-0.035em] text-white"
              >
                All checks passed
              </CardTitle>
              <CardAction>
                <span className="grid size-12 place-items-center rounded-full bg-[#d8ff72] text-[#171915] shadow-[0_0_0_5px_rgba(216,255,114,0.08)]">
                  <Check aria-hidden="true" className="size-6" strokeWidth={2.5} />
                </span>
              </CardAction>
            </CardHeader>

            <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {checks.map((check, index) => (
                  <span
                    key={check.label}
                    className="h-1.5 flex-1 rounded-full bg-[#d8ff72]"
                    style={{ animationDelay: `${180 + index * 90}ms` }}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs font-medium text-white/55">
                3 of 3 systems are ready
              </p>
            </CardContent>

            <Separator className="bg-white/10" />

            <section
              className="bg-[#22241f] px-5 py-1 sm:px-6"
              aria-labelledby="checklist-title"
            >
              <h2 id="checklist-title" className="sr-only">
                Feature checklist
              </h2>
              <ul>
                {checks.map((check, index) => {
                  const Icon = check.icon;

                  return (
                    <li
                      key={check.label}
                      className="check-item flex items-center gap-3.5 py-4"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/[0.07] text-[#d8ff72] ring-1 ring-white/10">
                        <Icon
                          aria-hidden="true"
                          className="size-[1.1rem]"
                          strokeWidth={1.8}
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium leading-5 text-white">
                          {check.label}
                        </span>
                        <span className="block text-xs leading-5 text-white/55">
                          {check.detail}
                        </span>
                      </span>
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#d8ff72] text-[#171915]">
                        <Check
                          aria-hidden="true"
                          className="size-3.5"
                          strokeWidth={2.8}
                        />
                      </span>
                      {index < checks.length - 1 ? (
                        <Separator className="absolute inset-x-0 bottom-0 bg-white/[0.08]" />
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </section>
          </Card>
        </main>

        <footer className="flex items-center justify-between gap-3 text-[0.68rem] font-medium text-[#5f635a]">
          <span>Static QA fixture</span>
          <span className="h-px flex-1 bg-[#171915]/10" aria-hidden="true" />
          <span>No backend</span>
        </footer>
      </div>
    </div>
  );
}
