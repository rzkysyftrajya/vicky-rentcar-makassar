const MAKASSAR_HOSTS = new Set([
  "vickyrentcarmakassar.com",
  "www.vickyrentcarmakassar.com",
  "vrnrentcarmakassar.com",
  "www.vrnrentcarmakassar.com",
])

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: "conversion",
      parameters: { send_to: string; event_callback?: () => void },
    ) => void
  }
}

export function openWhatsApp(url: string): void {
  if (typeof window === "undefined") {
    return
  }

  const whatsappUrl = new URL(url, window.location.href)
  const isWhatsAppUrl = whatsappUrl.hostname === "wa.me"
  const isMakassarWebsite = MAKASSAR_HOSTS.has(window.location.hostname)

  if (isWhatsAppUrl && isMakassarWebsite) {
    const whatsappWindow = window.open(whatsappUrl.toString(), "_blank")

    if (whatsappWindow) {
      whatsappWindow.opener = null
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18095006448/j4rCCIDmoIgdEPDFr7RD",
      })
    }

    if (!whatsappWindow) {
      window.location.href = whatsappUrl.toString()
    }

    return
  }

  window.location.href = whatsappUrl.toString()
}
