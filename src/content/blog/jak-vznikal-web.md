---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M5WSOJL%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T070431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiX0PaMP6gkRQP2DmW6eGkbB%2FtBZh4rwYuhxTMYcqS2gIgQP%2Fv4jDWKbIIzCBrjca3Uy1Jeoair72Sj5NaJM328ggqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADrCEnxm9bpAyR4tCrcA59GiEEHDVqvukqZDzXugQ5y1HbIxKopgDnq3FKD624rGb48aHZGhFAmWmULDpl%2B2B%2FpfP2EP%2Fo5FdHl9mPc3YI%2BaVa4kN5J6uIZIwTtOJMt3F%2F%2Fh9V9Un%2B%2BWvu%2BWMUvZybRBiIGCHz3AXlsYQYyDS5%2Bm8lEtLNYwXtExlenKZd4pdyB45nnMfWusHt7nvyTNHWaP2Q7a1mrrJbLf%2BHb%2BttlvgVgJdbE0qHUlXu6EPtkXUGPS%2BRQez6XBm9zANIB%2B3kS0wfw%2BrFw3FTmdSaw0bSy1wf4ODzxROwdTZZB86aLFMQOA7%2BX3V5z4Hzw%2B%2FgGB80t3h1q%2F8slrEdcVdD%2FX%2BdBzVde1EDdhkSR4DJCpWRiDRnIJ7O9HNp6in7HDKh0rWBXUID3byPT57%2BWAj5pQAv%2BEgJ9gjxRJp8GUNF9I7Uf55CiDR3YFuRuiburagD8S4iQVFvEyImJc637hYI8K4vEZWRhw6DHpJXZZD3rCAE25eABXkV%2FBtnILK27vPDnhBa3JqFosA5nWns1Ve20Iodrvbh6hsMRBJ%2BYt8lPYH%2FSmLWNQO%2F9Eq%2BXc%2F44ux8mKp0ScqRgJ9xElfnk8YlvbdLxeGl3BLv%2BkrKzl7mw4tRRBywxnE%2FWtVAV7fHNMMye9ssGOqUB4eNkLiijcVawe930Zd98Q%2FcZQ1BARVcH68NBSzHsItWbNL7aOly7rqOyZtKPzC9Wmh7hWDoaRDdNni%2FP%2Fur4KvpWP2BibbmqQif%2B8RcoOYKYoGOGp7PhqbSSi3kcnqx67LnRL7hH8Nkn%2B6xDbbd5hLrZ%2FICTj4EdLSEjwmwxSOBZYLEm299aDgOX%2FzE79PoK6kM8zw9fXd644gziN3L0lvf4Y1PX&X-Amz-Signature=498dde9a48922caa86e0b5eefe5563c3f2b83a3ddfc698e782634adc10aad449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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