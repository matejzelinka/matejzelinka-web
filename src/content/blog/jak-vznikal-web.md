---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YVALOU%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T202148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxi8mzF4o%2BRcIKojfrE30YQJlONxpwliHp5nCZCk88VAIgQTF3hXq%2FvbqzZ9VazLPVljR78RzajYZkdiLD7RhmTLMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMujo%2BgzYYSdvPdlSircA%2BihsJzXuzKcbq2zPJbaJIiw4pKfGi5Hk%2FyusYfE0GoJMK%2B3Gm9w5DQ5M9iQciahps%2FcX%2F8hF%2FWuFaGazNoZ%2FDu6yHLfbaU1E5TDfwsQ5SyytuLtpEGrRdflnPjibD64AJirKdGaWGs6q3LtVj9TMsv0jWgKl%2BWeBCzmR6WUDuekVVjs%2F812obu4lXcwaiW%2BFqfTppZr1BzEMApOyR0bGH5mdXD2UUjP0csGIXx0UP3b4QAZS9gFrjHsJVHYKgfAPOe3kiaXdYJR6lVDgFa9mmO9dyrdwyHwBRz24fhVOkRSVMOcaxiESiGFMcBTeFSvUZ9TPfSD%2BYdfzj7j3rjKrAn9ArKkxlWRbvNouw0sX4W56xVwD%2BgULJ5m1%2FxhKEMT0y4rEHCG4c3diDLKtrDTspvi6lroRbQ8VbLDDPVieVar2F6FOSpTzQr40fWDOiZG4nLV0Sl3jqI3ytQjX0eIOCobNgW6k0KkH7Vob5X8K9Kh9ZluKBwaXkIjlP6ALOtylbxAgy2B1iAfwupMaWNG5BiTSg%2FA58KeboWOjGQK8wdWWc%2BqoN6PBzNlrTPbAFa6AQ2Epx0uB24AQJqNsPMGvIcKcpsdC4JGqhygKj6lXDN5wvX9MdQJoFJXFeYMMNqa6csGOqUB5Svikms6R1njpiaez4tek1ZVtfHYlaZTNt9S45l8Mi7C1EiYCerdmvdrwCV9sSw%2BBrGbnzR0aAYIVwMLRRAI0vFo9KsYUJXwfAOUe%2B1oy3bErENQlapmJv79Q2%2BFPCcN6ErlGHDo2IGS%2BrG11dkzOI212yKVcy5tbl6UHkguc4Khvb%2FiKquqFCWCqNtUM6QkRWm7PEyQhzxypC0%2FiqtPSJ7usb%2Ff&X-Amz-Signature=cfa6c33d3b8001d835b9cd96d2da7ecd1b3a38fe11e68566071f2a7480ae4134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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