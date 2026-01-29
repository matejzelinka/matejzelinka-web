---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5OSNTJ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T095007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFJo9hpSKwZIrFz9WjN7Bd1TiZTQ2DinO%2Brz5cSmVziAIhAINvyN%2FNnHKnG8paKu9pfSzU3sYJG9DdFQdfKDy5yvp3KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6fmD%2FGwWZ6YH%2F5j0q3AMLbmBRRrZwn3roLM7Tk6J7KlSM8SntNZoVc1ev9yFTS5iGslk3kO66DAbepkEOmxjLso81KUIxhszTQoZ1UfCAe7Pb9jry1ZKBFAENGUlyiUpJCqRqIBD4q%2B5Z4c6jMxYd86XIhFNMpGjazTNtB0FzR2YM2t5XN6DIkzmBXeIvl526zvoeF7%2BSvqZsBUdicTiJQgyfCay7W7JZGuGVDQ0ETV2kBHwr%2F%2Fl8nXoqqhwc7UFW%2BIqzOu%2B54w0XHfdpnWmskc5yaVCcxBjeMHVfYhYESXFsxhz5lFvA6lbaNphji3Kw4Y6QVNDCSicL7u8lRP0wMtiTQWLtK0M%2FZK9YexWeHlsLYCuy%2BKtxDreD2nn7lV1y3rpjboQPRpecv5pZkRDtlKeNHXkClVvansxjMJQGNDmm2XWCfL4WzLiiLvSktS7eb3e5YmAQrU4CdsAXN9eEumkcz54Ay%2Bp06uSbT%2BmcTe65zs1oQqd1u3%2FMO%2FuqMtkccFE3o5qgtO7XxdX7oNk22lXzvxM3i7UFodkNbKx8f05EEF91Bg5TqHbpA2eLA%2FGDwCbbTpIz5zw5vpW1EGR9jb8DELUj8I%2FbVUtPFOWxfSckm15s4xfSpnUg3HtNcE4FBtUFy0aeTF0ZaDDczuzLBjqkAWQGj9zORZ5uaLgjnpdtlSJfQW%2FwCun2aSWlpUH%2BWMFPuaS9a5RQqyFKIkMltv07nijHEbh4l012MJfT2aoAHyRauI3qjhw4fTDUlrExchRzIUoxT%2BTGnjX8qmdEzZGKMGiVS4dwt%2FZR152X0TNS%2BOABPt5rLmfAkfB68Yn6mJUdax2w8JV7A0sG126xExRhyCtdTKXZJ%2FtInf6T3fByKWh9vwJE&X-Amz-Signature=57be2ccf1b07a64c6bf87030ee4bb31bfc5d12f65c479feddc33e34d9810bb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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