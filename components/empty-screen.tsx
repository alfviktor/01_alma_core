import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { BookOpen, MessageCircle, Mail, ClipboardList } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'

/**
 * Example categories and detailed prompts for teachers using Alma
 */
const promptCategories = [
  {
    id: 'teaching',
    icon: BookOpen,
    name: 'Undervisning',
    prompts: [
      {
        title: 'Differensiert undervisningsplan',
        prompt: 'Lag en differensiert undervisningsplan for matematikk om brøk i 4. klasse som er tilpasset den norske læreplanen.'
      },
      {
        title: 'Vurderingsopplegg',
        prompt: 'Lag et formativt vurderingsopplegg for å måle elevenes forståelse av naturfag i 5. klasse.'
      },
      {
        title: 'Rubrikk for prosjektvurdering',
        prompt: 'Lag en vurderingsrubrikk for et gruppeprosjekt i samfunnsfag om lokalhistorie.'
      },
      {
        title: 'Utforskende læringsaktiviteter',
        prompt: 'Utvikle utforskende læringsaktiviteter for en naturfagstime om økosystemer.'
      }
    ]
  },
  {
    id: 'feedback',
    icon: MessageCircle,
    name: 'Tilbakemelding',
    prompts: [
      {
        title: 'Konstruktiv tilbakemelding',
        prompt: 'Hjelp meg med å skrive konstruktiv tilbakemelding til en elev som strever med å skrive fullstendige avsnitt.'
      },
      {
        title: 'Intervensjonsstrategi',
        prompt: 'Lag en intervensjonsstrategi for en elev som sliter med grunnleggende tallforståelse.'
      },
      {
        title: 'Støtte for komplekse konsepter',
        prompt: 'Design støttemateriell for å hjelpe elever med å forstå brøkdivisjon.'
      },
      {
        title: 'Støtte for flerspråklige elever',
        prompt: 'Gi meg tips for å støtte flerspråklige elever i norskundervisningen.'
      }
    ]
  },
  {
    id: 'communication',
    icon: Mail,
    name: 'Foreldrekommunikasjon',
    prompts: [
      {
        title: 'Positiv tilbakemelding',
        prompt: 'Skriv en positiv e-post til foreldre om barnets nylige forbedring i klasseromsdeltakelse.'
      },
      {
        title: 'Ukentlig nyhetsbrev',
        prompt: 'Lag et ukentlig klasseromsnyhetsoppdatering til foreldre om hva vi har lært denne uken.'
      },
      {
        title: 'Informasjon om aktiviteter',
        prompt: 'Skriv en melding om kommende klasseaktiviteter og arrangementer.'
      },
      {
        title: 'Håndtere utfordrende situasjoner',
        prompt: 'Hjelp meg å formulere et diplomatisk svar på en utfordrende forelder som er bekymret for mengden lekser.'
      }
    ]
  },
  {
    id: 'admin',
    icon: ClipboardList,
    name: 'Administrative oppgaver',
    prompts: [
      {
        title: 'Atferdsobservasjonsmal',
        prompt: 'Hjelp meg med å lage en mal for dokumentasjon av elevenes atferdsobservasjoner under gruppearbeid.'
      },
      {
        title: 'Elevrapport',
        prompt: 'Lag en mal for å dokumentere elevens fremgang i matematikk dette semesteret.'
      },
      {
        title: 'Oppsummering av læreplanen',
        prompt: 'Oppsummer kompetansemålene for norsk i 3. trinn for en administrativ rapport.'
      },
      {
        title: 'IOP-observasjoner',
        prompt: 'Lag en mal for IOP-observasjoner (Individuell opplæringsplan) for en elev med lærevansker.'
      }
    ]
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {

  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        {/* Main category buttons with integrated dialogs */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 mb-6 max-w-2xl mx-auto">
          {promptCategories.map((category) => (
            <Dialog key={category.id}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-3 h-auto py-3 px-6 rounded-full text-sm font-medium border border-input hover:bg-accent hover:text-accent-foreground w-fit"
                >
                  {(() => {
                    const IconComponent = category.icon;
                    return <IconComponent className="w-4 h-4" />;
                  })()}
                  {category.name}
                </Button>
              </DialogTrigger>
              
              <DialogContent className="max-w-md p-0 gap-0 overflow-hidden border">
                <DialogHeader className="p-4 border-b flex flex-row items-center">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const IconComponent = category.icon;
                      return <IconComponent className="w-5 h-5" />;
                    })()}
                    <DialogTitle>{category.name}</DialogTitle>
                  </div>
                </DialogHeader>
                
                <div className="overflow-y-auto max-h-[50vh]">
                  {category.prompts.map((promptItem, idx) => (
                    <DialogClose key={idx} asChild>
                      <button
                        className="w-full text-left px-4 py-4 hover:bg-slate-50 border-b last:border-b-0"
                        onClick={() => submitMessage(promptItem.prompt)}
                      >
                        {promptItem.title}
                      </button>
                    </DialogClose>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}
