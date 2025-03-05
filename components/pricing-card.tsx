import { Check } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  popular: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  popular,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden border ${popular ? "border-blue-600 shadow-lg" : "border-gray-200"} bg-white`}
    >
      {popular && (
        <div className="bg-blue-600 text-white text-center py-1.5 text-sm font-medium">Piano consigliato</div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-gray-500 ml-1">/{period}</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>

        <Link
          href="/checkout"
          className={`block w-full py-2.5 text-center rounded-full mb-6 ${
            buttonVariant === "default"
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              : "border border-blue-600 text-blue-600 hover:bg-gray-50"
          } transition-colors`}
        >
          {buttonText}
        </Link>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

