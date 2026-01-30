---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFUV6V5%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T225631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDyG6EPliYimgykwo4bmP7VvxuqRvGIDj4znc5mwc7oAiBLSsM5uSjdsdUYCZsFDO4kHmuLOVA8R%2FJBTmo4O2goeCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkPEsgBfQATODTJ8sKtwDnueFkwK0Fx3Y%2FJUFV7l8AJ%2FsErybgbuuMFQ5QKDcTfXpqqFjXglxWcRc0dZhUR6r2bZaQwU14Pc4Gw9u%2F85SRGa6Wk97Yt3XzgAbAyiZQ73UzOub0hTBtQxJD7KKeYBJFszhBeHcz4fgdPDZCLLTNd6IlIoqa3zyYFYDGGQP2FGK%2BImsWl1jktlem%2Bowu%2BWdMUq5nj%2BjgKFxbi9TuPauO6C6OLcVXiI4zE80R%2F5LZzwcQJL2DNftjj0ihXLOGTbtQozQ4Af16f%2BiLfT7g1HORZuUOU9D%2B3JerVVEBjAkFvEeoCfe6H5T9mbiwgeB%2BEps8lvccA9mP%2FACb179DOebT5lhTihKVeYtci2N8IDqpMXuVV%2F5Lefn5PsELyvc7R40q2DlKTzU63GWKx9zvcHgQRw1ebGeSTl4VeBuPXQnTr%2FZcKvl%2B5V20EogYT6R3847Lvr1S6f7xuqIEo1jXO1s3C8SjnV%2FEtAE7G1r51tY71JIkvEu3lBwKbt3q92V2dera%2BcziMBZQBFYkeAb5%2BACY5qe2BNxasZwEkDrTAOe4f9rmMPzzd594wojCt3jC%2B8910VkEzmaJeK9jWHjyDdik9oCaGfty9koojiKydGiiTmnP1Q3wNrWqJafGFIw0dv0ywY6pgFITVlDQBqWEi0UEwLxDWTxjx5cF9r2laERQ1hznRR343h3%2Fx%2BpE5V652mZzWOOo3K1pgQfEvo0fvRmHtlq%2FQuAYI4xzKoVhCUrS%2BpqBapTaNsiULgxkBvcg2cbvSErsV4%2FPkmJaxDtF9LARlPvtmjQ9ACyCLyb9mRG7FHHRMpi5F5in0BgafMdpJRgUZsVOLXphc3abQ1wMZZND7ZyIEMnA0HMsaP5&X-Amz-Signature=448f873599b01973f40eb2190d7a7a7f251c2b8f1788f0c57e4da1d2e93198e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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