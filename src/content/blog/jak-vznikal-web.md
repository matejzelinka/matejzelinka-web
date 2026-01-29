---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7PJNXZB%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T050215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMdkUpC8HT5%2BXJr9HVNP2H%2BGNzO2lqlQ3gWviAJrYcwAiEAr5MFJqbWpHEndsssqUrAFNluL91Aziv2s%2BFJ9etveUkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMmqS8gk80CKf1oJXircAzC4DeWeNfXBKUHJSNkN1ktjqE4PxCf98%2BpoKsyphv%2BLFkx7suKZtzd4Ng5f0iWMyf40ztjiDC2nxt4%2BSPPbDpfriW76r6msNWmDCp07%2Fz6sgupOE8aXgn8nT%2B2haUpzjA7%2BgJ14cnavAb4GQ1nu5sarOt9xU0QbpxlJVCi20nZA0wQNbWbWCwHYw0%2F3HV618faZ1NfmwTsNqeViPEH704IedUUl04O9C%2BZ4eZhvMH2pbPU%2FalUMigC2uA0tyLfOFXaErK95md08Y6jiJBbuWamVDlriCs5opU7FZOMZp95yKNgBuyVfPNBXmmBFsS5%2BpGSDXH%2B0855bCCESR%2FWpU0iaMt3p1TrRtCPOVeT5I7Wab80CThIcQ7cz6clMlhBN4dRc9ETQhS5ZxmxuUNgXL1s%2BRas7Rqmd5JVwurktZ2PbiRtJYZZo11H1HVccEtuo2N8v85pupsef15uFtXJbWe2XfycJ0RcNbZZr19E%2F%2B186JCASce90MXyfWXKDY7GQRQB0dKQgz1TKciVZVjb4ucLJPcZ7vwwVye8VkNttZ7gSzmTrIYhZ1o1S1BLF9upXIp1kEpFw%2B3vNVA%2BBYStiaPVuSvZV%2F2hSQ7KzhTEgd6FYvaMP%2FOQlxRLbeaHvMN3E68sGOqUB4ji2sLfyeaOv%2FB6Pn9pUeEGXhGU2Zb0vf6gtffIHp%2F3qI2tSu3CTq7wdInY6iLJc8LAETh2wvenksRpDSGZFYz%2F8e0bOiFT4%2BDB56r07J7QT1ZQELC%2FDtjvNkSdAlVJF1H99w%2BBsBptIl6o1ed1p65aSKDnp9YzWVz9KdEc%2Fq1QEeFEeOLNHDYAW2%2BsP4b3J31q4iijOV1czFhY5QeAUJSsfaIGA&X-Amz-Signature=8529b6b7df7f0974622669ef208c233b312fdc84381e58ab89663bf1318b4dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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