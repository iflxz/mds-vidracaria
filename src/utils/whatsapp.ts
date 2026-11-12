import { SITE } from "../data/site";

export const DEFAULT_MESSAGE =
  "Olá! Conheci a MDS Vidraçaria pelo site e gostaria de solicitar um orçamento.";

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(message)}`;
}
