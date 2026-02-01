---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JKWVKHF%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T183857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCqDsdq2V0OQ2PDlPtYHBrDFGE0XVEIgr6uudZEwXQZzgIgCn6BkFPpVNZyVVtv6RIfHIFAq2PGguEUDPQg2VPIYxcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYnnt8VgoQO4dMu1SrcA2LYOx3dyybjBdfYP9eJALlH1pHAKZqSdStQu6Kp7%2Bvnr%2FXMAsEO9GdBBmXOAf5He8pFFGjJ1I5HQdO4ndTUGip2T%2FsX859NHioeOEyLtvyHVHBgNkydgPzDBKwX3U2ujQ%2BgZy9axOMXL4i4sS9Q51NbaBq0jLaDwlLjDJdE%2Fs6ubivriahdQTpPjdbutMDxLeKY0ahyLXlwEIhtfNYwYMgGqDt7jsvcPMWJEFh5Xmg7d%2Bq%2FSnxJm8sFheuIf0nr6K%2F0aOf8PbG0vet2Iq%2FkDJyqqvM9ht6A0xGzbPgYudc0KiEjv2R0U2Y%2FflpnmlN7usuEQB3BXVyHxMY2PbjkFsn8vA7mizpexvupaC0BYdEZVu7z5brJUVKah0WXcs9BH5i9v1glS6mwhpJgHpbNyupE3uvN6F52nEfSwr9tAruKsehJxr9wnBo8cry0GivtblNN%2BmJMkKLp8hcy950hdQbcR4xWzAKdlIvsQh07jrdSS1z4ExrBcJvDFh%2FhZf8uP2l5SGdGctNM7lzRF20U9iymsP2EylvCJxakKZiA5VbB6oJAPRvKLGLJtmOe0hHsQjO%2Br2xbjX4fH726v3P%2FRyVSFPAhKPRxQ8XjTq6lltkuYXEFsDQSm4PiR2jtMOGR%2FssGOqUBxWICNwzye1%2BfCophLeadW4mjyYQQgnhrD9ROv4X%2BTG1T5AbhYwTwjiPvwYk%2FgneHhF8H%2F8waeJvx1l%2FfTzRqoeW6l0%2FQrif%2FdUcYSHYZmAYZNt9eBCxjV1eKJ47GvJ3%2FGwbaCeSP0I54Qr%2BeBA9AgcaHqMwtfa6bYuWefsjs8HPw1XeLKNMfNhkFtgNRSij6jWRfgtwpH3QdfsMN4Ds22PtJsv8V&X-Amz-Signature=3a3c307d40e008ecd24d70faa8248ba69e95bf0e0ccffce34ae93f63b7c0f8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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