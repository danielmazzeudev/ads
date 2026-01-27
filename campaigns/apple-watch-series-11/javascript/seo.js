const seo = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Apple Watch Series 11 GPS - Original com Garantia",
    "image": [
        "https://ads.danielmazzeu.com.br/campaigns/apple-watch-series-11/images/product.webp"
    ],
    "description": "Compre o novo Apple Watch Series 11 GPS. Monitoramento avançado de saúde, detecção de queda e tela Retina Sempre Ativa. Oferta exclusiva com Envio Full.",
    "brand": {
        "@type": "Brand",
        "name": "Apple"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://ads.danielmazzeu.com.br/campaigns/apple-watch-series-11",
        "priceCurrency": "BRL",
        "price": "3499.00",
        "priceValidUntil": "2026-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "Mercado Livre"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ads.danielmazzeu.com.br/campaigns/apple-watch-series-11"
    },
    "author": {
        "@type": "Person",
        "name": "Daniel Mazzeu"
    }
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(seo);
document.head.appendChild(script);