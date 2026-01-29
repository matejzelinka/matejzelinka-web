---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCV4TEU%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T232903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERrMoLu5vl8yzJKDzUI4Oor24lmEcGJHTKxh54rlcR6AiEAuBLEcO7puUX07xXRH0Fymcaupg3J1kCuJlnMHWFfJGgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjrPA3%2BvHVnKp2rESrcA6GWuAkOLc3tygO1lHppS8ADd02e%2B6sABXUcCnm%2FW%2F8548cvHEcrRsdjT25YsfibYoRHSTdIwPa9cYt3piJq0Kh3zsNKrXgOqpKq999rmjRPg51lbZ8WYhYJ%2B0WSEmOgqWDmuWU58EPh6TqrMfZNlSvagrUkCzuQweI2hD5wXSfRaTwvVZf%2FKFhWNF1%2BLTGGgLdQXSOIM7TjMr88MHyUYW9wMB22mvcXYXlXsXrL%2BDfqFknQY5IBwZOM0Jhqd2XSdjsOG8t2O4NGhok5nrtU7xjDPs6FwWbxAN8xP5pxX4IPYi5iNOGgQlpXEfELpElKcKQvElqANkKdNQFsGszMaMCcaK6uJX8AobQ0oiD8tptHuaBCIstga3Ks4wIUsvl0BBrSk7vbtClSco8iCCl0QpfsQKcJjEU81g9ZmI%2FuNPRkQ5wc8Mk7hDEDoKDMxEVRt%2FjMm1dQNF7oLEYo1bDtcO3d5aFANBHWrA5xLHgOazhvBXL4JpNEZvB0P7L5uWxdo2zLLBR4vEyp6iSM5IA7jUqqrwUCrhvdM7qmzBE7AMArOCCx%2FwtTdPap8rJO49HmatDMUimTvfPwD%2BD%2BskT5nn2GO5uJCoKeEVU0l3b2teU2CzGGyfrDwnSL3ne%2BMPO978sGOqUBmbBrxH99CNf55IMA1aakt%2Fm%2BV8%2Fe2NeFEQIW%2BtTiCeZb55BvQ9v%2FhVTxhCcfHG%2BOC1kezRYZ6xNg0Dtl9fIcY2lrdzh%2FSQNHQiCtZtuS6nGJk%2BP8wDtTw9QEFWNM3Inmi79wA9o8g4IQrOYyJZ3ggqf8gIKUBD%2Bqp%2BhBfZFsVegOkafzYD9uy7HFi8skX5TMJm7Uvn%2FkJD4WNolpAe%2F0Yk3HLYvC&X-Amz-Signature=8a2a8350ba66a47bd7e9403de4d3be441aae1d7841cc401257500c258c50e316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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