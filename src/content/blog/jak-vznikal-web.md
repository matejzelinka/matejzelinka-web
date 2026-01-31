---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KG25EYW%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T125354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDITRhz1mXzV1lpYCKTHNeInnQVdYibIu2sUQhlXT6VowIhAP2VFeVWtsHBXGi9czGrQwkXMqZVokR2BGcSse%2BEdRyQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fbjpfgCIE9CBN7cq3ANgCAzSQGmh%2BC%2BIJ09T0Qy23wOs3LcnVHJ0yiIBKN9gwTi5RY9zaos%2FaUhEVtD8xh2LT0QTYNHY7kRbTGdbM29xIanJMyzgRmRHeGBV2hdEJP8q5my3OBWf4dRhbOYoDXEJxB6jlhPW1kD14SYli%2F%2Fo%2FtCDPsqWwq2SueX%2B2Xe4JPg6hH%2FSKJjmR52OQDu7cDlED1X%2FWMyBZT6VsO9dnEk7WsYeXP0C6ptLKeb8f3wes8LxmpotydZUzRIEYo8mbTRxXKycpUQYF7067SA4Q2n2uG1el4gbKnPi%2BBHJU6IEdjD3auI6pLGobdRbTkRgNqkWLA5%2BmwGHDwmPAvIUGEE1j46vK2%2FbA3h6MYGVh6I9gw3uIMgcW5VXnYF7oFhPWvfZh7zsmOkUNcu8W%2BRorOxwsdrnTzziVuc5F8yLnp8rECrgkUJ4mh1lx11HsU9QE%2BRtGQVnnUcPyEuP%2BnCm8eTKpm5llKRGq0hpcBSFVueQQRy3wPxD5fofHppjgf158G5VW5I6QvhxttaQIL%2BE2u7t8rYrFIxVCmhWZhnnuVyo73T2JVwjadAzEU7B%2FWJV%2FyLQZJfMA73AgmrRiktASigG3QrwRJG02%2FrtanoqqmIZ65DcE2o89%2FTRx6qzZDCnwvfLBjqkAd8ZC4enPaAtODkRycQCXweS1uo0dgusETsMhtoEXJVFRxTG8NRKFqj2yG4MFtv%2FwkBF7SthaVoncOefu8a01%2BMMdG6%2BQtHnnBTRptA%2BLDdZmpTO6isK1OKFaFyPzcM1eoxlRt7tOdczHkqVSM%2FhiAQrwEfa4NmKGxohygPXqJAfvHCOzORZnMYrkAVDhRwmm5UzFu5r6UCmfwNFLv5mueeQ64nU&X-Amz-Signature=dfe12755782c1026170c74ef71d105aaf3d1caaece6c84433ead03b5b4af72cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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