---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LE6XIXR%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T064706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1d%2BzUg%2BuHnS4vRT6KqLRrHxktj%2BG5henpPahonsNsTQIhALNwUgV0iaQetdGdDmRq55l%2Bcy%2FHxWXOCtzJYMdF55IgKv8DCH8QABoMNjM3NDIzMTgzODA1Igz6lQLjBhIhMp%2FOEoQq3ANSwFtktecKTLgLpkGA8vWZYz9KZ%2FAcZ5iw1wYLtmB5GMwQ9I%2B%2BSPhytWFlgvVhxNz4%2BTLM5j%2FTjXhbIianaG1O0TmF4gYoTJJQP0aDKXAEvbRGNyAKFbJ40qtgwvYYkOV6M2ycEt0%2BVsVyGieSW1X6qcoUSz5JfSC4vv2njfYToONlr8UU2%2BG5eL3lCYgQ4DrJN4QjGkzukXmT9jBG%2Bv73kIuuGfhp62iQdFOoBwmVFD6fMYT1%2BzXxCA%2Fy%2BbOhOmsjKN305yBu%2F6LQEFHXiKC9hVjFEyD2IgKT15sJYbx1tM3VxUCMFXOWw19GOiEEtHXXuEG0eTVwaQOFx8ihMDqmy3m%2BsB4uNq%2BQ9c06EKdo136a8zMOC8r%2FFNRgM1SeM3GswCKeW8bZjEj4I3xCGuMBFELLguVv6fPns9aUEcvlbP951%2Bn8ZrAmvzlcAYbF7XLvYzAmOxYgq8h1lPPHyPQFQ%2FvejHHQ1MW%2BbvfyDL0hlYMJlZf138RsGcHHEeDrRB%2BggnwJ8Zru2EAMsbzmgMNl2WbhV%2FjKAEr8q9hvOiRizUH82BWMjYBu23NhVUaUx1GtkgVM2vbKVxyVRNc8ozlWZroWqmHtmy6w5dX%2F%2FkkYIpoVCaZqBPJFDQfdYDC45%2BvLBjqkAUPNzZu%2FUv7mOxZRl8JmPiqC35Ul4EoEQmAqd1gbiJ9E42qAj3Ih8m%2BFNIppBsi4edsaZWxRHE3qtX%2FEDt70nj%2FWP4g0uuWS6JJSb6NRNiJgXqQSrFD7d6%2BjGgjTZL5O96qACaz58VkacwzY4Ly1bjP0btWa09IvkhU2Ar481Tz5B4LWmkKoaI%2BvyJwh2bqhfkIcH3IFLvKMK0BmbaEEMUFIjcDw&X-Amz-Signature=4365e55fafb73f2af5e8b84763b3930375a662dda37453ad005fe891874f9c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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