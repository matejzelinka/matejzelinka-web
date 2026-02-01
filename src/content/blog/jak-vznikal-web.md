---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXPX2DI%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T075559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZJtR5tQsjm3BehRjVieVUwcW9QhhEJTYI8rjXZk2d5AIgVuwi8KjH7qC4Lkd0dZqs8YwO%2BD%2BvLtol0eLbzSh64TAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdl80QK93YFWgegYircAyRjAo7125AZcaTo3cp4cF4cz4J8Qei5b2KU%2B9QAavPs5EnfRLOlm9WFKJoONPtrTg5sOcZH1KgU%2BlspkE6gNtC%2FDoD5NWThKP%2FjZF14UPPMgGVH2xLGquD%2Fx1NqSy6MxItqf5aKs4vKX4E1cOfvHouaFmnRqa154PFuPYbEsIggGmJ2HBHGvkKRYIUHR9g%2FZcz0AOxJt2Ia1d2xCqd9k%2BAivsI2rs8VVhX2GFM5TMkyZ3NMBNgyQIg7Wxy9d4%2F107bw8zikZWm2DLIVBylTzhAaGCZp3EKmbwBY651Z1TTEq6yxZ1L995kLXgadseRkZWKUc%2F%2B0nbdv7wJPE%2B8p1s61mUqBint1R7MnYfhrDbY8fZpfwzka1yojRfbr3KK6q8nxKoFHONynkfUP8NobUvrWt5%2Flk4JLtKttQRzbFmzC8JDvQTpBQ1LNmPzr7VEHf9sCNtlw71orl6pxMLgEFDrn02WLq%2BIZO8a6Xt3yAKSEnzdO0dlPgQ%2B3BuVuFG6JNXY0CTTCmL7fOaBH%2FwIirdHoIBMtBNxV3iK2r3NOyKMy4He2R7GTwAK9mRyvc2zMnpg9jvD6lQBtNnXedtBR3O%2Fp0zE1jxKA0iU4Dqp%2Ff54gdI2ZNBxcs6iyzJz5MO3g%2B8sGOqUBtAT8xn7hoB4C%2F8OTkLlmSi5iaXji0sypj2%2BCIPK6M4if9p919o%2B%2BZyf%2FRwI%2FBd84FqLu1h1a1n%2BU118Js2U%2BQdGmDgoXXux6D0Kl1BBoGnrz47l0RRods6rClhxKaEVbivFCz9ZYj57j9puaNzAhJJ49FI9JL%2FQFWc9rwsbi8PtY28hd3fdz0VL8Sn1eg5LEapjGIpYgt6Vo%2BSPKjujGJsu5CEa2&X-Amz-Signature=e7cc6e222191238e9d9c22d57eda490f7b232f239b5488a26c01d8f89ebad0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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