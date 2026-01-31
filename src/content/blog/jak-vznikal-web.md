---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O5XS3VV%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T232536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdk72HIYgnBt3eRkijH40gRNsXYYT%2FGLRfQ0hHR5e0NAiEA8U6vAuyRYmHgNxWSejFBqau%2FK%2FXRG2W5lOd1EkYw0ZoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIez0MfgGWVQZuZjCrcA6GF0KYC5kY%2Bg5cpj0F7avEPUZPkT3MgFdHYgdx7bA4NpM%2FqJpIvejLnCGIzyYopOH7CqaATpkYRIV87f2m6BzyM%2FdHS4ltKgmLD0DeKTesQco54B36PwwXAs0HQh%2FFwo19QhXcexxuYJEXcVWEVBdI2NMWRFtjk4HcTSHjYcY%2BJK3Rxkl17WTNKN1hzxYdFj3g%2FjX5o6keiLZWwFQ26111YO6ckBriNDfJuc%2BWcERih0gOLZv9Wp521T480PjcGNigJqkh%2B5PTvWfrZW81ojJu%2FSfV6BG5eqaFJ1wELCkCTkD0bDBIKCdRswPUyguG%2FTOQUzW0P8VONFNqx407voDWdI6a8GjgYxflQUd%2Bw%2FdnG0GLT8MkD53rBiEYIbagJW3rNMdcNzbbsiEEqtBlpc%2Bfk%2FsQb%2Bu18KYmiaQ9xY%2FWntkavHvh1tEJX6zGsWOoxNJadosm%2B%2BFvlDYjCbN3R7Lx%2BttuQ7%2BZGJvPOBerrar98SYlf0FG3Xj4oWpDL0d1TUS%2FAyaDhHbxEaP6HxZOnxEcrmxGVqWbPw9e8dWdzYM%2BdFB2FlFbq9wxG4KRLGq22XiHceZoPyedOcsNTBip46eZRSc6GRaUjUNMgd2uKTpEaDUw%2BOI%2FC8Ux3sct9MPCh%2BcsGOqUByrqfk5F1dau1jYDM9%2FJ09Bp48zgd1aV7m6Lo7uC0VKy0CGwRTgPDkDgil3%2B%2FkFlV6Z9yjgyN2X5MdFtFqLH49CIkDwHlqUirVwW2S8YqA7HSnGTvsVyUQjc3VKSSvp%2FQPRJIW3MxO4j71g8Yzm1LFeeTUoaW1yxNy%2F%2Fh8OrSYpjok9khgY1h%2BhCqQ1M68KemAtpTpW8bO1zkxqgA3%2FBFWZq6FYME&X-Amz-Signature=be6388cbe1e6945f5a4f93d4fc361ec49ec5182c4f656d34e7de2844ad27ae91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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