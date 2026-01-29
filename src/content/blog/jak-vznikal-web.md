---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4VYECP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T235152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd6xypIOXx8tcBRFUnKtAcT44jKguboBj8cu5UTmZh4AiEA6EFFnJ1pv1yRXtYZvpZLIiHAWNR%2Fp20kg5uk5fR4YrcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpq7WZRSUFq1voDtSrcA1ftCxTD%2BBkrUaMHaayXSJWF2t5WuASSFldE7k0Hao12erDe6QznydLm06HnMK7fmm3vmHi7cfcQU93cztVNCbb2u1CYckU5NqVvLaaD4G%2BRarbjRPESO2k1Xue7mA4nVKe8Bee8Q%2FmdWQea1AZWqVC6t5fL8s1XlodHdBq%2BIntSlkgvwbqjfwHZOLRWBe5T5lqxwhXZ%2B0TiS1imijRQ5lKNrJXs3Bz5fpjyiLCEZ%2FEy9YvmXTUlTxeN342Q9C4mSTPxRiYRtXKRvvP3ROZ3TPqZ3UUKfoyw%2FzX51rbXlUCgI4Im00gRf3vGK%2FxK1ftBxQ6WSRgrsAgocTTq6ceWTTfzNWge6UY6M4CZ0zCTFp2hhrCqMH2Q4sE%2FeO3W6s4gjl1k%2F0gtoMK%2FT4Lu5nxIEahTQZ5%2BXkYLIyBJko7ipvBTB4qiQy0yUeN%2FXjtIbQv6STOgUzO1TAqw1OLrNjjcuEiD9JRv7k7ThyB6pr3rMCTFSiOe10eRUaMbhwjYzPlh3J4yPgA3thTTqD78d9JkobUHDfLI2P%2BEt6kyi66uB8t2e8S4xMl%2BTbw7MkYBR%2Frm47jgQzVjo9MFunTF1NBse%2Fp%2F%2BHnHevCuuXu%2Bb5QFVnW%2BkfsEQrVRRNT0RnP%2FMPG978sGOqUB0PRD6OZ5jdZhxFdX5Z0fddTAFy6ZTU7v%2Bhm4BIQVtxaMnJZz%2FBxIlYvBEm6ECBnMef2%2Ff3b76CrvTFGlWNYjZSgObdmfbXYtFOsZVACOeRhTcUre1CrJN%2Fy8ZggYUzbIPWBQRQarU6QKThHFN%2BsMc7RQmn%2F9p8oAkcVB6pu%2F5MikILKXpcdkHrYanWwN9wXAwWbbKBD%2BFYAAuo6iEpqUHa1dtb6b&X-Amz-Signature=1741fd2ac1c44529a2e41df45ebf5dd9c30bbd206b1fbd7a0c6df06635a72c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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