import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MessageSquare } from "lucide-react"
import Logo from "@/components/logo"

export const metadata: Metadata = {
  title: "FileShifter - Contatti",
  description: "Contattaci per qualsiasi informazione o richiesta",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Logo />
          <h1 className="text-3xl font-bold text-center mt-6 mb-2">Contattaci</h1>
          <p className="text-gray-600 text-center max-w-2xl">
            Hai domande o richieste specifiche? Il nostro team è a tua disposizione per aiutarti.
          </p>
          <Link href="/" className="flex items-center text-blue-500 hover:text-blue-700 mt-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Torna alla home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <Mail className="w-10 h-10 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-600 mb-4">Inviaci un'email e ti risponderemo entro 24 ore</p>
            <a href="mailto:info@fileshifter.com" className="text-blue-500 hover:underline">
              info@fileshifter.com
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <Phone className="w-10 h-10 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Telefono</h2>
            <p className="text-gray-600 mb-4">Disponibile dal lunedì al venerdì, 9:00-18:00</p>
            <a href="tel:+390123456789" className="text-blue-500 hover:underline">
              +39 012 3456789
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <MessageSquare className="w-10 h-10 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Live Chat</h2>
            <p className="text-gray-600 mb-4">Chatta con un nostro operatore in tempo reale</p>
            <button className="text-blue-500 hover:underline">Inizia chat</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">Inviaci un messaggio</h2>
            <p className="text-gray-600">Compila il modulo sottostante per inviarci una richiesta</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome e Cognome
                </label>
                <input
                  type="text"
                  id="name"
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
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Oggetto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Messaggio
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button className="w-full py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Invia messaggio
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

