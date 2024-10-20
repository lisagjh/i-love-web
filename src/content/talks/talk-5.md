---
title: "From Concept to Creation"
date: 2024-10-18
description: "A talk by Dion Pieters about his work and portfolio."
tags: ["S15", "talk", "Techstack"]
---

# From concept to creation: the art of development

Dion Pieters is co-teacher bij de eerste jaars FDND. 

Dion is developer en designer. Hij heeft gewerkt bij Build in Amsterdam en Active Theory.

## Portfolio

Dion's portfolio: [dionpieters.dev](https://www.dionpieters.dev/)

Is je eigen portfolio het slechtste product dat je ooit gaat opleveren?

Je bent je eigen klant. 

- Wie gaat je portfolio ontwerpen? Ik?
- Heb ik nog een oud portfolio?
- Voor wie maak ik een portfolio?
- Wat wil ik laten zien?
- Hoeveel tijd besteden?
- Waarvoor nodig?

Moet een developer kunnen designen, en moet een designer kunnen developen?
--> sydney opera house voorbeeld: architect ontwerpt cool gebouw, weet niks over constructie dus laat zich daardoor niet limiteren.

- Inspiratie: voorbeelden van dingen die je zelf vet of inspirerend vind
- Core Values: wat wil je overbrengen/uitstralen? playful, minimal, etc
- Purpose: wat wil je bereiken? growth, showcase, playground, etc

Daarna: eerste ontwerp stappen in figma. Goed uitgewerkt concept, maar plat. Verschillende ideeën uitwerken.

Dion heeft met 2 verschillende designers gewerkt om bij deze versie te komen.

"niks sexies aan een PDF" ? oke.??

Moet ieder element op je site een soort animatie hebben?

Eerste versie stond live, maar nog niet goed genoeg. Dus: webGL en animaties toegevoegd!


## Code

in het Canvas element kan je pixels tekenen. Dit staat los van de DOM. Is wel slecht voor accessibility. Met canvas en WebGL veel mogelijkheden om vette dingen te maken. Elke pixel kan individueel anders reageren.

BaseShape en BaseText
setPosition(): met threejs word er op de plek van de DOM elementen een vervangend 3d element getekend, en de originele html is hidden.

Dion begint ieder project met user agent stylesheets dingen te overriden, zoals het `<a>` element, en basic styling toe te voegen aan de meeste elementen.

Custom properties voor transitions, veel met cubic bezier. Op deze website, [easings.net](https://easings.net/) veel easings in CSS en JS. 

Viewtransitions zelf gemaakt, voor smoothere overgang.

#### Vragen

Reduce motion werkt niet? waarom? 

Normaal voor klant projecten natuurlijk wel, nu werkt het niet omdat Dion echt iets wilt overbrengen met zijn website. Zonder de animaties enz. is het gewoon niet hetzelfde, en is het niet meer "zijn" website als het ware.


