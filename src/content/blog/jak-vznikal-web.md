---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRVC5S6O%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T082309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIE0cbzOssZLEAKVPy5VL9QTPbF5vM4SMzzwfod%2BS0BDjAiBt5wPCPMYseLp2D7Z3Z5%2FrYFIZQUyEkqMlmOWO054kJyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0PL7cOMDJhyp5SzKtwD9f%2FmhOx4zltPn0eo9VFQRfkS%2FPc0kMrc7ZioOSpkF%2FjTquOgknTAsEiVjwlmCCINu2EkK5wALEwMhaURrkbl9FKhy9uTMLOFcitHxiYTVpFeu3qZOiT47cdjaFu4vm0tgwuiYHnDiM2ZGqlSahxuqaQsYPDcvnnIo7U2GWSDpTylhQjwgL8mVIgJxGYPnRadYaSsP%2BrCkCm02qSxWOUi8TUpf13fYE%2BHc8iGky5YBqxQCkolLK68SfyqgC0yMf6UQgUoTgclPU6Ytjmf0LuriEinbiQYwrtHA%2FQQYtHZJwueudmw3O%2F8RsSrMkLwL8vW0imkNLmWfwmA4Ji79srOcFurCf8bA2Jlmf%2FutyMm6%2BfSsbbsUr0S%2F7b7spAEts7W4kIVfS1Jfp5E%2FnTI5T6572%2BxnZyKO1ObZ5zRYQUUnPjAJdBSQCt8FE9L4c6hws9v7AqP8Q2dw2hAa030xH%2F99e0BWJzEWWNoHMeVeNUfpkqgFYAwTeKUw8V1sZcG6WiSUz75IjxCpP33oRRd%2BCWajx07tuVXB%2FcSQw4WxLvlMCwgEPhMeZvYil%2Fcv%2BkFOoLBKXr3em0WLyf%2Ff8%2Bvz6xTwqt9fWjpJBkQiRr%2FtAFVeA%2FKbfchcjLRXTzt%2BiIw85yBzAY6pgFCjD3POSpFjI0fVGXtnWYGZtZm2iSDXPf0blkH7GAwW%2F4qX1tKWAuX2uGqP9WEDgWNDNKJqQhFEu9RfTR0tRSjHqnQjbuiI4PHZyYLP%2Fo5G60zRnxpjVcJihg0MX2vD2uUsrcBoyUm%2Ftizks9UsAQzs39bKBUXvsf%2FcCWTPwH9il1qC1%2BLL%2F1altg3th5VAhjCqmQrPYXO4mW1ZYhS4CVOmwEbzMWC&X-Amz-Signature=4e7a7c1d80dbf9764d59212941098a7bb3919bdb2af8bec6b562547deabdfad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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