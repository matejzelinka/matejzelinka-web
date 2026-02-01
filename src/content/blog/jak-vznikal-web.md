---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2WLZ24%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T155128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGn25BQ%2FlJOG8nRAUj7V4RitoLnzlh%2B6zoehmse3%2FOI4AiEA76wL7dja7LQf8RKgMWBHvRHAm7OweH7X4DmpQ%2Bw0ZmIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmS0G6foaoMSBM8LCrcA9tLUzAiMk0a%2BHSkz%2B2izepk02AUfxFKzlfLIZ97jNnnEhSvqMAxoeu0Hh3fPBaVD4PDW3qgD0yd%2BOmqmXMRdPJ63BUNp6aoxQnCck5BofFhgiH1fQS0LWysT8oCitFEF8N0RIHkRLSWNvCKfftR30myNlgDrt2D2HnF8PqJnQTvtkj0S9sX2AaHFnG2VbOzKz1AiANy4GeCya%2FPggkVNPUWssxm9eFa4zKwgf51oI6a4L5OOnxTj1LzD0hy6SIcIIF61LGeko1IDHQUPJaapOqF45CitKlCfsg9%2BooruH389wBS0WtYYTCXFYjpBXm9pa%2BJ8kQKhRP80uTl%2By%2Fj%2FFS5Ti8tvawb8cPEwKD%2FpXxP5EoN0LBCypKMHXRPIDE%2FgQP27hIZ59BCSW2iB9%2FCwZMDXBBGhdK9SqmmdIiiZEcvDpdd3gN7cQrkLBixl6ep9QzysQfmCb4yelr5So9RsbiVBhobaAjMyAlqFh5ZJ3tdju10rU62Z0Qbxm608XtD5apfXjjOy8HTddF4WaDgGhWkS76%2BCis7VCiT9f1g2U4Tq0iDQPxutrvjfjEK6fiua4yYW2qYc3cpdX7BSoVEaDAG6Nf51Vo5RNunHYBvqYuSOW05MVbXMbRtxXvGMKft%2FMsGOqUBnmZs553j%2BHjrIBw%2BO7tCa3F4hbQ89XApWLjgT3m1RQrXk6onfvt9MCZEWa%2FDZulQQVA8HhI3inrhx%2FUvDf5IaGgmzGgL7EqxM%2B55vj7rR6gBVg8Lj3mZO%2BDa4mgM1Nl5bQ5zCLqFFZHL2DiXbfsb%2BFmVulJIjGhhYYUknegcnsQYthVpVSwXEEAZhn7uZvrM3ciTgmLOsI8TW355r7fCA%2FIYqTsZ&X-Amz-Signature=f423d67b598b9b8fc7072294ee2bfe3fd1d44b6565a9f71782fe3672b1af6956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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