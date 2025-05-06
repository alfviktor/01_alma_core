import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Box, Flex } from '@radix-ui/themes';
import { BookOpen, ClipboardList, Mail, MessageCircle } from 'lucide-react';
import * as React from 'react';

const promptCategories = [
  {
    id: 'teaching',
    icon: BookOpen,
    name: 'Undervisning',
    prompts: [
      { title: 'Differensiert undervisningsplan', prompt: 'Lag en differensiert undervisningsplan for matematikk om brøk i 4. klasse som er tilpasset den norske læreplanen.' },
      { title: 'Vurderingsopplegg', prompt: 'Lag et formativt vurderingsopplegg for å måle elevenes forståelse av naturfag i 5. klasse.' },
      { title: 'Rubrikk for prosjektvurdering', prompt: 'Lag en vurderingsrubrikk for et gruppeprosjekt i samfunnsfag om lokalhistorie.' },
      { title: 'Utforskende læringsaktiviteter', prompt: 'Utvikle utforskende læringsaktiviteter for en naturfagstime om økosystemer.' },
    ],
  },
  {
    id: 'feedback',
    icon: MessageCircle,
    name: 'Tilbakemelding',
    prompts: [
      { title: 'Konstruktiv tilbakemelding', prompt: 'Formuler konstruktiv tilbakemelding til en elev som sliter med motivasjon i norskfaget.' },
      { title: 'Tilbakemelding på essay', prompt: 'Gi tilbakemelding på et essay om den industrielle revolusjon for en elev på ungdomstrinnet.' },
      { title: 'Strategier for elevsamtaler', prompt: 'Utvikle strategier for effektive elevsamtaler med fokus på faglig utvikling.' },
      { title: 'Tilbakemeldingsmal', prompt: 'Lag en mal for å gi rask og presis tilbakemelding på ukentlige innleveringer.' },
    ],
  },
  {
    id: 'communication',
    icon: Mail,
    name: 'Kommunikasjon',
    prompts: [
      { title: 'Foreldremøteagenda', prompt: 'Lag en agenda for et foreldremøte for 7. klasse med fokus på overgangen til ungdomsskolen.' },
      { title: 'Informasjonsbrev til hjemmet', prompt: 'Skriv et informasjonsbrev til foresatte om en kommende klassetur.' },
      { title: 'Konflikthåndteringsplan', prompt: 'Utvikle en plan for å håndtere konflikter mellom elever på en konstruktiv måte.' },
      { title: 'Samarbeidsmal for lærere', prompt: 'Lag en mal for samarbeid mellom faglærere for å sikre tverrfaglig undervisning.' },
    ],
  },
  {
    id: 'planning',
    icon: ClipboardList,
    name: 'Planlegging',
    prompts: [
      { title: 'Årsplan for engelsk', prompt: 'Lag en årsplan for engelskfaget i 6. klasse som dekker alle kompetansemål.' },
      { title: 'Prosjektplan for temauke', prompt: 'Utvikle en detaljert prosjektplan for en temauke om bærekraftig utvikling.' },
      { title: 'Vikartimeopplegg', prompt: 'Lag et engasjerende vikartimeopplegg for en dobbelttime i KRLE for 9. klasse.' },
      { title: 'Ressursliste for digital læring', prompt: 'Samle en liste over nyttige digitale ressurser for undervisning i programmering på mellomtrinnet.' },
    ],
  },
];

const categoryColorClasses: { [key: string]: string } = {
  teaching: 'bg-accent-undervisning text-accent-undervisning-foreground border-accent-undervisning-border hover:bg-[#5BBFD7] hover:text-white hover:border-[#43A5BB]',
  feedback: 'bg-accent-tilbakemelding text-accent-tilbakemelding-foreground border-accent-tilbakemelding-border hover:bg-[#2B9A66] hover:text-white hover:border-[#227C52]',
  communication: 'bg-accent-kommunikasjon text-accent-kommunikasjon-foreground border-accent-kommunikasjon-border hover:bg-[#A144AF] hover:text-white hover:border-[#863895]',
  planning: 'bg-accent-planlegging text-accent-planlegging-foreground border-accent-planlegging-border hover:bg-[#3358D4] hover:text-white hover:border-[#2A46A7]',
};

export function EmptyScreen({
  submitMessage,
  className,
}: {
  submitMessage: (message: string) => void;
  className?: string;
}) {
  const [openPopovers, setOpenPopovers] = React.useState<Record<string, boolean>>({});

  const handlePopoverOpenChange = (categoryId: string, isOpen: boolean) => {
    setOpenPopovers(prev => ({ ...prev, [categoryId]: isOpen }));
  };

  return (
    <Box className={cn('w-full transition-all', className)} p="3">
      <Flex wrap="wrap" justify="center" gap="2" mx="auto" style={{ maxWidth: '42rem' }}>
        {promptCategories.map((category) => (
          <Popover
            key={category.id}
            open={openPopovers[category.id] || false}
            onOpenChange={(isOpen) => handlePopoverOpenChange(category.id, isOpen)}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openPopovers[category.id] || false}
                className={cn(
                  'text-sm rounded-full shadow-none focus:ring-0 px-4 font-medium border',
                  categoryColorClasses[category.id] || 'bg-secondary text-secondary-foreground border-border'
                )}
              >
                <span className="flex items-center gap-1">
                  {React.createElement(category.icon, { width: 14, height: 14 })}
                  {category.name}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0" align="center">
              <Command>
                <CommandList>
                  <CommandEmpty>No prompts found.</CommandEmpty>
                  {category.prompts.map((promptItem, idx) => (
                    <CommandItem
                      key={idx}
                      value={promptItem.title}
                      onSelect={() => {
                        submitMessage(promptItem.prompt);
                        handlePopoverOpenChange(category.id, false);
                      }}
                      className="text-xs cursor-pointer font-medium"
                    >
                      {promptItem.title}
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        ))}
      </Flex>
    </Box>
  );
}
