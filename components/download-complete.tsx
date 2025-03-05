interface DownloadCompleteProps {
  onReset: () => void
}

export default function DownloadComplete({ onReset }: DownloadCompleteProps) {
  return (
    <div className="flex flex-col items-center my-4 w-full">
      {/* Google AdSense Banner Container */}
      <div className="ad-container" id="google-ad-container">
        <p className="text-gray-500 text-sm">spazio google ad</p>
        {/* Google AdSense script will be inserted here */}
        {/* 
          To add Google AdSense:
          1. Add your AdSense script in the head of the document
          2. Use the following format for the ad unit:
          <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          3. Call (window.adsbygoogle = window.adsbygoogle || []).push({});
        */}
      </div>

      <h2 className="text-xl font-medium text-center mb-6">
        Hai bisogno di
        <br />
        convertire un altro file?
      </h2>

      <button
        onClick={onReset}
        className="w-full py-3 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
      >
        Converti
      </button>
    </div>
  )
}

