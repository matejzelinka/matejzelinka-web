---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags: ["[object Object]"]
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN23JHOM%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T084836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFhcgR7NvCle7G1yuViBH%2FNgaBZwV9sB2jr2XcBlfbZAIgAtbGZltTIfGubhrk6SpXRrby9L4EK5dueFXSnk%2BxnG0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgEtZA5bNONvHfBBircA2aknavIjOVH5ZdQ3mLZ2alkc0ftvWJoaoJTkJsHUnt61bUWGFxOcF3%2FDHdxWPGKjXpxGj8uj2tA5%2BC26pO%2FTIYPdeQoRhDT42JbGgVjZxBdL21MM58acLCrvynYWogdTfk%2FZq40NTZNmL%2BYjiAaRag6mSRlNJvPA7PiREBGoqG4JfpafV%2BFy5xDY9PZAJQj5J4cuWLj2OyO%2FvuKBUBwvNq0ynasf%2F2K6H8rebFKNJlinjh4iz0q%2Bf1TTDAlIzqMg5sXKl1kjhp1L02EB7wle%2B5fedn3y8yIiEk2xU17AanRrouYEtgYsEnWC%2FkCEPJV5XbvdNk8oowNlVtpOejJ%2BJi3IsylceIl2mXpZ%2BnVDAtu2TOIkrSeoQwkcn8cG1ZQjjAgQFU50%2BXaPhG5BQqRA7eY%2BrwBlp2W1L4vFHyatA05pWnd3lVufHDKNLLCb%2Bx8SWwTSaGx5HO45DSbBqOw691X%2FFqCrBx%2BBf3kLGIPNhbHqBurd60ihTA9M5rlp7i7Zu%2BMYya061WBSsDCPRByRYgFUNfeulcwqSSJazkHaqjXqzNIzUK1swu6YGQvGS7GgC6aSxEUEib9gjDgqZCEBXNwujawlJriFhUK9YHJ6TS5dSn5Nv3T1lWWSk%2FpMLep7MsGOqUB0aeDSDKKA37qnsVPNOBKB7SysNfGGvKj5apUaAckxEtUYg2apmL06lilHLozLsXoaOONPvv5HYVCpc5HLUWpm1w3BvX77j6P67h1j7xg4M82N7iFy4aUw6b61vGE%2FH5%2FRAqbC3PIU0BMLxUV%2FiPNrVKBcktajiroFKksTVcDSf%2FuJTRWzLhwRErvAEiVkA5ybxroF1HaXeB%2BUjWRqf5u6qoDOVzz&X-Amz-Signature=6c9269d840d2b08a38b9f3b245afb6372ce574f73af7a52b23e4b9c17256bde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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