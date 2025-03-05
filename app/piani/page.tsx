import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Logo from "@/components/logo"
import PricingCard from "@/components/pricing-card"

export const metadata: Metadata = {
  title: "FileShifter - Piani Premium",
  description: "Scopri i nostri piani premium per sbloccare tutte le funzionalità di FileShifter",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen w-full py-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Logo />
          <h1 className="text-3xl font-bold text-center mt-6 mb-2">Scegli il piano giusto per te</h1>
          <p className="text-gray-600 text-center max-w-2xl">
            Sblocca tutte le funzionalità di FileShifter con i nostri piani premium. Scegli il piano che meglio si
            adatta alle tue esigenze.
          </p>
          <Link href="/" className="flex items-center text-blue-500 hover:text-blue-700 mt-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Torna alla home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard
            title="Professionista"
            price="9.99"
            period="mese"
            description="Ideale per professionisti e freelancer che hanno bisogno di convertire file regolarmente."
            features={[
              "File fino a 2GB",
              "Conversioni illimitate",
              "Conversione batch (fino a 10 file)",
              "Conversione prioritaria",
              "Nessuna pubblicità",
              "Supporto email",
            ]}
            buttonText="Inizia ora"
            buttonVariant="default"
            popular={false}
          />

          <PricingCard
            title="Business"
            price="29.99"
            period="mese"
            description="Perfetto per piccole e medie imprese che necessitano di funzionalità avanzate."
            features={[
              "File fino a 10GB",
              "Conversioni illimitate",
              "Conversione batch (fino a 50 file)",
              "Conversione prioritaria",
              "API per integrazione",
              "Nessuna pubblicità",
              "Supporto prioritario",
              "Dashboard di analisi",
            ]}
            buttonText="Inizia ora"
            buttonVariant="default"
            popular={true}
          />

          <PricingCard
            title="Enterprise"
            price="Personalizzato"
            period=""
            description="Soluzione su misura per grandi aziende con esigenze specifiche."
            features={[
              "File di qualsiasi dimensione",
              "Conversioni illimitate",
              "Conversione batch illimitata",
              "Conversione prioritaria",
              "API avanzata",
              "Integrazione con sistemi aziendali",
              "Supporto dedicato 24/7",
              "Funzionalità personalizzate",
              "SLA garantito",
            ]}
            buttonText="Contattaci"
            buttonVariant="outline"
            popular={false}
          />
        </div>

        <div className="bg-gray-100 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Domande frequenti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Posso cambiare piano in qualsiasi momento?</h3>
              <p className="text-gray-600">
                Sì, puoi passare a un piano superiore o inferiore in qualsiasi momento. Le modifiche avranno effetto dal
                ciclo di fatturazione successivo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Come funziona il periodo di prova?</h3>
              <p className="text-gray-600">
                Offriamo un periodo di prova di 7 giorni per tutti i piani premium. Non è richiesta alcuna carta di
                credito per iniziare.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Quali metodi di pagamento accettate?</h3>
              <p className="text-gray-600">
                Accettiamo tutte le principali carte di credito, PayPal e bonifico bancario per i piani Enterprise.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Posso annullare il mio abbonamento?</h3>
              <p className="text-gray-600">
                Sì, puoi annullare il tuo abbonamento in qualsiasi momento. Continuerai ad avere accesso al servizio
                fino alla fine del periodo di fatturazione corrente.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Hai bisogno di aiuto per scegliere?</h2>
              <p className="text-gray-600 max-w-xl">
                Il nostro team è a tua disposizione per aiutarti a scegliere il piano più adatto alle tue esigenze.
                Contattaci per una consulenza personalizzata.
              </p>
            </div>
            <Link
              href="/contatti"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

