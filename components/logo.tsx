import Image from "next/image"

export default function Logo() {
  return (
    <div className="mb-4">
      <Image src="/logo.svg" alt="FileShifter Logo" width={200} height={50} priority />
    </div>
  )
}

