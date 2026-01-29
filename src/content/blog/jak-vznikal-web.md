---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOH4SU%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T223109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBut8zyNIXKEdNiHD5jHpsxqj5JYTyw0m6Bms4cyz5K0AiABElEq%2BlHbdKv3TCg7OgZBdRxnPpwuK1SIgk%2F752zFmyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXns26qpnO1ntJOy8KtwDDOb0hqS217CBJY1I5gURvFs%2BryF2BZDzJJ3kK1kZrXZXLBf8yG%2BbaYfl1bmbMoIVzbgW%2BM3MvJtjlLFJl2geaqUZu2Df7ochn31FJC4O6dTqqkVCXDsrruY%2Fn9AN%2FHxKeyJJgqKul5aF3%2FyOF3lMqxY8IVS9dQTMj1PgW6hBHpqOrBdwRiMaKMQdU18WYX%2F2KVtdftA%2FYygtqBz%2FnSpDgo%2F9x%2BQZ0%2FI5aFuWUw3n3Mhx473SbSSTFZNeU8MnNeYp%2BIAy5%2B6NdwnUSKL2wneuLGnrPXwryu7odN20r%2B1SiOX3dNNDmOq7E7AMnsUQQh6JSQFj8JqPOqwQzazdeIK6%2FUDkC8hU9gmn1GMOnvc8PHIv%2BzXRIzrjeBK37u23Dq%2BrocMKvw%2Fh3xlPtp2HYQi2y3JEW19jSTV57fQaxzNTxJRT48UDrngjMEBK69du7GwFoDRAPeJG6xzsAcVbMNPbj3AHURsMV%2F955Hu3aca%2FEjKz0zirr8sZ3TsjWWwV6yYl6lkmgDtwq6KErGLvEuU7E5OZfZWG3b0gzoR%2FKl8BJ7BzW%2BluTmQnR6UPpK7x%2BVALTrFqN%2FoNEGiycK8HwyzmsElXfHgAIcCbLEEiWf63asX2mddQ%2BczaPg85RoYw8L3vywY6pgFMb%2B10%2Fpq%2FDaajVzUTG5cbCl0UJRpR8xi5vZ%2FkA8UA4UPf3G%2BB7vjO1rkfsJtc0fulp44RISS73dUU6wqHUWHAOaRs6rhYJb%2BSXR55RqhsowfPcY%2F75H98YEZySImXOufU4RVjzrQU9gumV8boZjXPZS7NuQ7eDpAkpKG1BROZBh7KOyWYFWNeVQCFNWGzJV7xuED6b74yexnpQ06Md4LwMpOHgAps&X-Amz-Signature=5d377d90a3d0ba999cef59f8b0506f12226dbb0845e634fb589bb1d972daae69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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