---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "/images/blog/covers/jak-vznikal-web.png"
seoTitle: "Jak vznikal web www.matejzelinka.cz"
seoDescription: "osobní web, blog, stránka"
---

Tento web nevznikl jako hotová šablona za jedno odpoledne, ale jako **výsledek postupného a iterativního procesu** s cílem vytvořit funkční, udržitelný a dlouhodobě rozšiřitelný nástroj. Hlavní filozofií bylo, že technologie mají sloužit obsahu, nikoliv se předvádět, a že **web není cíl, ale nástroj**.

Zde je podrobný přehled postupu, použitých technologií a ponaučení z vývoje:

### 1. Strategie: Nejdřív obsah, pak technologie

Úplně na začátku nestál framework, ale otázka, co má web vlastně dělat. Cílem byla prezentace projektů, přehledná timeline a blog. Zásadním rozhodnutím bylo, že **obsah musí jít psát přirozeně, ideálně v Notionu**, bez nutnosti sahat do kódu při každém novém článku.

### 2. Zvolený technologický stack

Pro realizaci byla vybrána kombinace, která sází na rychlost a jednoduchost:

- **Astro:** Zvoleno pro generování **statického webu**, který je rychlý, levný na provoz a bez zbytečné „magie“ nebo JavaScriptového balastu.

- **Tailwind CSS:** Použit pro layout a typografii s cílem udržet konzistentní design, ale bez „utility class hell“ – tedy s důrazem na čitelnost kódu.

- **Notion:** Slouží jako **redakční systém (CMS)**. Články se píší v Notionu, odkud se pomocí skriptu exportují do Markdownu a validují přes Astro Content Collections.

### 3. Design a uživatelská zkušenost (UX)

Cílem byl **prémiový „editorial“ vzhled**, nikoliv klasický blog z roku 2018.

- **Hero sekce:** První dojem tvoří jemné animace, ambientní světlo a gradientní text. Technickým ponaučením bylo, že gradienty patří do vnitřních prvků (span), zatímco animace na obalové elementy, aby nedocházelo k vizuálním chybám.

- **Projekty a blog:** Sekce projektů byla pojata jako **horizontální carousel** s jemnými maskami na okrajích a šipkami místo scrollbarů. Pro přehled článků byl nakonec zvolen formát „jeden řádek = jeden článek“ s důrazem na silný titulek, což působí více magazínově než klasický grid karet.

- **Detaily, které dělají rozdíl:** Pro zvýšení kvality byly přidány prvky jako **scroll progress bar**, odhadovaná doba čtení a ikony sociálních sítí (Tabler Icons) vložené jako inline SVG pro plnou kontrolu nad vzhledem.

### 4. Technické výzvy a „porodní bolesti“

I když byl plán jasný, realita přinesla několik komplikací:

- **Notion Sync a tagy:** Objevil se problém, kdy se všechny tagy zobrazovaly jako „ostatní“. Příčinou byl nesoulad mezi typem pole v Notionu (Select vs. Multi-select) a očekáváním skriptu. Řešením bylo přestat vymýšlet fallbacky a zobrazovat přesně to, co je v datech.

- **Deploy a Git:** Během nasazování se stalo, že web i po buildu ukazoval starý vzhled. Problém byl v nejednotné lokální kopii projektu a špatně commitnutém kódu. Ponaučením je, že **Git je skvělý sluha, ale nemilosrdný pán**.

- **Vizuální ladění:** Design se ladil tak dlouho, dokud „nepřestal bolet oči“, nikoliv dokud nebyl co nejefektnější. Ukázalo se, že **méně animací znamená více důvěryhodnosti**.

### 5. Závěr a co dál

Aktuálně je web postavený na pevných základech: má funkční automatický build a deploy, obsah se snadno spravuje přes Notion a design je klidný a čitelný. Dalším krokem je ladění jemné typografie, rytmu textu a mikrointerakcí.

**Hlavní ponaučení z celého procesu:**

1. **Architektura je důležitější než efekty**.

1. **Konzistence vítězí nad originalitou za každou cenu**.

1. **Web není hotový projekt, ale neustálý proces**.