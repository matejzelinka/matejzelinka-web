---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUDJRFU%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T192700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIB1XWPG%2BS9YezNPlRJ7LZ%2BVESk9iDBANXtktzPwVOZmQAiBwvDO7bZF33Y1DroIGb5gpbVuOqhe0Pf7FMy2vhkAZOyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqSCBIDopy4yv2xvoKtwD2ilyST43ieq1%2FycrfrhW79JCZUe2J%2BgzDBMR4vX0PenEiRMoLKT80hGbiSd9Z59HSm3CC0dbekY60x816SAGn2pLdLmJPL9jOYF3UmPH0xX6ttUiTpiuyOASIck%2B5dlyJ3lRCGkLTCxkw5k0AZ3KqP5sH%2BBv%2FomSAB%2BESK1%2BUnotN%2B4OKgGYB00bo%2BZJ%2BDHl24Ny2mMz6FE7ChhzyIozWyiIBlXklw0rMWQLqW9HEY7Aodw7NhuL%2FP11PekQU01s%2BhR%2BW4I3K2jG8Rg9%2FdwyxJ6KMVk2kKwwxYQriVgwDxBrEii0qiaU3LA%2FC8o1CRXtpxwsgg7cKpjA324VKttk7Qf9xwlodxwHy0%2B6FGZTxK%2F69fgL7uz5J8Mt%2FFMxcIQ8eozJMrBqOTIzQ5BEStaNH9ce5UfiSaxV6NSRlLAwyR0F77ETsyXZmW3zcCEkymEf%2BhrS8eQ4%2B%2B4uKCyi%2BWQLaXH7tzpBxPdvoNarnJMqc9S7%2FCzo7%2FJ0QpoWADIyZhYU3%2ByBjCC%2FXADzgE2fOufMoZ2xNQ5c7YCpJItEYHPRePXsIakLwJNO4IvpFFIES5xTjXbKG6SGyjpQS2KI7uxKAtpRslbzBxAZ%2B5G4g%2F5VDfrRpGzZ%2FkvPSRb2aEEwoo3%2BywY6pgGcyIh7Cw%2BD7VOyfQuow1UY7BxS0F%2BSRt%2B4AXrG4yAcNGaeQG6rWPDcMpk3yjJrYGDuHN50BCanvtfhysODq%2FOfpISQs8QQ8oti8S7DQt4dqb5AeXoCnF4YC0x9X2Hn6QVwHYa429akhrXYQmI%2Fs0nNhB1u2AGZAXW4xp01ee5U8mbcf1DR7GB6JtLxO%2FKvEPxo2OMlZ1C%2BOpXW4kw7Dk8KWcLBM552&X-Amz-Signature=23cfc4cca0783c9f8afa8edbb7ea556cb347851165bd1db219cc3397750138c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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