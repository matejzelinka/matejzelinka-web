---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQEIOLX%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC04FuX037xwmOS2LgDqGicHREx17B6cA7PyydnKBt8mwIgMBL58C1a7DlSNSFu%2BAftE1lGnOfnlnFdFHe51DVsZOAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTNdSXJtFchGKrtKyrcA2YHXdNi8WAmDfyD%2F9fjpZFTZJrSrTL94E9MjwgX%2Fg%2FsfwPPk9qjMe94lAbaukuIJm9%2BCH4pgZ62LZeFtspNp4JGFdsayQDqyxIrfsPDZ2RocJ8F6AfXLa6FH3jgMK2kPA%2FrlSDLQfl6O7xNjThvNQJTtpQyRFYqxBrCpYHG2zTsQ31mSTAG5n7LDhh%2BF90st7tmhIFaZ0NzngID5CPEofBDAi9cKP%2F4l%2F%2F5zivSxen1HTk7Hq8ALTVhTCht0aFmJBjH%2BDhRveUML8pk3T%2BEt%2FRxKYzmPvQNbvlRcgr%2BOGDFKj%2FbCPZUJDlM5HUecl0aiLCsuvnwmWt8zA8mp4pfB7Sp9A3CDYCMHSK01xSfF0Hh6EQCLjyA1QKw8DGk2wWDxsN1hVchv4Rhafcarsm80rbSbwgid4ViXSdBzmyUWKudpc2n%2FuAK2Y%2FU%2BiyH7WZHiWVhEnreAyoQbEwLEmIEDg1p3dHQVF8PaG%2BJAH8bvy0zdyr9izzzgg3AteJjBKEIl22ty1j4MvL1%2Bwghkkk65YO0O6jQgutswwOgN61gHR2A8BpeQplWbGVtUNJLDIKt3v4r7uzfBPxmQSuRH%2Fq2NmSZCAp4fkjZBpCSJ4haZFU8%2FXVKvLh%2B9SrxldqzMJaT8ssGOqUBoMNaSRnycr1B%2BvvoWKqQEpkMSEouCvlNhYrHp5mQ5y%2Bd9ZOYLzvoiNFKS547svKNah9Z%2Fpe%2FwiYhTTAMkb9yQ%2FguQYm6brJlozNXKqCqQeJRoCHaWr8FtAVreLJx%2FXPAYn2GpC3RwZ9cLWBqeMfhfy4%2BG9fSz1QZQ9rhmvTgYyDm5OBOBBvI%2BEYTeYRIsqzil0gcRpBeLYOM6%2BGo58BW%2FQU%2FzUfi&X-Amz-Signature=9233d83daab81166656a06926071ee158860612d0d47d6fdeca71fb61debb815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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