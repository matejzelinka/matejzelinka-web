---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z32ME6JO%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T093540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL0zAFUOfeTfkPpvIESD5LQ51ljUjeA2tq0WSzFbYxugIhAIjVD0xAjc5YO0%2FfEbqz2fpOBn6480as1T%2BzZEtL06SCKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg13BDwrL%2BtPhiaxsq3ANEEVp%2BoTPTgZ8asGUyRzdLERI6TJbvr0TMH%2FgGHExSakB7lJEbZQqxuic0KIHVMl05XHGGWSlRem06ebOKArj5%2BYB2rQQyHVvbRNlk9bUUX3Bvi4mUR60QG6%2BYaKqwYwxirZYB%2BtvWWTaAr199unG818maeY6PLtbzNeCgKplVbAkaFPb7NCfnWd%2Ft%2BU2jIEimyWzY0RPuEo6EWa7179wT7vs0hIsJ9MGfeBV4SDH5nOnkkHUxJK3e3WiI36Zzcvnow9aRXaDGwLAJRltslbYqrFs%2BKXwDv8IQr6KfwgY5yQAtT7kvL9t2jftuiwBSRjLPtZtKphPa%2FD0mgQM%2Flijp7iN1noOA%2BDkjLmcre%2BLicpMgoVAXD37W%2BwbtjcBlN%2BuAjHZB4EjyamP3495sDyRC%2FCeMrt81ZWpKfIJsPUEeM1zwJffMcw2ag%2BWAOoXzai9QX30wL0imsLJ143ZwEwNWNeab%2Fns0AoaYf0jDPGbvYSjDqmC0bnTHXBW%2BvMEyxBLVvY%2BmKD5l7DuVoMroYzJ%2BiCEJnL2IzzRUCfx6OvXrJzTaHjaakPA7kM9oLjbDHmjfFhIkIs1VxsBqAr86MdsDL0Z94BQsMWZDhfSoB6SMWZAQcMINua5HP8mmCjDZzuzLBjqkARYBbQzAz804sHm2zptbB91Ua6PfTjPCAM4eV%2BTYkzu7FNXVmIeJPIk%2BCHEVrDt8%2BFMYSjqo5VFYDhr%2BWDXeCvYvqQeHpNcDktb%2FrOuxH3oJjY7BmABC7SonmhlWJrJ4Uy60ZwdaQHsUyJvMYY0INk7t5aMcalFQovhLu5t%2F%2BzsAptwplo1FPieXO2VZRYtKbLVw691sfRx5gSPbWTaEJ6mdX%2BCD&X-Amz-Signature=712e5e1c216520e72a45de927193576677cdb434944a4bf4b00f4678db06bee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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