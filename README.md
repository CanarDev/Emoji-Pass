# Emoji-Pass
![DALL·E 2023-10-17 10 42 26 - Vector logo for an npm package that generates password based on emojis  The design showcases a lock symbol made up of various colorful emojis, represe](https://github.com/CanarDev/Emoji-Pass/assets/87917626/8dca39a5-d844-4b0c-9bea-366ef920f220)

## Besoins
À l'ère numérique actuelle, la sécurité est primordiale. La complexité des mots de passe est essentielle pour garantir la sécurité des comptes en ligne. Cependant, les mots de passe alphanumériques utilisés à l'unanimité aujourd'hui peuvent être difficiles à retenir.
 Pourquoi ne pas les rendre à la fois sécurisés et amusants en utilisant des emojis ?

## Problématique
Comment peut-on créer des mots de passe mémorables tout en conservant un niveau de sécurité élevé ? Les mots de passe basés sur des emojis peuvent être la solution.

## Bibliothèque

Nom de la bibliothèque : emoji-pass

Description : Générateur de mots de passe basé sur des emojis

lien vers la bibliothèque : https://www.npmjs.com/package/emoji-pass


## Code

```
📦emoji-pass
 ┣ 📂.github
 ┃ ┗ 📂workflows
 ┃   ┗ 📜main.yml
 ┣ 📂node_modules
 ┣ 📂tests
 ┃ ┗ 📜generator.test.js
 ┣ 📜emoji-list.js
 ┣ 📜example.js
 ┣ 📜index.js
 ┗ 📜package.json
```


## Installation

```
npm install emoji-pass
``` 
ou 

```
yarn add emoji-pass
```

## Exemple d'utilisation

Après avoir installé le package, pour générer un mot de passe basé sur des emojis, exécutez simplement la commande :

```
npm example
``` 
ou 

```
yarn example
```

## Documentation 

##### Introduction
Le "Générateur de Mot de Passe Emoji" est une bibliothèque conçue pour créer des mots de passe mémorables à partir d'emojis. Ces mots de passe, tout en étant amusants, offrent également un niveau de complexité différent des mots de passe alphanumériques traditionnels.

##### Structure du projet

Le projet est structuré autour de trois fichiers principaux:

1. index.js: C'est le cœur de la bibliothèque où la logique de génération des mots de passe est implémentée.
2. emoji-list.js: Contient une liste d'emojis qui sont utilisés pour générer les mots de passe.
3. example.js: Fournit un exemple d'utilisation de la bibliothèque.

```
function generatePassword(length) 
```
Cette fonction est le principal point d'entrée de la bibliothèque. Elle génère un mot de passe composé d'emojis basé sur la longueur spécifiée par : 

###### Paramètres

length

Type : number
Description : Le nombre d'emojis que vous souhaitez dans le mot de passe généré. Il doit être positif.
Exemple : si dans le fichier generator.test.js 
```
const length = 5;
```
ce qui signifie que l'utilisateur souhaite un mot de passe composé de 5 emojis.
alors le mot de passe généré sera composé de 5 emojis.


###### Valeur de retour

```
return password;
```

Type : string
Description : Retourne un mot de passe composé d'emojis. La longueur de cette chaîne correspond au paramètre length fourni.

###### Gestion des erreurs
Si le paramètre length n'est pas de type number ou s'il est inférieur ou égal à zéro, la fonction lancera une exception avec le message : "Invalid password length specified".

###### Fichier emoji-list.js
Ce fichier contient un tableau d'emojis qui sont utilisés par la fonction generatePassword.

```
module.exports = [
    '😀','😃','😄','😁'
    // ... ajoutez autant d'emojis que vous le souhaitez ici
];
```
###### Tests
Des tests sont fournis pour garantir le bon fonctionnement de la bibliothèque :

- Vérification de la longueur du mot de passe généré : Ce test s'assure que le mot de passe généré a bien la longueur spécifiée. Notez que la longueur est multipliée par 2 car chaque emoji est représenté par deux caractères.

- Vérification de la composition du mot de passe : Ce test vérifie que le mot de passe généré est bien composé uniquement d'emojis.

Pour exécuter ces tests, utilisez une commande appropriée comme 
```
npm test
``` 
ou 
```
yarn test
```
selon votre configuration.

###### Utilisation avec example.js
Le fichier d'exemple, example.js, montre comment utiliser la bibliothèque. Pour exécuter cet exemple :

```
npm example
``` 
ou 

```
yarn example
```

L'exécution de cette commande affichera un mot de passe emoji généré dans la console.

## Tests

Des tests ont été écrits pour s'assurer de la validité des mots de passe générés. Ces tests vérifient 
- la longueur du mot de passe généré 
- que le mot de passe contient uniquement des emojis.

Pour exécuter les tests, exécutez la commande suivante:

```
npm test
``` 
ou 

```
yarn test
```


## Roadmap

###### Extension de la liste d'emojis :
Actuellement, le générateur utilise une liste fixe d'emojis. Nous prévoyons d'étendre cette liste pour offrir plus de variété dans les mots de passe générés.
Options de configuration :

###### Introduction d'options pour personnaliser la génération des mots de passe.
Par exemple, permettre aux utilisateurs de mélanger des emojis avec des caractères alphanumériques.

###### Interface utilisateur :
Développement d'une interface utilisateur simple pour que les utilisateurs puissent générer des mots de passe sans avoir à écrire de code.
Intégration continue :

###### Amélioration des workflows GitHub Actions
 Pour automatiser davantage de tâches, comme l'exécution de tests à chaque pull request.

###### Support multilingue :

Bien que les emojis soient universels, nous envisageons d'ajouter des documentations et des interfaces dans différentes langues pour rendre le générateur accessible à un public plus large.