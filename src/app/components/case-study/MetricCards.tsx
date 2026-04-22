interface Metric {
  value: string;
  label: string;
}

interface MetricCardsProps {
  metrics: Metric[];
}

export function MetricCards({ metrics }: MetricCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
        >
          <div className="text-4xl md:text-5xl font-serif text-accent mb-3">
            {metric.value}
          </div>
          <div className="text-sm font-sans text-muted-foreground uppercase tracking-wider">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
