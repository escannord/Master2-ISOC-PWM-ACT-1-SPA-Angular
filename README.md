### Prérequis

Avant de commencer, assure-toi d'avoir les éléments suivants installés sur ta machine :

- **Node.js** (version 20 ou supérieure)
- **npm** (qui vient avec Node.js)
- **Angular CLI** : tu peux l'installer globalement en utilisant la commande suivante :

  ```bash
  npm install -g @angular/cli
  ```
- Éventuellement [NVM](https://github.com/coreybutler/nvm-windows/releases) (node version manager) si vous vous retrouvez avec plusieurs versions de nodeJS installées

### AppliUsers

Ce projet a été généré à l'aide de la version 19.2.4 d'Angular CLI.

### Installation des dépendances

Avant de pouvoir utiliser l'application, tu dois installer les dépendances Node nécessaires. Une fois que tu as cloné le dépôt, exécute la commande suivante dans le répertoire du projet pour installer toutes les dépendances, tout en ignorant les dossiers comme `node_modules` et `.angular` :

```bash
npm install
```

### Construction du projet

Après avoir installé les dépendances, tu dois construire ton projet pour générer les artefacts de la production. Utilise cette commande :

```bash
ng build
```

Cela compilera ton projet et stockera les artefacts de la construction dans le répertoire `dist/`. La construction de production optimise automatiquement l'application pour la performance et la vitesse.

### Serveur de développement

Une fois la construction terminée, tu peux démarrer un serveur de développement local pour voir ton application en action. Exécute la commande suivante :

```bash
ng serve
```

Une fois le serveur démarré, ouvre ton navigateur et accède à [http://localhost:4200/](http://localhost:4200/). L'application se rechargera automatiquement chaque fois que tu modifieras un fichier source.

### Création de code (Scaffolding)

Angular CLI comprend des outils puissants pour générer du code. Pour créer un nouveau composant, exécute la commande suivante :

```bash
ng generate component nom-du-composant
```

Pour une liste complète des schématiques disponibles (comme des composants, directives ou pipes), utilise cette commande :

```bash
ng generate --help
```

### Exécution des tests unitaires

Pour exécuter les tests unitaires avec le runner de tests Karma, utilise la commande suivante :

```bash
ng test
```

### Exécution des tests de bout en bout (end-to-end)

Pour effectuer des tests de bout en bout (e2e), utilise cette commande :

```bash
ng e2e
```

Angular CLI ne fournit pas de framework de tests de bout en bout par défaut. Tu peux choisir celui qui correspond à tes besoins.

### Ressources supplémentaires

Pour plus d'informations sur l'utilisation de l'Angular CLI, y compris des références détaillées des commandes, consulte la page de l'**Aperçu d'Angular CLI et la Référence des commandes**.

