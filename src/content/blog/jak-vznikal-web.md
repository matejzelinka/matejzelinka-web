---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYI7JFHU%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T130211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrW1eztxycHZ5Gn7w7AvZKhrT9bbamM7sP1jgIY%2BD1IgIgbWh42h%2BJYaIcxY9BoFmorSVq%2F7S46uiC6HTfKDo%2B%2BT8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwigQdzTg0gLbAMMyrcAwQqQ%2FNllIoKfTKEEc2Kv%2F2q719XAn76ymDVU7srxSuoyKE7FE2rWLkWdo88FAUdmRlpoWSNRDQPXAOtL0HEReySWJuuAVvCJskOhR3Qux38agnb4wQvEkRvyY9x4dJlwrXzrDNP3hLRxmTbYaqPEG7Zh9xIIoA98vwa6qxXjBQcmCsv4ZrYBU51H7TpNqvMjgLwOO3DnkeJcYQT4lIWIyPYCNJ7%2Biwvon%2ByHAVzqqejw1xe1Uyqt4i8En7wncIwRS8IDpzhJEBDssFQWPoy3wPPvxOiDkaYH1WqNxCUGy5uuxsc2g8UY4W9fdK2xNgAL2PxQ9RgFQ3W5%2B7u0Iq2GH3e8jt5i5nc%2FYXIOoKsk7lYkrotZpOARphVvy%2BSaToq1IZo5acXG%2B9aQccOTDs%2BUioITsc13WBRiH8fhoDGsDBAXKXsgZ1OLfvDzyf4yjTpIbWfOTr0UerTnW3Ltc4%2Fk3tkqoH9VUjc78REoGW78T%2FfSHTVkeR3%2FhU0Fj6dl1ZaUgAnkO0tJeVEOnp4wQ6GAu87AI%2FKip22tdB0oPJ%2B93mlwvwLWLGRX7Owb4%2F%2BRgX2jylLNQBsyOnPRP7hvq659JRftKHIXKAN3h99v7S6PbqVOdMFh3ZhTqtQF5L3MN2S8ssGOqUBsQpYRnEH30pH15fa%2BGgZtuWZjOhEmZ1ZzuJS%2FNjk3VyVoOAO0byFjZUz0vE0LLPQsJwjUEVgPJN3q6%2FEAKWGh%2FAihkXBx7yP9jeaIU2x2%2BiwGMlipwcMN%2F5pG6D7zhKRHmEt3iX%2Bltt9qXCKo5j85n%2BuLlFetS8UVgMNf7gIF%2BKDP%2FVPY9Ck9frgy8jttv1kAMQ73aSirHS54lLrqwwkwCqCqnUa&X-Amz-Signature=1bfb91e2093f5a5cb35e957e7ad6f5651843cd06056b62b56fca810da3229b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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