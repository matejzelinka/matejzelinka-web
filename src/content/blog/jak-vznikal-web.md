---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2XWPBN%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T205514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLAueXmmWnfrvfFf0aOdVEqW0SN9RiejBrso706dVDzAIhANDSiWWhIZ8QgU%2FqEO6TtkPX8yaHfkIGGMLspQ5TtIqMKv8DCHMQABoMNjM3NDIzMTgzODA1Igx%2Fu0GpYHR33IYhW6Eq3APL5hIiF6J57Q1UrY7OJWimRn8UrMXzJVJIvH4Jr8dyprjtuV1WM4KNawtvQW4VbK6MKtkG5KBbwXLDeIiGU7i4UHCQypHwGxeRD%2BHUAryRN34LBofn2bSjvsg8OADlUSxHm0dxngzkY6gBOqsBQlh6zMYFYbl%2BTzdbXV%2FYmANREpSEuAfRpyQ5CzvmVx0nVnmT%2FtV5%2FeK9qwuBrKi9bBcd3esZf4IXu7GNMjjJD%2Bbwtprupv6i8vg69OMqz0Yn5zifcOcZHx7W9RsjG10Ldp37fOjOrjihDylflfcRfJQ5G7bXaBy5FohBfN4zB05i0SPNCvdZ%2Bj5jEpRAyzPXYGKrU43%2Fp3xLj3XmQNoKtmk%2ByCDRA%2F4Y8zzcCsjFpSbKdXLTu2egcbI59cg1P3tF2yQf7GaUsWiaxu21ItD5KKPPkZj3pV2dE%2FmCZjKM6DbviPbKig6c3SKFxyxSD0htC0Wq%2F2%2FUlmVG7g65h4LbbNVVITHipObIRl60BlQGKXNigc6oZyCrwcs4lsv6Dfl8yGuktFdBAL1M9adb4lekwqcndSz2SJGe5eoERG8HAHwlmDUjsfts%2BWlG%2BNzD9KlS4U8d9Ln%2FbgaqYqd8xG4W1JXdBewUwcPVW0l%2FBU7QUzDemunLBjqkAYOERdAiKvLxKSnL9LhCM8XXi9QVJgFlgn1THp0UDWDMIYKm3OsVQNmjHi0EIe%2FDiT7OG4pw8Lk1cJb1gqHw4fSIVuu7z4s8ZU9sXNxK6%2BedmxFcoDFJ2FuMUlRjxobjhQWKonTf9sZGTTlU5cdLMEckcN5rkyiAnyYuAxSWuzws7pvLqlcV8csRXB6HHwHDr66UCqNArKLnFqKI9EzhMNXoqqr1&X-Amz-Signature=05c76283b86eb5a17fc880e0e79697b756cbd314788d53f14a2c61a75a5a10a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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