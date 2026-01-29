---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CZ2S5VM%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T195235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxHTL3pWnCh%2BdAVuDMI1WtO4tTcyRxEWJtga%2FgrmLrgAIgQDa7OGv%2FxXlQrPVWA0bovFKKfIZCVMDegg8Us%2BH7LmIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx5U9FNDgI4sVq1fircA%2BXpJuqicL%2FEjMdbHp0I9xYNeY5p7BboWyfpmYn9jNUcoRttLP0vQ2xgoK%2Bi7E2AQe%2F28K09Q%2B557n5pe3XIE4hIUmw4bzvUu7pjfVC0C9steWt%2FJPNgxhlCCEV5LpA6KQEPi3Cy4eDNgihuq7cWTbo5cG8NBEszWibqQKM%2B1xuB7YNWrJDpz9cJRGlF%2BvwyF7Zvojpo2jdmgRnm8YS2uDvwCNYBh8kgqCdFocFPAJkQxqnFYTV5a34KWbGH6XZLkz8TUEfJ1YMOiN4ln2q%2FLbkmJCT8MLKmFmlCMAxrE485affBu0dvUXXQ%2B8rjVbhCt4d%2B2O4JJdtNJNzzv7cMqmCSKFzNbv%2BR7HRXEuwNQAg91JT5VfXbDQ4ShtPAInVKfwLJLjZQRh2K7WnTgT2gxLuK1HCI4hjPKoI57raPdvKvgpcWTsd217%2FE%2FRpiTeC1d3J%2FWo6j6MiUX%2Bchx8TPfUAfuxj%2BgQ4JRrXxoiZ6TeUSu5PHm%2B9cr6RxlY%2BFnemaUCZAF3HJkxe7O5Iwh3buVHeIXuyD%2FwF3tvRQHkm2sSRrs39HiVITV313Vv5K%2FqQ7qCljd6y7yZhHw1dBCyuNc3o2Xu6GMtug2%2Fha1PfJEy35HsbLH10u9a78xZGlMJ%2Fv7ssGOqUBS%2Bfj%2BFszEaPXRoGP2pw6xlD6nQOKLzjU3JMdOVj7rUCoRIG74od432qCHHLMpYDkVw33PJRCAn4En2WyspZFRKGTCTSbp71ZmAThvg2rxBneB0gwPWgo%2B%2Bn45VIe4AiHuXeExiUGQY5VWHSpJIyD8IA0BbfgpNtPXq%2B50abek0ZqL9A0JvFCupMkz2lg6wkfQX9GndDR9xs6GR%2Bi%2BB6Q%2B8Fb9zSi&X-Amz-Signature=677a65115a690a7d38c8727a763ac87fa50a0c3bb36dacd011ec4dc5be1ef60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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