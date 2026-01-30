---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZECQLQK%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T042103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChLDKsJAqXgDuut86oVb%2FtvR8%2FT%2FhA4B2wTO6eWiSYEAiEA%2Bb204RlP79ZEscT5c76DJ7jCpsBCXOwy37f7HXdPO3AqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlK80DthtrXfDuUPyrcA45i64x%2Fju2zHCjlSvkd9GAsRkFOsj9LU0usM6pTjQHt32KjncoTB414jA0yrp062G3NT2zduaqLKRXkt3AQbO8aseW4%2B%2FYtWStaQWje4oxIHl0XHm%2FL8V79IyoVPjUX7AYOwh2tJYEhLaakKM8TMu48GaPxZROXC14EDg6BRC%2Bjr0N94axVBaV8WJM3UAzZvGW2m5tlLpZU%2F%2B06WD%2B6qbGaMo93omPp1Ow6MqK0DxTRI6CdDUyEhvMpb1cFPQQ%2FDuAenlzk6eIdxZnYSNVZsbWkhFKWl%2FdXCDxLH6bT0hIQVShSfnT7483XLyyazjuFpEd322Yh8txtjHts6%2F2rNApPSRHv%2Bcs1YZk%2FWucGi3k%2FWJickRVWOlGRpF%2FIWVQun1UlJ%2F4gq%2BubHOGBazSLvjyaP81UQ0Ltfdr8zDZdRKs3QSi9b4f9PCCtcBI7H4TgDf9vN9jgfmSPgbP8sCMjGzuoLdQ0rTJOEawCcn1xTPIOsrBfhwHecumH%2B6N234LXfRxmWGcvvhRu%2FEMx6J4qQhJCW4yQnvS4b%2Bv5ct0b63K98V3ERyC72rJ88vb3MivMBNajNKMllR%2F2MiJk0gp9v2eMGaUhN1upytWmLpFcqFaL1kKOFtO06a3cW0Y%2FMIDc8MsGOqUBeTKchwsZy4rqKf%2F5ncUex4uewewwnAjB4Tp%2BKBSSHcNBb97zxkAFwS3WkP9bviIaSSpej2aYQjx7LILUHL7967UXSyyg47Ajr6p%2FwaCABHsWTiU%2BqaxOeIJSka%2BCnFsKlYTAtXO0xnHhm1VtHaJuw1AbJwsQ300c1uSIOpZ1xRndTek3qq2jTg159ouG5UG%2F91O0EDGFoevdHrAjZRnDTwdwwjPa&X-Amz-Signature=25a33a665235988943a7aca5cd2977dc0c65b952a5c49e1d3a4437601b03b902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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