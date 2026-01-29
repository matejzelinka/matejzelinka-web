---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EYILA5%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T101601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn332EMEryAWhAAK53YOOBRAB4i9w1QOiCTj6yKlsOQAiBl9%2BVS8biRxkfDdpVJ0SFOdJurnVuJw6gCDeKKXDWVCCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4PpUOzYuRjGAn0SKtwDZ3gi42TvBqLrRqk8InCCpSFrMvSIMRXQKX93XR2u0FHJJhez2IMo4fP80XImyYNcCENyzDsDiibB8uFqaKQkGxoV4vBq%2BT1PsBiUM0TLgjhSF4ypCeP7fO4SRSeQVfUWbBv3q2sl5rOyL5QYdDprbwL93TGRUAjWkF65ZvV7TQoyKE%2FVx7MB5cljQahK0WKKe4eDt7wrWdKpwo4%2B2ntC%2FgrOe6nQhn3QwunL4EyNe0bn2xv94jil8GfZwk7Ins1f0f7LZB9RcleB2kxAyZTPE6Z7CKanlAQXh7Hn%2FiJcHbqtnH2C9a%2FnQrUD%2B%2F%2Bv1xqEImZSGvgU04A%2FOHjnn82o5ieZmygFiA4Cn%2Fu1EdqkfkC1eb3QzfGeq2fEB1xrqa9qBJCFweme%2Bkfw65rXDMgvlrO2h0KIbQIEY30gqdTaQ83IerL1tH7tA5pZVAYm3htDF7K2zzaaZ%2FKFqcc2v0e7N9KtCOjobO7b%2BujDZ0WN90jo3nLDgXKgSsbU4ewxTjCXbck4xtqv6oCno%2BEpiPeesCTL3xz1d6OpMToNqpWpkmXS3ukv4nB99UNbkWPUGUvbQsL4B2B2OogzTo2Is24Vbyeeg8W2%2BdLdTnzlLvjzqoT03yIDoxHUcMvNXWYw2c7sywY6pgEOmjYoQVNDe97l5gVzWkFihufiCiURb9kvNDeEry%2FnWPgPyUy0%2FcboXdkQnbfqNN9Qn2WFgzZEOUwcF2g8vhSdI9JAvhS9xeHkuN0JSUisXFKgH4%2BuwO2WqLDRw8cMnN5p9Np2vK9CkaCXe%2B4%2FZzeUZ%2BpDHjO4OswKjghOyS7MZAYYXf%2F0d6vmfPcniD9Q5%2BlTpq5zFGGFtetKUUzUFiL6kO43LplJ&X-Amz-Signature=c6291621bb7359995952aa9fcba39e62840bc419cf9553018eeef7bb967e4a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
seoTitle: ""
seoDescription: ""
---

Tento web nevznikl jako hotová šablona za jedno odpoledne, ale jako výsledek postupného a iterativního procesu s cílem vytvořit funkční, udržitelný a dlouhodobě rozšiřitelný nástroj. Hlavní filozofií bylo, že technologie mají sloužit obsahu, nikoliv se předvádět, a že web není cíl, ale nástroj.

Zde je podrobný přehled postupu, použitých technologií a ponaučení z vývoje:

### 1. Strategie: Nejdřív obsah, pak technologie

Úplně na začátku nestál framework, ale otázka, co má web vlastně dělat. Cílem byla prezentace projektů, přehledná timeline a blog. Zásadním rozhodnutím bylo, že obsah musí jít psát přirozeně, ideálně v Notionu, bez nutnosti sahat do kódu při každém novém článku.

### 2. Zvolený technologický stack

Pro realizaci byla vybrána kombinace, která sází na rychlost a jednoduchost:

- Astro: Zvoleno pro generování statického webu, který je rychlý, levný na provoz a bez zbytečné „magie“ nebo JavaScriptového balastu.

- Tailwind CSS: Použit pro layout a typografii s cílem udržet konzistentní design, ale bez „utility class hell“ – tedy s důrazem na čitelnost kódu.

- Notion: Slouží jako redakční systém (CMS). Články se píší v Notionu, odkud se pomocí skriptu exportují do Markdownu a validují přes Astro Content Collections.

### 3. Design a uživatelská zkušenost (UX)

Cílem byl prémiový „editorial“ vzhled, nikoliv klasický blog z roku 2018.

- Hero sekce: První dojem tvoří jemné animace, ambientní světlo a gradientní text. Technickým ponaučením bylo, že gradienty patří do vnitřních prvků (span), zatímco animace na obalové elementy, aby nedocházelo k vizuálním chybám.

- Projekty a blog: Sekce projektů byla pojata jako horizontální carousel s jemnými maskami na okrajích a šipkami místo scrollbarů. Pro přehled článků byl nakonec zvolen formát „jeden řádek = jeden článek“ s důrazem na silný titulek, což působí více magazínově než klasický grid karet.

- Detaily, které dělají rozdíl: Pro zvýšení kvality byly přidány prvky jako scroll progress bar, odhadovaná doba čtení a ikony sociálních sítí (Tabler Icons) vložené jako inline SVG pro plnou kontrolu nad vzhledem.

### 4. Technické výzvy a „porodní bolesti“

I když byl plán jasný, realita přinesla několik komplikací:

- Notion Sync a tagy: Objevil se problém, kdy se všechny tagy zobrazovaly jako „ostatní“. Příčinou byl nesoulad mezi typem pole v Notionu (Select vs. Multi-select) a očekáváním skriptu. Řešením bylo přestat vymýšlet fallbacky a zobrazovat přesně to, co je v datech.

- Deploy a Git: Během nasazování se stalo, že web i po buildu ukazoval starý vzhled. Problém byl v nejednotné lokální kopii projektu a špatně commitnutém kódu. Ponaučením je, že Git je skvělý sluha, ale nemilosrdný pán.

- Vizuální ladění: Design se ladil tak dlouho, dokud „nepřestal bolet oči“, nikoliv dokud nebyl co nejefektnější. Ukázalo se, že méně animací znamená více důvěryhodnosti.

### 5. Závěr a co dál

Aktuálně je web postavený na pevných základech: má funkční automatický build a deploy, obsah se snadno spravuje přes Notion a design je klidný a čitelný. Dalším krokem je ladění jemné typografie, rytmu textu a mikrointerakcí.

Hlavní ponaučení z celého procesu:

1. Architektura je důležitější než efekty.

1. Konzistence vítězí nad originalitou za každou cenu.

1. Web není hotový projekt, ale neustálý proces.