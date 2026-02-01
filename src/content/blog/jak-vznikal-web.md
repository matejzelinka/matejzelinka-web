---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4Z7DBF%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T172701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC4QrsgiBQw2Sl%2FqoNjAzoaeFpKrdUIFLapoblZcCO%2FmgIgVi3hheINS9YBmXB3vxJRHPm2lkNkHVpz0sTShIctkl8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9rUIzYIeaDHSzpkCrcAyT4n5Q61TS%2BmSjq%2B7ZURj6SlGvStryyA%2FQpQtTTxU%2FRbUnIDy4s4b%2BRFrlEbxT%2Bj%2BpTg9tSbdjT%2BeDoDQpXDOBiaXP5yjyeBTR3rgtE%2BqQO5QpQ8HZoLafIY47LqW0Km5kRIbyv3t6MXZ1huSKtS5jxp1bR5ievCCc8Z%2BHD1W4E4njq%2FxSpKsnlTTlEpgmksgbYdTPmmrk%2F2Fu%2Bba%2BK%2BpsqdcqX7%2BZyVQixJrkORX338VohZN95grhWUW7dORX7Lhnu7oNuI9sm8vawZnv5xHfDt36WgovkvFMKWPF3Ca7JnZ3YhSeeIkIvDXayYuK3uczLBvjmQrYdyjTVe5TYbpcOjbrUfrSUbb%2B99UWPy%2Fyz9XId932sdjSXSOE%2FhoSJI8zv6Q36rxYQgD05vkZEAg7qarjUDf%2Fqmc%2BUYVnh41rLYPUjsPrhRVMO2dN6YSGAyer6Mo2CupsSkPwelj84u5eFAKB8TEsCPdDPLJZKclYvOhDS65uNjYSYn1Z0Uh9OGqTKDoDewMJrp9V%2FMOB9jz8lnEyJ9u%2FqnumZ1gsruI8c0K9%2FwWO3JVKu4QQ3Zj76VmqsmkGXy5dhgtV4UwPGk%2Fe29%2BWTYar%2FXDMJ52n299wNNdLFM77xghKZmBgTMPuQ%2FssGOqUBem6XNPgwFAXahmrkHYNC4xO0%2BA3DXIcBaJV36%2FKUpw1GSEtW6QhVbhyY5cgJ1QaJpBryHM%2F3gE2cjyAVKTtpgkh06defaaW55j7J0O1ePU1FEi7j5z8VipFmu9YreC%2BTTD6%2B5DqwoLxC1yhlSnErhXYv%2FVyiq%2FxNNEmzzslVzx1DbwfwhrtQ04itNuKEYuJ6KNVj3rwgWhMhehKqsHfk4VEEDu4I&X-Amz-Signature=0fb845b67d9f5fde15ac8058abe07abb5928e0249aea4cdeda9e2a402e17c065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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