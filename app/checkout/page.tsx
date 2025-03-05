import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Logo from "@/components/logo"

export const metadata: Metadata = {
  title: "FileShifter - Checkout",
  description: "Completa il tuo acquisto per sbloccare tutte le funzionalità di FileShifter",
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen w-full py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Logo />
          <Link href="/piani" className="flex items-center text-blue-500 hover:text-blue-700 mt-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Torna ai piani
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold">Completa il tuo acquisto</h1>
            <p className="text-gray-600">Inserisci i tuoi dati per completare l'acquisto</p>
          </div>

          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Informazioni personali</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Cognome
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Informazioni di pagamento</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Numero carta
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Data di scadenza
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/AA"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Riepilogo ordine</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Piano Business</span>
                  <span className="font-medium">€29.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">IVA (22%)</span>
                  <span className="font-medium">€6.60</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between">
                  <span className="font-semibold">Totale</span>
                  <span className="font-semibold">€36.59</span>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                Accetto i{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Termini e Condizioni
                </a>{" "}
                e la{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button className="w-full py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Completa acquisto
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

