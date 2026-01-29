---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags: ["[object Object]"]
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXBEEZM%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE18xLuX77Y%2FSOxJVXVxqhaWg2%2FWPFGZZRLKjGftN%2BeHAiAKko%2BVnjtTO3eVR9Pl98OMSQJ8glvfADD3eisluQQkMSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMOWrOqCBNYlw3qV6KtwDUR%2BaMQHtOdd46Tt0J66IYF8Eeec7RujiVdPJdTpA8hjGepQFhuPqgF7fKgCJPTfQCHUKi%2FoXsn05Gb9nVmIIzzlejBhkuNaiVH%2Fw%2BH1sDwzMXcW%2BnPGWmmq4%2BzGBYJgbcBcbafnHqyA2PfAjdZ2fIFBazcPQ4GWO9mu27hRMg0YO7KuaILmUWTk9YSqCPcf0wUBtmmfF4A083w9Z2Wrg7yuJ8E%2FJHKB0CUZjNr5YqWfGy3Qk%2BajyXQOES0FUAdRcNc4VUJyE78m3IwgVKejD1Gsfy3KDVbgw8Fwdr9SHuWOYuIMn3wI0h7h82KAe8eHZpvLlWOJliCxT%2BZe1AuMa1gERXAo075fKy35HbQHdXobVOiGYi1t33bSf4EbpooVlsXofubDPM5V2FeIGp2dsxpIxRzaXitypjxPqjl7dg3vdKoijZ8ntvSlY09eftOGXb%2Bqb1UpVSQSXxoKmboRTGRe3mrY4LJkS8moJWCQEGzXpBX2QhOTwHuwLz3yBY0TnOb4%2FSQfiqzVYrOXebtdO7PAyIA1Ux49zPRG2YsBEjaT7qaWury9n%2BAPBwOwFswtt2JYwf%2B%2BZKddRPEHQvtuOK23mIqvIgIhqDRTFJohxCvSTQE0AmjtWO69tZv0wtqnsywY6pgFJdfhBPwYAAR98zQeLBuakPMAE33%2F8g4iLyt8%2BQJOPCRy85AH%2BC0HbvyVwCNJfn5vqNs2n%2BDXHNRSAQXpQONsq5HhPRXp2jymvdkNLy1cTzvrzLhBy%2B5gH%2BxCiDT0haxjva0LgbZY965zhyS9BOqlMpIz6bz0ayY7BK%2BMwFgi9R%2F57s5DKkqYD3B4BgsrQd85O1eEnggcoiPREfYVroz0n0SIpAWcB&X-Amz-Signature=9eba7963898a21e41c0809da14021bcc53b6d83092548943cce1b2cd1acde32a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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