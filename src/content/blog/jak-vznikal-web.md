---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQZ4AW6%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T033901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmNBXghAwdT%2FOmHdrrGi8s4kWAzh4A1ML9b2xrBl1VCAIhALtI4t223iV%2Bjhh2yfgxzu3DmuCulkzSa%2BYY0R3ixs0tKv8DCHsQABoMNjM3NDIzMTgzODA1IgxNZjzdCUu0ZX%2BqTBUq3AM7LBAQU4YvQ1bjbtLGm71Fk3Nw0lNnDOrd9VS8OXXuZNXFxsG18CqazGhi%2BJB04kkVYUt9x96BGMNQzcmUI5N6co%2FYoqEKT2qU3C0Pub9Ovs9m4xpslE1hyZTNYhodemmqYcNwb1hV0Jkbv%2FjxQgn1rfS6XgeYpJ2QThRFKe2HR1hJtgt0rMg%2BjcEjwS46QCJlFS0FXaBInsAD1nluyrY%2F6O9dLu6swa654qpg89iVBgaVzV8bnq8mxUg4fcaF4%2Fa7uDwe5i9JhmYuZbN4hioib5%2FvSnc738BQq7AyVapk4Mv6rTabCVaE2OklD%2Fg8ppYjjAIrYZW1a0o6WBhDI0nQ3RBjJW3A2HTc4kiNeVRezhy3dh6VFURDTe%2FMXsQDb%2F6%2BFGU27ZTxZcQCc5erPPcGmnE8DdUX8OwobcisuMSD58Wf%2BLgdXY5imbSenzNgAN6JRrLSNw9niobD9K6u2LzpkUQOtbG0XZR6%2FZ3imOCPrFuJa%2F2fFWv0uANQrELq5%2FmLSBjfdD1fTd2eIwxhosQXqy%2BHmOT1rgen%2BVXyjbqoWr%2FW3MNSI96%2BWvZLC4ERZUnWxeRDcG0tB7Foss7pfDEiS1wmZSaf%2Bw%2BtiPLZKME01pdnQJwpo3W1pU8IfzCq%2B%2BrLBjqkAQhUD4KqGsop%2BvhCc2J9ahQUBH2QjtHHfV35RxNsX0Bjt7OvSDS851gu59v2ARo75ROl0k64l6XREyrXO3ffee12CJ%2FNuhx%2FNWKcT6NdgalIne9DF1m1uH7VlwuRz7uvq70KW%2FRT%2BAFIzVQReHYn8Pku1OQKPfM9zrr5bF7LPNOnFxW%2BY62yvejl%2BljEvSUIQasRdxbg8CmRPR1NIzTGeNzFTSN%2B&X-Amz-Signature=1e804bcc38303f7ac59677e58738003c067b2b9ccbe1a33fb7a99fc3efb7893b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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