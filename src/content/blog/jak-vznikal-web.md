---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI56L73%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuVZTCjEAEu5uZ2e3AsRkW4UhXhwcdwUJL6CRCK%2BR1CAiBUI%2B8vLSw%2BnVs3Xu4FZC2CPOMxtiHqvAZHNzMycdgsliqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4c8UYw5DXdfeBQ4BKtwDND8go5a9xCw2uQCPxE4UMYgPplotPdPQmIVq%2B73qeVr%2BNDp5pdftNp0l%2BY8ynMWkR8O%2BO4CpklgnwZfyVMONXCL4bomZOr9ewpNI3hKWM2lDqDJBQoQR1fCbDBb%2BdHNw68ECCUWe%2Bh10EqqmEhPKTF711%2FKImsWqroJ4u1S7IJ0E4SKXUGUKguOpifj24xEmP4nQwMiwX4qY9q6f0NGt6sm4k5DtdMcETPNM2qQYMSdcfaHvleqi%2B7hjtxZfXtiovbcIcznfapI6xZJu2O%2BfMFT8997hI6vu0d4qZKnkCkx0PjFREa3Ys1Ogkk207SfevJHUvPLpI2xH3c5lwaiw%2FEBXfxf0ZWUyKIsmGXF8pzfZWP13ddYQKJtpK18rAa9SaA%2BTZ2v7Ji9QhQae%2Fq6P2GfyOeAvLRyWE7lFBLymtP6HeHscdHa5b%2FcZI%2FCgpvHWbi9lbnDm7cXWn4BKWPzZqftrr3DJIYasjw0rG7M2ZtkVKfZJ68mYvAbQVstNMDB1wtqVyNPjY57pmmKgn51h%2FaT1AMvXWRew%2FezQw1%2Fn4FlUwBJl6%2F%2FJvlxlONJIi%2BFhpovAnnNh%2Bj53p9ScLwXbhUCS00DJDUcBuuAtg0YGQ4PqP8fAClWig%2F7dtlsw2c7sywY6pgFL9JQL6PLreEAiBw%2BnRqXwYyyKfjnOX4M2sV%2FOauIx8fZKeTSq%2BGISzQX4%2BK6uN2ffaeUPvE4m%2FieOJfrJVGAFr75r6FvFFNWcjdcGg4VZmR70QYSzpuMrA4PrT%2FCwZChURolLq%2BwMXzIUypZ%2FgdzF3c24PBOnt64byO8bPtmNU23MQUGRHHg%2FRltMREl12u42J4jXkcVick7TX9bwDY%2FwWd2F7112&X-Amz-Signature=1160c06d419562f221f8c5a3ad7f5abfb7eda28af41aa3be19e32371ea265f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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