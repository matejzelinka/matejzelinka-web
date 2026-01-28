---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UE24GI%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T175601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4x6U1a5LvIDmrVQ7XxY2AQoljYoPVSs4HK5A5wY1oNAiBpMnBPux%2Bwp3nwm6nUBZ1VM%2FhT4KbYCR2xZjYQBCTW0ir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMoc8MNPh%2BNycu2NiyKtwDXF9l%2B06yd9fVjDWElRYLTIhrRmg58LLCaDGdPJ40bMpzLJufVul0FQZ1a7ZQl0QzJDinRTer4yKAu92yRX4SYOLAluL7%2FqBQ0f2VZoxwlHaJCygDxvu0KG7ekfkCdTgoz6WW1k39215eJnfFt6EgPPvuEwCBXyagbNW5sHAsCLTLFRCFLUZgEJOsoa4Id8HpoUsvVgmHT43ucqqd%2B1bwUhXX2wvXzKWM4TRS5l98VgpgKcqcuP7aDfo7hBnIpAuPl9N%2BToRlUl1GFGmYN51LHbXEzA3qKDOoJqbgycBQkQu28C%2F9MJn77d2QwV9UkYRZulfRzA5J7uN4jJ%2BGDX75333l59ywWxmAJ2d%2F9y%2Fc7UXCB%2FLdhx2ttTobtj2vgpPuB7sP63NcVQm6eIQFEBagB0T11tsUMUhinKya%2B%2BGmq2XA0b0HmqjLVDqGj2exg5oO1UOStY15ub7mU3sY9YhshTYa4n34vF3efRu32QHDDDFDqy0VCgiGgt8rdskt38x8f4UztCzsz6apYmeisFdPdc0mknd%2Fvb3OATYiFSgD6g8uw4swT5K%2BmTVEO1h%2Blt1Lql507ONh48ldL5fjxirAgY7vaeKq3IsuMzqpecvkSYwcK1Wy7GlJHPKZnfIw2prpywY6pgEgk66Pb0BVihnDD8fwAfo6Td5%2BWPXdIob0pthZnimv0iGxt4EWItZ7K4OhyxydRwvqzC1Xmulordx14PWlzIHs1%2BWaZBjmni8qwSH%2FNEkLZw14QE22u2l9i2qMjc58JXyTW3B8bGE26czJ6buxfOfflggx6fB3I7BCbsCHA8Nvv2%2BrYiemuwNPxs4EwDfwARJUr5wkG8YdGo0Jz046T7nUFomDLTdO&X-Amz-Signature=e651d27e1b02e739157c22dfead7536daa3ad0171deca10e3bb3f84c72785a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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