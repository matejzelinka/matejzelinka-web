---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MJ3NOI%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T102019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwBP9SArHlYnndZRTjOHVs3r4oLCEQNUHcLK0xnIN3wwIgLzAXsDbN9w0hR2W3FRqyAQ%2FBYqk048dfAxx86NLiGqUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCsTEMROyvOuReGsCrcA%2F47yi%2Bs3gijX%2F9oGro1u%2B8w2ZYA6dkwHFLayt33F7UJE4n%2F5UXTR9rEGM9jS1lqwoqCgC%2FNESt8nR%2FIPvkATUhZAvLwoQ99ixcWoIP6Ba%2Fp5pYX2qz%2FNc0PG5IMdZDeaZ4AiGhBg2i8%2FNkZspAkk5vK7ytOupnq0kWFvcQsWXEb1tb%2FvnKzrRGSfHV%2Ff57HQGf7xWrSbJDEYzoEk%2BSoAXPiFMxTzF7SYHs9DgIprvtKSNaihPdufOTCjSlApSQy1%2FX%2FLqI%2BroHhPa0wdp%2Bv2jTOA0t4k6zoQa6IaLIOZelgQ%2BfzKRKw1WWQi3YWiQ7f0l0BasY%2FS6XA6avNQyROsNDYqy3Y4b7TQvKxDYwdDQRvZJsmH9abhnqgAoBJ7EOR%2FD3AlodqhPCm78jqyxCrP2bBWP8AwM%2BZhqkfvBju34RwUc4AtploZBuc%2F%2FxXt6weBb%2F7CboIEjIq%2FkAywfWyShUmjFTtYbJmmhV85hcK%2BS0l2nKHZW%2F2pj7y3agBp%2FYN2QSv%2BK9sIbMbbyxCGHO6ZlaL95%2BSJufpEtN0JgMC%2B2UoVPcJDFWTArG9uFhRTCs41DAKEUHEYt6mbqMZc33qVdMeA2Rqhw8%2FjWOap8Axov7Cqg69mMPah7BNWMTLMPfO7MsGOqUBx8wQ4WXJERdfOiQZaRZ7Xysf7MY3CPbzAO61wwIk%2BAaUvm4%2FNoQrxBc1Mj%2BAavnGRHVTqoI5X03CNzsNcoKm%2BDV3%2BB86q0hemXe6QD1teWGbMnxQmGyzaEvsPOVgygUy49kHfgx1AHBHc%2FU2hkWyNmJC0T0UKMfI1VZEhInI304i7LQLXX0HjYY4kLPtjVaUy4iyRiirUBn4Q3mUH%2Bc0Ifz1h81E&X-Amz-Signature=c09abe0063d4a0fc45e5565982e5e990f1ad9ed60464121fde705c0c9775d02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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