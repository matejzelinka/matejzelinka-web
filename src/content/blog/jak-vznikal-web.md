---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWGN6ME%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T130326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc1f1ohfzqCrkPqjER%2Bg8XIAvmhD929zSNa0H08gTYyAiBqE2mqL8Ekon4Oz9bmLxBCwTKbfMAJ1L9uAnIkeIy28iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0vu4YfEnxdDlCJ2GKtwDjVACv1vmUPrTxAQacw34kdKlVY%2BWLlFPn%2F2ZSZWhAtvDfycW5gKQsiz7Uzje2oVPpCq7G8lFKcO%2B9YJXD3vNvXN96mgIsx5B61YluhpyS%2FsHxT891ieRxAfM%2FHEpjzw6%2Fk853%2FYPUBSeT%2B7V%2FPFq2cCAHcbLaGatxWtoVF2Gwri94z%2BXOKx3dxwr4Sv0INA0Wwh3D6b8qlI7LySJln3ntoy%2F95X0q7m7WicEMZUAiz%2BoXGIqpRXg0H1mjhCbSiaiYmLWKhuS70JoIHYmulfj5s1MIGUZ8T4Iyva%2FD9JKeEmmzYy16wb38st%2BnMsRur9gaiMUrpJFHSTofu1q47%2BxaxbuTbb%2Fk5gcu60rhGYWmqTtuIz3LjwIvZRwf6CnnpEOfbrfFE397xE8J1S3OzdbYX1WkEjrAifFb5yp6ptsQS%2BzYcNfaBoje93F5yT8Il9qh5eh7gJiZHLY75RuO6b9emlr2J3C3KB2HSLgnIvLIz1mvKOjVc1%2Fmp8vba9WXLrSUpeoPP3IumHIimljHza7RlBc0YKI%2F4ktZ4XpF2do8vbwSSl6f038mPvj%2BnMIGpdDWF%2FZskIlgRKbHx5%2FYFg6XAu3VbL5o2zDM6A%2F6kl84gZ7WlotaxyPs8xtIlgw3fTsywY6pgHbvY8GY1CPZ8pCb2WBMa5xlmstv8lCrqEgUlk%2BPRKblHdN%2BwA3MGZ11Yaed1p5%2BdsR6ABWyq7hOyj7BeGSu9yJiHDoMwp%2B6u3HgxSRQN3As93EgrqZha7cWQ7VYcpHPwNXZb5g8z%2FX3kniyKuYmczPoQFVc%2Bg7FyPG7eoQQG2d3ASoI3casOHQZehcCrint3ZqBruw1ccBWizDmiFtnJn3GnosvShB&X-Amz-Signature=2d3cd3f837bfd30b7e91c45f676f5e43f0b564239858dfcb2520aba117304694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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