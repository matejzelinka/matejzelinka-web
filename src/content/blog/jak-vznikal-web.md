---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKFKBBB%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T102808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1ZocM8h0CGqHyFHRJ5IWDs0%2FVjCFh4xzEPqZJOjFOsAiAkARyTMeEvIDHab0W2LJ1I8WgDpm5bWlMeg15250YYdSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKTIgqfdLKDaaYtYKtwDSoEWi06opJ8E%2BQ4awndZ1VaRjErjRfKQ5ClMQteLP71Qo%2FlmjWWBoVYzotpUBtaz6NBdhs8x0nYVdmfWI%2BKUytLGs1zN0V%2FNiQ9euAr2aMILauhXauVvEab8W7rDzGBEaBOrTkw8LGa6SVWGbMIUp%2BKRz5QG5K0HwwgPO9lcpNLcT1pjQ7X02Y1qiHzkB8k8XnSGKUhpQNlTOBUmPGRHxon1f%2FKp9vorAC6xafJxpXckn2GqDKPt9Hcb6%2FFnJDVQvW7%2FlE7LHPZugL1LlQxyPHWQatKcDzKLEVKPvE76a%2BUf%2B3LEaUewP0A5Z8RehgIjLBfaFveKE%2BhK2HmC9DnznK9niFpV4wS7OyCJpkFdtwspojP%2Fr7SiUL%2FYkEmx6pFqjisPhc30C%2F3fRh1Sjui%2B9GZKL%2BiwokT3vLuMCY9Z8Bkspj78uob%2Fg856YbJ4KnqWSLwOup4sit7MzjxfaxjcotarcZRRKvo9cBRRDpQNT41CXXDlvdnXCb8MqDh0PsqX1ShqsrAd7NV6j0fxWW9oNFtQIl5KUfupoR9lLAXSVZc0xcqY58ePaR5R2%2BqXdzfw6AE%2FUnZQ1dE9AkSmYtvmWzYPtkDQvhAgTU8yQ83iS5jA8m7Ctv3%2BecAlRAwwzJ72ywY6pgHJPyzA7YynntVrtMR7mqtDI%2BESDIOn0j83s7nVCaejNgcLm67uXt9K4Vpzlo8uWmHjqcbYLh4D1sYG11VN39JPgJ7o%2FiniGDp10tckHEvGLyxs8QsMTq9gRHLoKoOSck9F2cZm30%2FpAYyGklKBL54Yelpvqip%2BOskWJLT8uda8QqnUYnByGr1aytKWFSQyZ335QJnaqB2GZjx6QZFLar4KrnKgmFaW&X-Amz-Signature=b6a994298f6682544f9e589ec5242dca448cebe7843aa33e5433ab62b11f140f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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