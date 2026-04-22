import { useLanguage } from '../../context/LanguageContext';
import { ExpandableImage } from '../ExpandableImage';

interface DecisionBlockProps {
  title: string;
  problem?: string;
  change?: string;
  tradeoff?: string;
  outcome?: string;
  image?: string;
}

export function DecisionBlock({ title, problem, change, tradeoff, outcome, image }: DecisionBlockProps) {
  const { language } = useLanguage();

  return (
    <div className="bg-muted/30 border border-border rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Text Content */}
        <div className="p-8 space-y-6">
          <h3 className="text-2xl font-serif text-foreground mb-6">
            {title}
          </h3>

          {problem && (
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">
                {language === 'es' ? 'Problema' : 'Problem'}
              </h4>
              <p className="text-base font-sans text-foreground/80 leading-relaxed">
                {problem}
              </p>
            </div>
          )}

          {change && (
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-accent mb-2">
                {language === 'es' ? 'Cambio' : 'Change'}
              </h4>
              <p className="text-base font-sans text-foreground/80 leading-relaxed">
                {change}
              </p>
            </div>
          )}

          {tradeoff && (
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">
                Trade-off
              </h4>
              <p className="text-base font-sans text-foreground/80 leading-relaxed">
                {tradeoff}
              </p>
            </div>
          )}

          {outcome && (
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-accent mb-2">
                {language === 'es' ? 'Resultado' : 'Outcome'}
              </h4>
              <p className="text-base font-sans text-foreground/80 leading-relaxed">
                {outcome}
              </p>
            </div>
          )}
        </div>

        {/* Image Section */}
        {image && (
          <div className="bg-muted flex items-center lg:items-start lg:-mt-5 justify-center p-8 lg:p-12">
            <div className="w-full max-w-[280px] lg:max-w-[300px]">
              <ExpandableImage 
                src={image} 
                alt={title} 
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}