# MDS Vidraçaria — site institucional

Landing page em React 19 + TypeScript + Vite, com pedido de orçamento direto pelo WhatsApp.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/
npm run preview  # testa o build
```

## O que editar

- `src/data/site.ts`: telefone, cidade, Instagram e os serviços exibidos. Preencha `instagram` para o link aparecer no rodapé.
- Seções "Como funciona" e "Dúvidas frequentes": textos em `PROCESS` e `FAQ`, no mesmo `src/data/site.ts`.
- `src/utils/whatsapp.ts`: mensagem padrão enviada pelo botão de WhatsApp.
- `index.html`: título, descrição e dados estruturados (SEO).

## Fotos

As imagens atuais são de banco gratuito (Unsplash), só como referência. Para o site ficar profissional de verdade, troque por fotos reais de trabalhos da MDS: coloque os arquivos em `src/assets/images/`, importe no componente e substitua as URLs em `Services.tsx`, `Gallery.tsx` e `Hero.tsx`. Prefira `.webp`/`.jpg` com até 200 KB cada.

## Publicar

Qualquer hospedagem de site estático serve (Netlify, Vercel, Cloudflare Pages): comando `npm run build`, pasta `dist`.
