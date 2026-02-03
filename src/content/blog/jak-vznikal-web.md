---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LN5P7WK%2F20260203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260203T053520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCbLAeTaCMqJVhFPbmv59evE5hJM1gl7794JJSedgNqPQIhAOpZrYsRiXlgzz9F2TVonVBR35JUdYdeIbonTqWZhmN8KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDx0OstYHXvBLgiDsq3AOIIw5vtQ5gFXkpqE%2BKM1alFhxfLFM6E%2FQob9NPY%2BtGW0IFO7Aity%2FOumUqxQ8YbKbPgWxNicjOkcpFgMQ7nEG8xZVSqbBBdJFO2x3N2PAmDItAZWVzC%2FHqkhIahm15PTeE8HPE8D%2B6TbF3wDokjpTsUy3Ewe%2FdjDe42Fvb8zA7Juv7OQYhzMtMC6zz0LIKXSuroEemOJglEPmRvWagT6Sraf0XCwg%2FYNY6DSQNli9QjYbloqrS4iIW66xIcmvl3VAUPK0BgSUBw8VOUxCVbaTDY%2FT1i59JrReuprQKCGg2%2FpMvP7aP%2B%2BCtnObSa5lHixGCJPHvR%2BpFm814Xncp%2Bssf2o9RryYmMZOq%2BxKljjVM9EeeN07HP5CKGj18u1rNBpbWx1Z3DldMCuHPzg5lBDTjXamMSZGdsMsfHtO6%2BNxd3KMK6KOeW4TlQ0wmeEgOs6X5eMM604tm1XwEcigzJKMdcR1hNuLMAAl10Rh2M9PNW7L%2F4UQEmses%2BQqBNLUDcIWNU1l8k3vPkaHMsA7kp62J71PIhe90jRuY6XPiK%2BenHwzDN3dDEoTIX6dBs4%2FSvW4hXeyEwxXuCIKVGredo7ka6401jLL6vovqyP7mQyzNjjekntub4vYOSadnvDD4%2B4XMBjqkAeh94JKFPxE2K5AlWHQZWe5EnXRLagK2Nm%2BUEi5jnODTqYwYaI5xbz%2FZLomJodWzDmvgeVw3hyRI1m58mM2x4DKWWJy0IZPBgm%2Bnz85f0bLGiJuPtkhVCXIyHRXzd9q6YQikPmlvkVzbO2zg1ehOeOOeaOvGT6RGGCmX3n1VSEyJFw6R%2BV5FSA4FosgFph9Q7VSS2%2FGUBzg0Sh7FekPjhmQ7%2F%2FFh&X-Amz-Signature=e115e234981a611cb7eca92ba78e1ed085fb8c051fe56da6d222539532b15c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
seoTitle: "Jak vznikal web www.matejzelinka.cz"
seoDescription: "osobní web, blog, stránka"
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