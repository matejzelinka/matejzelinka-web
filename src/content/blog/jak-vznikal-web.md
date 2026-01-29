---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAAKSGUU%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T071138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDmOeTqt2uVTPlBtksxhy91OxoN%2FIjyHoymxRbc77vLAiBiYM1f4fwEG%2Fls8nHifyqJERPwvB6g8%2Bl5wOjP1CwOSCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkz4GW74EMpxJcX6TKtwDuiFomcFJm7%2FDcO9We26Nl8Ktan1GwsWACxKe%2FDwBc%2FSPOVFcSm9PcpTwEDDAOha7dhzUEIHxrUjuPIlvtn%2FZMW5kC6MhMTxwYpTg8bf6zuwSab1mCyGjvm4WrGpTCFP9aKZoeUUGzDDDiXwgNfS05vKdaiRLrYPxqzz8k9%2FacPg6oMDg2meY7p9SJ3XFlTzMIS4dhgJEnrXMle9RO0UEsmx9FIe3zKpDYojnObbYplXyWOxrty5vrbrhb9SHCVNlQ8Ytomt3MhcKRs12Uu6ZYXeYZ%2F1PNUsmeJn%2BLyx3tcftnYstLObBOt%2B5zmRhrv6cwzywAf%2B6tipT1VGQk29Zn5N1y3aPm2%2B0ulmsPEj%2Buy9SXH7CfnSnGdhBnNmW%2FdlpDVebRHfaRAZYjuUds9a%2F4vj%2BNr50%2FABUTXvrqFyqZZ4gq7RLOCTHA3wsU1DHY2maCFGscCjiX%2FApv87IjZa4fwY%2F1%2BLKDfoIuHSbH55XXiz6msvizuBRblqX8%2BMH6ajP69VBLWAkD10gDoYFDImDXG%2FmDhO2j%2FeiKbUkLUo%2B7OI1igxfBno9Sapk%2BRkBTaG5jewHlcaZ0n8f9cJcRNGaC6VeoYtQT%2BeKaYY7x6WrVK3jWi7AHwZuWCPf8Jgw7IfsywY6pgEBXukgzR6renu%2FINeP5umLPo09eg3EztPT13gUZdw4EwDQX9Gyn3c3JWtJFnNbySsjlFRG0J2mggwQT48uZgBo5ztNMUusM9QM4R8c%2FNCG%2Fygr09Rpi64XfvtzKy3OF5jVuzRrhl8xEhVTkD7D7R%2FUa0LRzw5okB4K6ALraga4dnbIIfgZllWQFmJOeLjDpMjAm0qEDJ6icQM7JSU3NZoYwqsz%2BlPT&X-Amz-Signature=8cdbee197bfa2d0eb9a2bb7de04ecf72db285dd3b58cdb4efebe331940b79a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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