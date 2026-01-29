---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2BYVN6W%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T075824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKXYXXa0h%2FmupOAJtC2MmunHx7daLXTre9fd62AnGc%2BAiA2PRU6nQhDdBAiLaQzEBTQMvbVV2CjKa7hHQbbDNQQDSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7AQLUQsK7hprQkJ4KtwD17LOXmcCyjcqR8KZtLp%2BU3t3ex2lMZPLOhwAcAaFgsH%2Fk%2B%2FwVTiaJAr0qPCoJT4MhKRZIz5Q0byFrzBENyrSKPnIpYEF8y4bjEKdR%2Fg9WbaImewaxpbE95%2BRIHfTscvNsNaS%2FkELmck345lUWmo7GP3NZJlWhhU4snfl7SQlh53TEVWrNCUY4LimBhgVLtrKmk%2BjdABWy5dgwf5WC%2B9DvaPCgYjKi2am5RkznNsuzI9PMp8HnmWqJsSsxONz0ZASUSftV6KuR%2FEFZj%2BNiCn0CdDUr95b4y2n8VZzLINrFnMceJ09pOnoz87YbeFUGtDARQnHjJ3cYbt%2FI32dbbVuAmBxtpzH5wIlg%2BLuGdx5U9e5g2Pa%2FXfrSZZAgZw7oVVmN7W2CfBwuJGtb%2FGrhkpuyAUwE82dB8AkUmk644qWmS3G2gb%2BJ5JI71WHz3wP0kGpidNQgFE6JXaEKiP1%2B2K2sPh4JolGe4oRPcB3KQ%2FvRlIJsSsp7rPEBecsLE%2B3hAHnHwA3tvhLJT6AAf8U7lDENmgOqaCKF5NHPzOJ0CmZAlTO6eOq%2FuuS%2B8IPHVwj%2Bajl47fZzPoG6A6nAVPL3UPh7G9aVyCuRdnDHHwl4xbsQNmiDegyFzmJiIpEgfgw64fsywY6pgEzctLOn1lp6FueOkCve1JR7WVxu%2BP2tDimJgW1P2ipRzRtQ3AB5mTfvbTdACDHuJOlVgmInfnQWt64gcv7UmclRgeIc4c39uVnsez6A6RmlYU7MkSdzByUsPDMieqN9M3v%2BbUMQc1WEf4BOzOsnhbT6u4OdUyz6N3uvCPWYJHZq%2FtIFcA%2Bum7C9UAcAFZC8pQKKKGZgLmS2KhlCJ5PfNkPo3imIP6P&X-Amz-Signature=c06dbe73e85487d11f9856c0f1f7f83c0fbc56524a5cb084da0fb5c520f4f336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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