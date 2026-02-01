---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY3TTQ5V%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T212615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCNRqG%2BdnAUaBP9b01Xa4hGIaPmGw8CYnjENG8Q9OePfgIhAJzCGGwi259prvFuvFOHLNU9LfHbZExl%2FPNn45aXIOFmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp%2Fw6%2BoxxvucGYAHUq3ANaQ5ZfGmo04p1eBgQwj5GoNId03NhKI8pp%2BrYhdcCKP0Y7u49ggRGuZKlpta9lzCn8RhQmx6gfe9iuB%2B%2BL62KcUmEvy7Z2U3Z3Ay%2FAh14yoOmaD4fAEawUnNMqnPDUnMMruhxmRX%2FdehR%2FVHcrkyaLttV8n7pjc2Udp5L04v3nDP0EWfmcZIXhS98wYUDkrrbWk6CcB5erXvUAa7MNSkjzYrtRLN4H8DAx12B%2BoMI0cogGKZd1HTzu918nOpYC1lLw%2B%2F45PfwvRWEv82ka12ExVjfMKw0CNrc9jrd7KvC2Mv9B%2BdOqfmHQvdRljeJ0dKMWTeoEU4uzDgDwRWxinY4xCzQcUKIOLYVhfUamMKBk3emSClCUpUFqAGy842CUeZpeP7p%2BMAoVWnV7dqpd2Jdlhak2r8AuRrWPsX8x4DN7DDXxlsu%2FShZJSfod9fVxv2DZGR5CHsUpUudG45U6Es0eyS2I0A9rEPJE8%2FVOZ1nA415Z%2BBkte%2Fg3nPLZM%2B%2BKGVFQACnexEJoWSPWv9jnijbE5QuhbCjjX4mTYz2qzd98z1duwXqjQ9rYbVgu4NKSvUdLtT3gli1Kx1NrZLh5tq3AxbcHsfgrdv0m9wbEZZs6UbD8mfxGbASZl5kWQzCpjv7LBjqkAVAKquDEOMaymBK%2BNUsmtb6yqp2UrixLg04iPK2RKNF6dG0D3RfbQfcWM%2FaZteflOZoG8hvL%2Bj1770xdL1XK0FQNCsIk5jt20W3baH%2B%2FAoxzzOFohYI7EEQki2iAf9hpbUdecOzPMHB8gKgACX1ndy0v1H42W1iaJ2HwxM6vbSs5XyAiy%2B4UGrqbUCwivKu4Oq9SkHax%2F6EAWZkWS2YagUdyy90d&X-Amz-Signature=6a357fb3bd9009471b1bbb9643351d0d0001f32af48ad7cb1dac23c6e7a46c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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