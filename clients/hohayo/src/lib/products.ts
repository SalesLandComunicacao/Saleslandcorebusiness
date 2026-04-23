export interface Product {
  ref: string;
  name: string;
  description: string;
  colors: string[];
  photos: string[]; // Google Drive file IDs
  category: "vestidos" | "blusas" | "calcas" | "conjuntos" | "senhora";
  featured?: boolean;
  newArrival?: boolean;
}

// Google Drive thumbnail URL builder
export function driveImageUrl(fileId: string, size = 800) {
  return `https://lh3.googleusercontent.com/d/${fileId}=w${size}`;
}

export const products: Product[] = [
  {
    ref: "044",
    name: "Vestido Três Maris",
    description: "Malha Vis Up",
    colors: ["Preto", "Chocolate", "Bordô", "Verde Musgo", "Mostarda", "Telha", "Rosa Seco"],
    photos: [
      "1AxaBp1EO4U8qqWE6ErSwAOeg1E-LCzeh", // 2300
      "1ONcMDRMpoCCfqsXLBGhr1QYCG9C6FUw6", // 2303
      "1GZkTvRGDmTBXVsEZkGAtHX5FYAwO-scq", // 2312
    ],
    category: "vestidos",
    featured: true,
    newArrival: true,
  },
  {
    ref: "041",
    name: "Macacão Longo",
    description: "Malha Vis Up",
    colors: ["Preto", "Rosa", "Chocolate", "Bordô", "Marinho"],
    photos: [
      "1onIE_eXaImY8LtZEDtyQf89hjOvXBkhM", // 2325
      "1P6uELlPxx1eJmWvaBpBdMRY-TOz6SE5_", // 2327
      "1OE2W9yHCwoPkQ9F6JOI7qcd_6cpVOmac", // 2331
      "1D0fl3XJ8AJ8ymZaj8DM_pXo6qSuiq6GF", // 2332
      "1HbinmcUn95ilYvFjjcUKKWSR6YjWeM_O", // 2336
    ],
    category: "vestidos",
    featured: true,
    newArrival: true,
  },
  {
    ref: "039",
    name: "Vestido Canelado Sem Manga",
    description: "Malha Canelada",
    colors: ["Bege", "Caramelo"],
    photos: [
      "1mU2XhXY-q_BnHc3BkkMvVFZOuDkumA-_", // 2313
      "1Q2SByh3pG1yP_JxbZlNzLRvATJECuf2-", // 2315
      "1p9TnmJDAUOrYJQ5SM3aCuRj7ZH1uzvBh", // 2318
      "1XTAEV220RnlCzexfgSRuX0z8EI5smOTB", // 2322
    ],
    category: "vestidos",
    newArrival: true,
  },
  {
    ref: "052",
    name: "Blusa Semi-Cropped + Short",
    description: "Malha Canelada + Vis Up",
    colors: ["Preto", "Chocolate", "Bordô", "Marinho", "Verde Musgo"],
    photos: [
      "1S_kHsXhCWJkzLx7Qp0WssRLG6zOn6NO5", // 2341
      "1nVF7Y-QQKNHmzfDNlIvSmMoKDTwn0fR_", // 2342
      "1OryXxrslZXZ_O5J61PxAz7wYzZiVqbNH", // 2344
      "1uS3W8IRpq7PnyeGU2tAegNNd4sHLlbio", // 2347
      "1r3mi0KeP4AUXyQ1hIzN0xDMtSU2ngzwo", // 2352
    ],
    category: "conjuntos",
    featured: true,
    newArrival: true,
  },
  {
    ref: "07",
    name: "Blusa Canelada Gola Alta",
    description: "Sem Manga Mais Curta",
    colors: ["Branco", "Preto", "Chocolate", "Bege", "Azul Marinho", "Verde Musgo"],
    photos: [
      "1IOfW4jjR2Dfh0i55-BA9mcDi8QG1G6CD", // 2364
      "1-PDoBq2ebOX7pTGrY_7oHTV1X8Wm48st", // 2363
      "1MXxeaHIXVfbJhczI-ulRUF9Vudn2xnT2", // 2369
      "1dsRWaEAUpqhE761WKFFvMl6NSDPDUmWn", // 2359
    ],
    category: "blusas",
    featured: true,
  },
  {
    ref: "016",
    name: "Ciclista Neotech",
    description: "Neotech",
    colors: ["Preto", "Vermelho", "Chocolate", "Azul Marinho", "Verde Musgo"],
    photos: [
      "1jzXP5RFuKhdUGE-uO_308nF3DFvChaRI", // 2374
      "1LX2K6bjsoMpgpXk_0uxotrOnXGmjs4gZ", // 2375
      "1d8Y-tsQYj0--MVzP-UFUNqlgYbXWLuJn", // 2378
      "1UTJ-hapZepNKc0ElA0D-vGTX3mxT75wF", // 2379
    ],
    category: "calcas",
  },
  {
    ref: "027",
    name: "Top + Cigarrete",
    description: "Viscolegging",
    colors: ["Preto", "Vermelho", "Chocolate", "Azul Marinho", "Verde Musgo"],
    photos: [
      "15KVpCoAkkRqoclYtsaIDAeDYXPl0o_kG", // 2402
      "1KV7JRx8RsneOEycpp4eZDz3tn3TGF9X9", // 2406
      "1m2-ZzfSUxzkJ-5P-FtaI8l3CdV5_TzBb", // 2411
    ],
    category: "conjuntos",
    featured: true,
  },
  {
    ref: "33",
    name: "Blusa de Senhora com Manga",
    description: "Liganete",
    colors: ["Variadas"],
    photos: [
      "1s3BLgmtaS5RU-693duPoIyfp7sl0DKCR", // 2418
      "1Gn2LCSjVRR5fY5FvrOZKEg33QmpBbAJ0", // 2419
      "1YG45PTguapAcCo3lTlHlxlOjfGZu7sGh", // 2417
    ],
    category: "senhora",
  },
  {
    ref: "029",
    name: "Blusa de Senhora",
    description: "Liganete",
    colors: ["Variadas"],
    photos: [
      "1TuhzEUB0r6lSb8-Vhlygjkn-7Pja7eLC", // 2428
      "1sv-D4BYFwS7x5eZ3DW-QfQGuU9SStAgS", // 2432
      "1jhTySJk5EU3gYOYXsrGoeXBrF-LtCjuH", // 2433
      "1ZNqGnuhMXdqGyB7-I5DVJfRZrD0kil1p", // 2436
    ],
    category: "senhora",
  },
  {
    ref: "04",
    name: "Blusa Poliamida Manga 3/4",
    description: "Poliamida",
    colors: ["Bege", "Chocolate", "Branco", "Preto", "Vermelho", "Bordô", "Azul Bic"],
    photos: [
      "1A_ai9JL7mqwxxRWBidAOmg8PBEh5m1GM", // 2447
      "1x9Bke1FJy5zkBOtmxPcVfg--FuITRr-r", // 2444
      "1Rww9l9bcTtBwLsIcFlrXSuEuTS-9fSMU", // 2441
    ],
    category: "blusas",
    featured: true,
  },
  {
    ref: "03",
    name: "Baby Look Poliamida",
    description: "Poliamida",
    colors: ["Branco", "Preto", "Chocolate", "Bege", "Vermelho", "Bordô", "Azul Bic"],
    photos: [
      "1hicOXxs2OQ1GNrUNUIbsd04hCb70O44m", // 2452
      "1Y14Falpqlz80PQkkL5zLmahP8Dd4k8q4", // 2454
      "1iLuOwmsusispxU29k23Y3l1QnppSyHQF", // 2456
    ],
    category: "blusas",
  },
  {
    ref: "32a",
    name: "Regata Canelada Alça Larga",
    description: "Canelada",
    colors: ["Bege", "Preto", "Chocolate", "Vermelho", "Azul Marinho", "Bordô"],
    photos: [
      "1jJvb0sE-ZtGi8oKSjObJwlqcOeX3yNBV", // 2463
      "1LB6RdSAxYEMuyxwFrSS1r7lvNuMBJDH7", // 2476
      "1B5JO4Y3gX6D8ga2ibL3s5urEFLHUd46w", // 2478
      "1JL3RQkJ-d1MtT9oi2VJVoHbM_0ZkFBb-", // 2483
    ],
    category: "blusas",
  },
  {
    ref: "20",
    name: "Regata Poliamida",
    description: "Poliamida",
    colors: ["Branco", "Preto", "Chocolate", "Bege", "Vermelho", "Bordô", "Azul Bic"],
    photos: [
      "1ARbVgiV36zHfc5WpPjgEKy7c8RIAVd0Z", // 2490
      "1TVPdZ8bnNHls28_IeKH8WnyWIG4nrzkN", // 2493
      "1pSB-wxsuGXStI4_AlnjCWC0EbpLRLM1w", // 2494
      "1xWVjLP2ZZHCPBi9hAUbQ5pSH50tAG6ra", // 2502
    ],
    category: "blusas",
  },
  {
    ref: "32b",
    name: "Regata Canelada Alça Fina",
    description: "Canelada",
    colors: ["Branco", "Preto", "Chocolate", "Bege", "Vermelho", "Azul Marinho", "Verde Musgo"],
    photos: [
      "1dACnL2Ia5SuYPFssA3TKthlbWoiKE9nm", // 2508
      "1TmfFar7LZt36gepJDX9TGa6Ywe4RB-q6", // 2510
      "19j0omwmVgrNrqczlfLJ9BTWRKXoC91-J", // 2515
      "19fVJ52rcjLCXmr-I33cspd7pJ9u08-FD", // 2517
    ],
    category: "blusas",
  },
  {
    ref: "31",
    name: "Blusa Ampla",
    description: "Malha Vis Up",
    colors: ["Preto", "Chocolate", "Bordô", "Verde Musgo", "Azul Marinho"],
    photos: [
      "1n3VxA0wyKRv6IibemDQ_IST1xoJcXM8q", // 2524
      "18k0Z1flfn4VRHrj-EopdAmyR3pst0InY", // 2525
    ],
    category: "blusas",
  },
  {
    ref: "21",
    name: "Blusa Básica Canelada",
    description: "Canelada",
    colors: ["Grafite", "Preto", "Bordô", "Verde Musgo", "Chocolate"],
    photos: [
      "1I2PqXE-lMfJ8e29Rup6k8a_EhLG_gaz5", // 2538
      "1sOU3Tf-Idp77s8IeSkNOWut3q9XuCP0-", // 2535
      "1a-y8YLGVUAvzEoV32FlcCYVpkZQlNov7", // 2531
    ],
    category: "blusas",
  },
  {
    ref: "11",
    name: "Blusa Canelada Gola Alta com Manga",
    description: "Canelada",
    colors: ["Preta", "Bordô", "Verde Musgo", "Chocolate"],
    photos: [
      "18EOmoQMvJDfrTfTWsQfW3kkMkTsbeLBW", // 2550
      "1u-fM1cnOIFJ7H2awXGlkg5PpNTjOfTbi", // 2542
      "180osbXxtkYjCwnv_TP9tzKbEzsFyNrpE", // 2549
      "1WKEXMwUViHLkDZhN9p8R-wNx5O8gZI0V", // 2551
    ],
    category: "blusas",
  },
  {
    ref: "06",
    name: "Blusa Gola Alta + Cigarrete",
    description: "Canelada + Viscolegging",
    colors: ["Preto", "Azul Marinho", "Bege", "Caramelo", "Bordô"],
    photos: [
      "1xxOKKv6gFsyC744DhTuMfW357--5ah32", // 2574
      "1kcv_g86gr6d-l4n0AE7AgYaiM8rhfy66", // 2573
      "11c-q5PgXReNRejyy-NCcgZByrtxAv4gl", // 2569
      "1EbGvXhXYa_8ngxi0IMR8DiUTJf75wrXY", // 2572
      "1M1VxcAa1KMnHpHc0WteVgyr_OZEjqoOq", // 2566
    ],
    category: "conjuntos",
  },
  {
    ref: "37",
    name: "Conjunto de Senhora",
    description: "Liganete",
    colors: ["Variados"],
    photos: [
      "1KcBhq_ob4Hax-3sMcAIfiVDgWzQXEAm4", // 2577
      "1PBhuONnavR2NsATLyqR9h-f9AWHuus7h", // 2581
      "1upHMkklULe3zAFjtfldfdTqTjBmT3XkV", // 2589
      "11yXpjzOnOCQUgFn1tZIvroJau106EGnv", // 2595
    ],
    category: "senhora",
    featured: true,
  },
  {
    ref: "15",
    name: "Casaquinho + Blusa Gola Alta",
    description: "Canelado",
    colors: ["Preto", "Chocolate", "Vermelho", "Azul Marinho", "Bordô"],
    photos: [
      "1HVs_KynSRZykSbsnSbLVKXGiYtrIiZUo", // 2603
      "1HrmoZ4Mvm7Af78ZfNlL1wmDOTEw_Gkf8", // 2607
      "1ea_UbHUOzy40uycxydmZgVHuW48knssc", // 2608
      "1W3jeU7cY06IXS6BZ9gRf0izy0DtNJs2C", // 2610
    ],
    category: "conjuntos",
  },
  {
    ref: "01",
    name: "Calça Neotech",
    description: "Neotech",
    colors: ["Preto", "Chocolate", "Marinho", "Verde Musgo"],
    photos: [
      "1HVs_KynSRZykSbsnSbLVKXGiYtrIiZUo", // 2603
      "1W3jeU7cY06IXS6BZ9gRf0izy0DtNJs2C", // 2610
    ],
    category: "calcas",
    featured: true,
  },
  {
    ref: "34",
    name: "Calça Saruel",
    description: "Malha Vis Up",
    colors: ["Róseo", "Azul Marinho", "Verde Musgo", "Chocolate", "Preto"],
    photos: [
      "1kp8xla1aa67_cSAlMMOZSpOLRqXX9SBj", // 2632
      "1h3SF3iJluBAhJfL33LHwwHlJ7_rN5nSC", // 2637
    ],
    category: "calcas",
  },
  {
    ref: "38",
    name: "Pantacourt Neotech",
    description: "Neotech",
    colors: ["Preto", "Verde Água", "Verde Musgo", "Bordô", "Chocolate"],
    photos: [
      "1BFghDs6I57E_tdm4ZuaBDBAt1eS1R7wj", // 2655
      "1h-222toB_JVZBcYUf_gkFZ1zX_Ab4olJ", // 2661
      "1gujnU_Fx3xx59EqvyBAEpiySWY44sUz5", // 2670
      "1M5o1eHg0BPMrJBUGwCmOEhRK0fuMFEwZ", // 2674
    ],
    category: "calcas",
    newArrival: true,
  },
  {
    ref: "16b",
    name: "Ciclista Neotech",
    description: "Neotech",
    colors: ["Preto", "Chocolate", "Vermelho", "Azul Marinho", "Bordô"],
    photos: [
      "1VYaqb8WCJOUtjkmWPGwwnCA_mC71JD2F", // 2677
      "1PEmeqqRjj7Gx8syytpAN-i4AsTWvDsmC", // 2683
      "1tUJpMc70MbzRQr0y2Rlwk5W4Ju6qXCtQ", // 2681
    ],
    category: "calcas",
  },
  {
    ref: "19",
    name: "Legging com Pala",
    description: "Viscolegging",
    colors: ["Preto", "Chocolate", "Azul Marinho", "Bordô"],
    photos: [
      "1EcFaTgScrr01VIAXJe9ryrbSZV_pNr3T", // 2686
      "1cviky5OvAMk4OOfyyKuwwHr7fuNn1tGi", // 2689
      "1fNNuczNSDO8BJX4MYIGMMcAmngN3rRgg", // 2698
    ],
    category: "calcas",
  },
  {
    ref: "17",
    name: "Cigarrete com Pala",
    description: "Viscolegging",
    colors: ["Preto", "Vermelho", "Chocolate", "Verde Musgo", "Bordô"],
    photos: [
      "1Y-3T3D8O7TUiSHXEXgVMAvGTauGIzMrI", // 2706
      "1iiP1GthZheNYxR5Zgyi73j8CUzFDXRlL", // 2707
      "1Td4OKNw5BURJOpzWlHCqOrMc-YOVBWYX", // 2713
    ],
    category: "calcas",
  },
  {
    ref: "53",
    name: "Cropped Canelado de Recortes",
    description: "Canelado",
    colors: ["Preto", "Vermelho", "Chocolate"],
    photos: [
      "1Td4OKNw5BURJOpzWlHCqOrMc-YOVBWYX", // 2713
      "1JnuE8fS1z7Q4zJVcYvqKZaQiAKhkVlrS", // 2717
      "1j4YN5C9pcS_DzhVmsu4ehh4mDEnpA6dM", // 2719
      "1o6WXj2GBKxtWqKugsyfAqLAM-DcwjAmY", // 2722
    ],
    category: "blusas",
    newArrival: true,
  },
];

export const categories = [
  {
    id: "vestidos",
    name: "Vestidos & Macacões",
    description: "Elegância para todas as ocasiões",
    icon: "vestido",
  },
  {
    id: "blusas",
    name: "Blusas & Tops",
    description: "Versatilidade no dia a dia",
    icon: "blusa",
  },
  {
    id: "calcas",
    name: "Calças & Shorts",
    description: "Conforto com muito estilo",
    icon: "calca",
  },
  {
    id: "conjuntos",
    name: "Conjuntos",
    description: "Looks completos e harmoniosos",
    icon: "conjunto",
  },
  {
    id: "senhora",
    name: "Linha Senhora",
    description: "Sofisticação e conforto",
    icon: "senhora",
  },
] as const;

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getNewArrivals() {
  return products.filter((p) => p.newArrival);
}
