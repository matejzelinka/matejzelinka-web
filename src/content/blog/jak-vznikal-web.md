---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y47ILSX%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T050324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4mCS0XqLuE8FkvC9s7jGGZ45QK%2BE%2BQXmT4yJeOJTNjAiEAxAyjRWeYIsq7%2F2pqh6khj%2FJpzwYWYqgf%2BhGzMvkRY6AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6m41i50fsJf7UHxSrcA7Xl9dVi4v2%2BKXs3%2Fytgyg1%2BPE%2Fy3A5nF7f%2Bouf7NZMXC%2Bwdczp%2FLVJ7u9eGHGOlSv9UX3hsvW5pPtIrLUP%2FxcMZM3cBIkGPj8ldI5mS1C%2Bftu9tKJVs%2BK5OqvgQ3%2F5RPe9TyRTK%2F3sLkzOb9WdgW2vLMC8Obz%2B7kKNrVu47x0sQKkG%2Bd%2B90N8UoD4L6cnmO9EqZ2%2BxMyBr7jKT1zSfJlqxALzy2odpWqVeIuc9mGZz%2FPg6joZF86o%2B0LDBZYLZCzTeID%2BxNhL6iw2XzbNev78nsGL0%2BhpZsWdfJrLD%2BenLGcMOaGES2mUniJiN8bx5DE%2B115IiQ3XOnb88pwAILWrhTEO9bBP%2BeiKgsixDS%2FomrxdjQNAtD8ZRiESXcNadbjZewPO0dXYjqmBM5WVI8Orztc4Tzuea%2BGpoZLBFrIc9uLlxk%2FmROEag5axf42xT2eYdqilqRpmYDct0VEQdGKKxxcEoQHXsvNkScQVqsk0tevmv%2BvMUxChRGUDythliTOzWICIY%2BRbFfYKXmS6xR8DlkWyFExyCcEMzw4o2GnzG%2FqZ%2Be288B4zjkIe8EKEX4yevggJv0w4JVDwfB7n3BIJxLc%2B%2FIKMZi2rpEMhR4yV6kAbKm4wgTT%2F%2F73M63MKq9%2BssGOqUBs5088hWrueMaFXeNuxa%2FR1bKYyZNDEtqmR%2FRaeCi20o2nfv4vfsYWdjE6Cczi6WcvJ1alQhIa%2FGV8JgH2kbg53ZV0wiIv4NodzWoNDqGLih9Uebkvf5kGuWQ3ks7nWrqPaTSFo%2F7zH5qoAFf4GqMdjWZcmXdeUgf%2FvGQT8uACYS6L%2FAGllD0nvet9HU%2FfEtoo1JH6p5ndx4z2Y2rvHyB10qSyV2%2B&X-Amz-Signature=63bb5029e79126c4bc9b7b6804fa653594c97e8233019e2f71d8e0d73b12c555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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