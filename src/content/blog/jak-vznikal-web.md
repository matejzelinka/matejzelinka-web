---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4IW3DFW%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T212348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6cdI5r3m%2F%2FI1wiB6XKScRjHBKk4QpAsrjAE1hoi9MagIgMHZir%2FWLHdhP3Ezi2e3aY276N4IW%2Badp8JGpxVex0oYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJofO3EXIBRonG%2FljSrcA1H%2BkcDlQbsIXElRcDfsBRDvG9Ol9zZ%2F7VoGB%2BSKJaX1PhAphmFC%2BST2Z%2BNw3YbvCqJwdbZI6Zqyd7%2FeSJxVt3CA87evK9mdx%2BgMZtnkcXbA7pBnW1%2BodL3cbPtqqPOmLOXEtC4f5w8EVrUd4rxKbStKfZ6rCGmz4kRgrmILO4HTgVah3AXkRtYMJ07bMMkzSMf%2FuW6leOemjRH83O%2BVfWmdAZTt1KIDI98lz9h45CVxC6XeWGw67oxkLI%2BRz%2BRPZI9KaUtOnoRixX6vinBNXEySNdvTC8POR9x95w4FP%2FQ6FPW984Qt8Gk3DpZTxF%2B%2FkRGfMNTnxV2fFa5XsLkOKhbjUwUCGa50v0VZ%2BOIR8%2FGlunNoEag1afYlhrfIw3OCSJHaXwUmjsHhDEg2gimD%2F0AxvYZAtO16wWonho14WkyiXnnBGz%2Fp29svBjBQwRI8EAjwx2rOGLUpKFLwWeSOrxNz%2Fal1e3kctGRDIYZlzf%2BnVsJiOlhIqoVzUH%2B5tahpueJ%2BCvEdpozWI3LvmBxd51MOWYloELhruLVVzHYGnJfKblkYBYk3RktDxpFLN13sv8SzCmhYJaMR19dmlx0Xe0CMNoa2CbESb7UxeOGSyAmGwBQ74X8aYxy25D9wMNya6csGOqUBsDwJrEQGGryTGoURuaI4Hr0NmyZrP%2FdhVHDvakI51E9cflyk4eK9HunXUYgM%2BLJ1%2BzRnfqyrGNDKxZzFuu5siRIyRP6sNWXAaJmsS%2Bmxn%2BfXi3hLncjRItoroujUzGVqQuYp2yCzopUAWDDYyWKCbyYt8oTR%2BxdYdobEs0UBP6nRGyJ8dP6DO7Y9spspoAtGCOoxBT%2FoZPtUNw7LWa3vGAIPjRxE&X-Amz-Signature=a8934ca079751f4ac2da8b181f8e2ddaff24c09d8a2a9a92b1de864f08d37edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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