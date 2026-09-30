import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ArrowLinkProps = ComponentProps<typeof Link> & { children: ReactNode };

export function ArrowLink({ children, className = "", ...props }: ArrowLinkProps) {
  return (
    <Link className={`arrow-link group flex items-center gap-2 ${className}`} {...props}>
      {children}
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M3 13L13 3M5 3h8v8" />
      </svg>
    </Link>
  );
}
