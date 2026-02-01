---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOGDJGS%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T102936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FUciliq9tkPXjSn2pPAA4DCpkYDLTSN4ZO8wa0S6SdAiAPfv0k9qbmJvJHly0BTZeluxbavbDw8QZvp9ImYw%2BkKSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGCMcca02HFV6n2v9KtwDLvQdYztzYSWff1eWiFGdiLIlFksGvaHyqjmtqKLO4tDBzU1aCxEhyJxjH2UoTwxwgUnIullaGGWTB8Pt6%2BebL%2BTTKp4WvMrryqu%2Bl19Z26wfssw1SDKJIY6rzoiPmCErgCxVr4gRiEDLdPknKemzcVu5dJJTVdZkXZR3U2s7dsMc0PtXinmro4jYhts0HmNfulYap4cBIZoFpL8pf3OjgVLzULqQwa2WOwU3sqQpnuwF964099GiNdRHYWHyMzZh3El2dFbSEVC5M%2B%2BYcCwBbm2TNfNVytY%2F4JvDvg2f%2FYcIiNFop%2BwQY09elN5P5joqChjXLoBbXT2dLnvwSsESplm4opOw84xK3ReW%2Fj5%2F2DpVQHFXpvsbdUQxCy6km3Mog5nNvX8lz44KBAyfBxCx2cdx%2FnESMZlYxdj3Num9OojPbWksyzeJIGRfsadw3p4YqzSNpKXSK0c7dyDTZfPEwcW%2B6jkQ7tIo2JFdrJA%2Fj43aZm19ePq8f0Hpy6wagnjQGu0ujoIMUZbpNMmzFblWoGAE4ZGOCoIpEREnaz2hG6codZ9%2Bw2WTwW2c88euxcKbhbPw1rckb4kadZV0UzdDa%2F%2FHMwDLKMODx%2BeWLfvIGpsPfxQ2%2FrWodE6StLUw7eD7ywY6pgGMBv%2B89h1SMzxhnHxPbA0P2iLFSC%2B4Xn0qI3RI38U5%2Fx4VVhdbeUI%2F7g1GrlUWzH6HRTTGlrqOb4PZMqPi5Ac77fqP2FIt60HdpBqwz%2FMMkFqimOvVT1XwGDK7JZQJQrQPDIBn6xlnon1xUm9W2%2FzUy2vKGBZbPQyvmXtlM8kQuabq210CiGUgamKILkikoebtbpmcQ%2BPxp7knhPG5SiVKXJDcSETO&X-Amz-Signature=cbc1ced9026f52c61c8ca121e0ed3c344c68950b9f935ff6d8236eaea0690fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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