interface SectionHeaderProps {
  id: string;
  number: string;
  title: string;
  description?: string;
}

export function SectionHeader({ id, number, title, description }: SectionHeaderProps) {
  return (
    <header id={id} className="mb-12 scroll-mt-32">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-serif text-xl text-accent">{number}</span>
        <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-lg text-muted-foreground font-sans leading-relaxed ml-12">
          {description}
        </p>
      )}
    </header>
  );
}
