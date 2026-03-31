# Portfolio - Administrateur Système & Réseau

Un portfolio professionnel moderne et responsif conçu pour les administrateurs système et réseau en début de carrière.

## 📋 Contenu du Portfolio

### Sections principales
1. **Accueil** - Présentation dynamique avec call-to-action
2. **Compétences** - 6 domaines clés avec badges technologiques
   - Systèmes d'exploitation
   - Réseaux & Protocoles
   - Virtualisation
   - Cybersécurité
   - Outils & Services
   - Bases de données

3. **Projets** - 6 projets d'apprentissage détaillés
   - Infrastructure virtuelle
   - Configuration réseau
   - Audit de sécurité
   - Monitoring & alertes
   - Automatisation
   - Lab d'apprentissage

4. **Formation** - Timeline de cursus et certifications
5. **Contact** - Formulaire et informations de contact

## 🚀 Installation & Utilisation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Aucune serveur n'est nécessaire pour consulter le portfolio

### Ouverture
1. Naviguez vers le dossier `Portfolio_Admin_Reseau`
2. Double-cliquez sur `index.html` ou ouvrez-le avec votre navigateur
3. C'est prêt ! 🎉

### Serveur local (optionnel pour tester les formulaires)
Si vous voulez tester le formulaire de contact avec un backend :

**Avec Python :**
```bash
python -m http.server 8000
```

**Avec Node.js :**
```bash
npx http-server
```

Puis accédez à `http://localhost:8000`

## ✏️ Personnalisation

### 1. Modifier les informations de contact
Ouvrez `index.html` et trouvez la section **Contact** :

```html
<!-- Remplacez par vos informations -->
<p><a href="mailto:votre.email@example.com">votre.email@example.com</a></p>
<p><a href="tel:+33612345678">+33 6 12 34 56 78</a></p>
<p>France</p>
```

### 2. Ajouter vos liens sociaux
Section **Contact** :

```html
<a href="https://linkedin.com/in/votreprofil" target="_blank">LinkedIn</a>
<a href="https://github.com/votreusername" target="_blank">GitHub</a>
<a href="https://twitter.com/votreusername" target="_blank">Twitter</a>
```

### 3. Modifier vos compétences
Dans la section **Compétences**, remplacez les tags :

```html
<span class="tag">Votre compétence</span>
```

### 4. Ajouter vos projets
Dupliquez une carte de projet et adaptez le contenu :

```html
<div class="projet-card">
    <div class="projet-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Titre de votre projet</h3>
    <p class="projet-description">Description détaillée</p>
    <div class="projet-tags">
        <span class="tag-small">Technologie 1</span>
        <span class="tag-small">Technologie 2</span>
    </div>
</div>
```

### 5. Mettre à jour la formation
Modifiez la timeline dans la section **Formation** avec vos cursus et certifications réels.

### 6. Changer les couleurs
Ouvrez `css/style.css` et modifiez les variables au début :

```css
:root {
    --primary-color: #0f3460;      /* Couleur principale */
    --secondary-color: #16213e;    /* Couleur secondaire */
    --accent-color: #e94560;       /* Couleur d'accentuation */
    --light-bg: #f5f6fa;           /* Arrière-plan clair */
}
```

## 🎨 Couleurs actuelles

- **Primaire** : Bleu foncé (#0f3460)
- **Secondaire** : Bleu très foncé (#16213e)
- **Accent** : Rose/Rouge (#e94560)

Vous pouvez générer un schéma de couleurs sur [Coolors.co](https://coolors.co)

## 🔧 Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Styles responsifs
- **JavaScript (Vanilla)** - Interactivité
- **Font Awesome** - Icônes
- **Responsive Design** - Adapté mobile/tablette/desktop

## 📱 Responsive

Le portfolio s'adapte automatiquement à :
- **Desktop** (1200px+) - Layout complet avec 2 colonnes
- **Tablette** (768px - 1199px) - Layout optimisé
- **Mobile** (< 768px) - Menu hamburger, layout en colonne

## 🎯 Conseils pour l'utilisation

### Avant de montrer à un employeur :
1. **Complétez toutes les sections** avec vos vraies données
2. **Ajoutez des projets concrets** que vous avez réalisés (même en cours)
3. **Listez toutes vos compétences certifiées** ou en cours d'apprentissage
4. **Prenez des captures d'écran** de vos projets pour ajouter des images
5. **Tester le formulaire** en l'intégrant à un service (FormSubmit, Netlify Forms, etc.)
6. **Hébergez-le** sur GitHub Pages, Netlify ou Vercel (gratuit !)

### Intégration du formulaire de contact

**Option 1 : FormSubmit (gratuit)**
```html
<form action="https://formsubmit.co/votre.email@example.com" method="POST">
    <!-- votre formulaire -->
</form>
```

**Option 2 : Netlify Forms**
- Déployez sur Netlify
- Ajoutez `netlify` à la balise form

## 📚 Ressources pour améliorer

- **Icônes** : [Font Awesome](https://fontawesome.com)
- **Couleurs** : [Coolors.co](https://coolors.co)
- **Polices** : [Google Fonts](https://fonts.google.com)
- **Hébergement gratuit** : [GitHub Pages](https://pages.github.com), [Netlify](https://netlify.com), [Vercel](https://vercel.com)

## 🚀 Déploiement

### GitHub Pages (recommandé)
1. Créez un repo GitHub
2. Poussez les fichiers
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main`
5. Votre portfolio sera en ligne !

### Netlify
1. Visitez [netlify.com](https://netlify.com)
2. Connectez votre GitHub repo
3. Le déploiement est automatique !

## 💡 Idées pour l'avenir

- [ ] Ajouter un blog technique
- [ ] Intégrer une galerie de certificats
- [ ] Ajouter des statistiques (années d'expérience, projets, certifications)
- [ ] Créer une version PDF du CV
- [ ] Ajouter des animations SVG
- [ ] Mode sombre (dark mode)
- [ ] Support multilingue (FR/EN)
- [ ] Section "Témoignages" de professeurs/superviseurs

## 📝 Notes importantes

- Mettez à jour régulièrement vos projets et compétences
- Assurez-vous que tous les liens sont valides
- Testez sur mobile avant de partager
- Gardez le portfolio léger et rapide (important pour l'UX)

## 🤝 Besoin d'aide ?

Si vous avez des questions sur la personnalisation, consultez :
- La documentation HTML : [MDN Web Docs](https://developer.mozilla.org)
- CSS Grid : [CSS-Tricks](https://css-tricks.com)
- JavaScript : [JavaScript.info](https://javascript.info)

---

**Bonne chance pour vos futurs emplois en tant qu'administrateur système et réseau ! 🚀**

Créé pour les étudiants passionnés par l'IT - 2026
