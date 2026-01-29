---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVYMQGU%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj5WybD7GJbJwJOPaEkOsjkdBi4BkGCUF%2FRsShTkjLKAIhAKVnL0tIxbZCdMsL8sySB1dFI8R3qMenUjw28zsadc1TKv8DCHkQABoMNjM3NDIzMTgzODA1IgzmEg6r52GDaG7Dlgcq3AO6FRqu38yvE411n%2Bze%2Blwcw3NcmH0NAwH4F2RlJ7fdBcOGmw%2FOV4KiDAwv4wvaGnQK03XBxXQSX3NRNd6HyNSmgaTbcM%2FNRYKga%2B5%2B%2BquV7K0ODr8HFUIoMv%2F4IF0Gi6G73BZRUgTr9kyQO6cpyF7QgZbH3KsKXZsk5%2FrDNttfe2RPeXaAAqD1mIoR8ytx3as9%2Fs0onw5kBvdKswLbc21iwJ8XbaJNgTVujFMxsDud1dY%2FoZbktOl6YLngBG1VQ9UPtK35IK%2F%2FzqoluAEjNfbG3jiQBMCRTIYlTiVcnv5NV2J35o%2FWX7ri5Ke8AA225t7ImiLh9tFaESr6zjSnEd2Xi3DhjN7%2Fsy%2B1BH4tPECtqY6LtkHCL%2FdRC6x2OO%2B%2FPbaKNFQXWpEBnEgGQg1Yi86zFqtPvoCTjgYfQM%2Bh8z%2FhlSrvZT%2BMhu7m88wluI4xU6%2BLY75ER%2BBpyNz0SUHCExjgsrk%2BWwP687dPZ5tSmSeAeMNAFd%2B2zc%2Br4ytLy47%2F0hF3rVens73ULJzQpK2KxiTKtICt94lJUOWUf2wNXG%2B2KZs3CGTIvtM811WtmuRyg6SmN199okDuGDGRh4Vtje97n4%2BCPL3Ea5DhDoRXbgS9MtXXPEuEfvfXcHZIpzD2uurLBjqkAVzaACY2sZ2scMXsO9vs2KdP3Ygps3l9j7srbw8UmU3rloyPTsVBGFl778n0%2FTItccruljsgPQ9Uhzi2Clbs0apH3a1ivKva9LbRCvsPu8GHQxP0DCPrqQg3Xas9bdLkklnwn2Q1SRCnIfpEXJdCx1BHgAfrso4XKrk6xD6sWPUoTOYoyhTOkKw4JJlXlb7FBt%2B90jAiGYsp1RaUH1uPyGzynaOf&X-Amz-Signature=4c2c395957b4b6bcb528253e8a150f4b01b08687cae34680ebb1e6bab71c83ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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