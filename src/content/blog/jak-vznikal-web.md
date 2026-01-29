---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AMHGFV%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T060411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrLSnprEmvVO8WZ7v%2FLLiYVxvBtjIy0miLAOBIX5n7cgIgNcO6Sm1ruUNc7oy8H2uTgMwDIzPOoWGqzyZPdL%2Brnwwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA%2BdOimW%2B6W5PXD0vircA3r6%2B5IrXNYByv5FrxYUqks%2F4qfoLN8WMVMSbPFWebCiDQCo%2Fx4Tt2XGt8rnje%2FFQTecg4uwVLPBEGY3DlL%2F2QpQ5gGXpV6wsPymjryIuFBdqDbgUgB3G5vM2OORYvOCKAqtzHqAQ2ZMMPXllSB1%2Bk2LWc2mXMzIziv8ltBiT4xH8TAk0UGO8JFTosT8GCSrsq3RHodEa6r8N7itz%2FSCRvYKXdx40PYlOw%2FYm0%2FtZNQuRjr%2FKDLAX86Iw8JsPQNfaalGX7hkb%2FUZqbsk8gl6elZzpdoiLAEwLEid7prqAk88JcfE7kmJW7UJHuvRmFLFfMgVTr8TP8YPCYnthGiEOPpM%2F99hrHs0bbWFBB2r5%2B9kGngl%2FlpIrqc%2FEqKC0bcMAgp%2BXIl%2FNpqOwJsrf%2BWsDI2H2Rt3UY0obhsGNjjZoJgJxrQZGrcMu%2F5cWLjGsr03cEjbBxLcUnyYrWwXFFub60uWt2IOsZSOuuJ06FL%2BPliZ01%2BavZ41epXDjEeUNTgP0ydhmctJvWkvAqHJwUVR%2BgzQBhVfpP5fKP1h3PI2vT14LcS3GDu0i4htTVCnf%2FNhZKZTaGoqoNPaSaLg0Dbml6wr7%2F4tS9kh421DuPRb%2FMe6g%2B%2BTYoP7GGCLelG5MKHn68sGOqUBnqyVMuJlAr4xdgYvjP22F7aupwW4sv8IBXAmk3PVsV4jbM6HIvCpnO%2BaEFfq7YQMXQRuY143yeGXfn6VB4gShKjNn6uhk6MQm5x7%2Fk13AyOd8lJnG%2FaPI3o04VhwBSQVvzIXFiVMDVMQHbs0P4lm4sR6Tcc7EjablcIBfkVR2T11ggeYY0AhzwPeXXm1rw0kSwGeGTTKp2665bDv%2Fdv9R3LwTLT4&X-Amz-Signature=64064d0ca2d256042f256a63a976e79585660cffd24d3006a4fea9f1b236f82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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