const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "iPhone 6 256GB",
    "image": [
        "https://ads.danielmazzeu.com.br/example/images/product.png"
    ],
    "description": "Aparelho icônico com alta capacidade de armazenamento. Selecionamos a melhor oferta disponível com procedência e garantia.",
    "brand": {
        "@type": "Brand",
        "name": "Apple"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://ads.danielmazzeu.com.br/example",
        "priceCurrency": "BRL",
        "price": "549.00",
        "priceValidUntil": "2026-12-31",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "Mercado Livre"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ads.danielmazzeu.com.br/example"
    },
    "author": {
        "@type": "Person",
        "name": "Daniel Mazzeu"
    }
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(productSchema);
document.head.appendChild(script);