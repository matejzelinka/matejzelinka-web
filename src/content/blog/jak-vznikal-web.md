---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3GULHW%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T043644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFDcQLVIa5tY6EAJTJrCxZ7kIDsKBQr59ifjx%2Bgl6za8AiEAnkJka2aoOnRNHcUMJIR%2FweyMW2Gkq8tE%2BRNy%2B91rvwUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfLB0uuhYPEFmFdQircA3xqS%2B6nPYTG0iEkGe%2BbD6Opn9s%2BDsCs9OV%2B8jPHb4ASTOGYMsx7OtXoobHPyp5CJTGhaIaevcdbObzGhCnWtt%2FZJJW8IpJWaHFNAVTgTMQykPBi14d9MlqKsVtqr%2FK5v%2BXpKKBvvC6JIR0PYKQ%2F1keKOzMkvnJrw2TZcWLO7pS5IVD%2BPT9V%2B2YoxDgFAc6Nhd9zf21klDI2xfGd622DsIJ0n3o57AJ6qo6hj9rZVfkRgvcN75yx2FkS%2Bh%2FxUKK0a03JmaS%2Bt5mNQpfeYEuyCJV1a5IKyW1B%2ByXcv11wTscpBpusqz211msprG2sVVymJTxGpxRZllMULtiy7PqzLjse7d6ZJZ2uTtltJmiytlTzBkGqDHtYOMS5sszvqTbBkHFg6HjOVmR537VgmYM5%2F38kYWJDzKF8Txy7tVAzFwnuoqmm47TuLS%2BdLF1Y97I%2FbSV1vk8VWvCxBOOgNgZLo8BTjUf90ica%2FJ0HX25gAbFFQkYxrF0T1PEQXFR0HXjKDDSpSHvSBtsXi%2Ftb2IeV4THavcjuWf%2F%2FDYbTVCq2n7vZQh7%2F9od%2FCabzZ6j2tXjkI9dmFG%2BlMKzepkPeUzkeSLv3HQw8wzKlF8pjmo3kNGJgCWjMBmNUbaUM6j2fMMmJgMwGOqUB9lk0avQWm1f5CfdeO6f3UmNXHbzcqpQ5309SazgisuqZOXzCXRjWZX88z5CB2gXchSilp%2FKgwBl%2BjipHKCaFXc1Vk0uV%2Fghko2SNqRxbZwZXeF0eOoKxxdwGpPrsf7f4RafAujQ%2FB3VtdVZkqkU%2BpodAvo8CinwJ%2BC%2Bxq8zofAvQx8vDhfs4R3LBuuUxXl5cZR8y6ub0NjrHys8HapOK7Ojq2mkY&X-Amz-Signature=bb2a2f448b856fc355ab04ab372dab55a43f3fad30301333328025df91320e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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