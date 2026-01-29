---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZEOF5G%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T113329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7MzxmVP505lhdl0Iih00JU%2FVKkx94Sw0zuCABaCG6uAiB62ZDovbOINTeMuVS%2FQHgKO%2BVS7lXVuHhrtRUERFXcbyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDNWzHD6Ccg4chKhVKtwDP04zTCp0nPiuKQ2vz1X8fmqHA6%2Bl%2BE3fR3dElWjvSWrVGPz4KZ5CHy8fN2WaUuBP%2B2%2FQ%2BPvTRyErHGxnbXsYPJqww8Frb%2BVxHV3L12D5QFNyqHvTrCSPTj1ZNDmNNtW2gK1qrIwNZEsZtahitIfo4mRAQRiXAGCl4c92Ounk0r9hfcwjcmel2IfaqGG93X6qr%2Bl1AMexbW%2Fan%2FwVzaMVvzLAcO%2BQZuQZiT486MNHJGmAj4u3eUU18gNYjcMZfEUlMj5ZOIFjUBXL1H%2FaGEJH57Nzklejoac9zEhtaYj%2F26I%2BxfE0fuhGIHpoqwK5fQKyyfrpJUTjFqRCjgFM2x4u3Fn2tgEMEDKwF7aTcopRmesWtutdNkn4rPX5DBvWVyKVBS2KI3waCUauxNGpjC18BS7rhT2Va561VZBtc%2FvOlIjsEGaqmytpQ3URKyQOCUjIf%2FoQ5w5crEXCF247SUYMkD3u%2FMRBkJnNVvxefUy0ZwJSKETTnI7VrVYVJQGXUAubJUN2uCEnx1kZNz7a4A8hP40PtlUP8a%2Bw55btw92v29iRNUoygmbHwzffJMXcpkMxrE2iMVuVZ606TmPaN7%2Fu9SWYQgOVFeNSL9Fqe9Z%2Bs8qzy6IeE3XRQWYFhSIw4PTsywY6pgG%2FBvWTn40KwY58hsq%2Fylz9q8D9RMhEluTJSLA6vEeqYtuskV%2BYF7tzlsdqPKb0XllGrVqOsH2n%2FrdVNJ%2F73dNm3TUGEqHnGUqHYEgozBkijTv5yIzscAkYGfAU4iDWpQ6zr6%2Bj73fm6bWfmOouI%2BTMXKrSPBWXRfzLMxKpZSwNTCH3wcf67G%2Fy21QmrloAxMPuK5h4idIgQUPF3lrK5vNAS2%2B5QygS&X-Amz-Signature=d251f09ba7e9353ae2badb3ad3af8d5ea6f03ec9d74f1fd3f2c1924c054d27a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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