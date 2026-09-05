export function WindowChrome({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-card shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-5 py-3">
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#27c93f]" />
        <span className="ml-3 truncate text-xs text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="overflow-x-auto p-6">{children}</div>
    </div>
  );
}

export function CodeLine({
  n,
  children,
  indent = 0,
}: {
  n: number;
  children: React.ReactNode;
  indent?: number;
}) {
  return (
    <div className="flex">
      <span className="mr-4 w-5 shrink-0 select-none text-right text-syntax-comment/70">
        {n}
      </span>
      <span
        className="min-w-0 break-words"
        style={{ paddingLeft: `${indent * 1}rem` }}
      >
        {children}
      </span>
    </div>
  );
}
