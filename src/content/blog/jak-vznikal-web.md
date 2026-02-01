---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BN7ZMK%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T071145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP64xGfBBFR99vc3VdbTHzNyJO9s5x2EaHEDuoIe0rSAiEAt0XNS2upF%2Bpys0bWm2khRPQudeTqIivHBUSqU4NSNOQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyslgMYIOYbyG2SxCrcAzTK3YiSYnuWDOZcg%2BHOMFl8PFcm0WZjWanXm8n2%2BjNrXFnt9DYoYGthm%2FcP6w69ezlOEKrCB5tz17FpbDAWtBEnJeJIR49Q%2BgWzPMf8FgbDzkC4vY%2BkUg0lVEDfauhCCA6JLSUyV3JBKjB%2Fm8xdEtLsLfiEB7Q8izEDtXEslDztkJevt7h5fadgNF82LFlieB85LyKI2YfxG6KFGgQoFS546flXOTecBuYgLQmFlVe5A%2B50IlPKXtjYYvGOH%2FO7prpSSu%2FeFD0HaxMigEnDvk4VDTUJ8Zzo7GQXS7ZAfSbpKzcth4zFGEDC92pBJnz8DNX4eFSZOrdF%2BxAqdwpZ3k1JD4f0kPLxfWAVOg2aGJt7EMo9BKBIIpkslo4cBRZr0yM3jKDORAVuZulCEckJSLz186NkNfsXKcJuCF%2FQUjxYj02Of5MXXanx%2BA3gZdGIbqiK6NufcIADK%2Bq%2B43LpkXK%2F6A3FD5dZRh%2BkTd9y5WGRFUnZcSn2rxvS5U7flyagsB2oofkyDTJoqr7vhZWiLcCt%2B0uI3WwV3uwQ6sqwcmqfOohjeoKKg8oZ67XJMA%2B%2FPZP6F%2Bfk7zdBUuW4Zi6MX2iulp1MfyFC9RoUTuAcMSxQ5j%2Fs%2Bz4p91FS8cAMMJ%2Fl%2B8sGOqUBnctMb8Nxo%2BqHLnV6a%2FoUdbth%2F3ecerIgy64rFSz%2Bu53ZD9HEMXClCJROVpeGmF1yXDhDcSUSe50mZDnJx66A7UqZo0aHigTlh4lFzfW%2F%2FsBuRR8hMjlFC1Hd71qKKWEkcJV22R96KNBpSsmop1QGD2k1tjR3rCYad0ntuM77c2sugzNPtCGEByRv2F4iNpl8sO2uCgBsD6r6lXPIfSSPms7y5Cdl&X-Amz-Signature=0384696c68518d5686a3df57dff877f64ee2e7d46f8fa7a23facd6b308438719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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