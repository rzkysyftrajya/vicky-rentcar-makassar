export const business = {
  name: 'VICKY RENTCAR MAKASSAR',
  website: 'https://pt.vrnrentcarmakassar.com',
  whatsapp: '6282363389893',
  email: '',
  address: '',
  instagram: '',
  facebook: '',
}

const whatsappGreeting = 'Halo Vicky rentcar makassar'

export function whatsappUrl(message: string) {
  const messageBody = message
    .trim()
    .replace(/^halo(?:\s+vicky\s+rentcar\s+makassar)?[,!:\s-]*/i, '')
  const text = messageBody ? `${whatsappGreeting}, ${messageBody}` : whatsappGreeting

  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`
}

export function serviceMessage(service: string) {
  return `${whatsappGreeting}, saya ingin berkonsultasi mengenai layanan ${service}.`
}
