# Guide de Personnalisation - Portfolio Administrateur Système & Réseau

## 📌 Points clés pour adapter le portfolio à VOTRE profil

### 1️⃣ Section "Accueil" - Votre présentation unique

**À faire :**
- Remplacez le texte générique par une phrase d'accroche personnelle
- Montrez votre passion pour votre domaine
- Adaptez le titre selon votre niveau d'études

**Exemples de textes :**

```
Version 1 (BTS/Diplôme Bac+2) :
"Étudiant en 2e année spécialisé en systèmes et réseaux,
passionné par l'optimisation d'infrastructures IT sécurisées"

Version 2 (Licence) :
"Futur administrateur système avec expertise en virtualisation
et architecture réseau, prêt à relever les défis IT d'entreprise"

Version 3 (Généraliste) :
"Administrateur polyvalent maîtrisant Windows/Linux,
réseautique et cybersécurité appliquée"
```

---

### 2️⃣ Section "Compétences" - Hiérarchisez vos savoirs

**Classement proposé :**
1. **Compétences fortes** (pratiquées régulièrement)
2. **Compétences intermédiaires** (en cours d'apprentissage)
3. **Compétences en développement** (objectifs futurs)

**Exemple pour un étudiant :**

```
FORT :
- Windows Server (pratique en TP)
- Linux Ubuntu (mini-projets)
- Active Directory (travaux dirigés)
- Réseautique basique (cours + TP)

INTERMÉDIAIRE :
- VMware/Virtualisation (cours en cours)
- Scripting PowerShell (apprentissage)
- Monitoring (premiers projets)

EN DÉVELOPPEMENT :
- Kubernetes (intérêt)
- Ansible (étude en parallèle)
- Cybersécurité avancée (prochaine spécialité)
```

---

### 3️⃣ Section "Projets" - Montrez vos réalisations

**Types de projets à inclure :**

#### A. Projets académiques
- TPs notés
- Travaux de groupe
- Projets de fin d'année
- Cas d'étude réalisés

#### B. Projets personnels
- Lab d'apprentissage chez vous
- Démonstrations techniques
- Environnements de test

#### C. Expériences professionnelles
- Stage en entreprise
- Alternance
- Contrats courts

**Template pour décrire un projet :**

```
Titre : [Nom du projet]
Description courte : [Problème résolu en 2-3 lignes]
Technologies : [Outils utilisés]
Résultat : [Ce que ça a apporté]

Exemple concret :
Titre : Déploiement d'une infrastructure 3-nodes virtuelle

Description : Création d'un cluster de 3 serveurs virtuels 
(Windows Server + 2 Linux) avec services réseau centralisés, 
gestion des utilisateurs par Active Directory et sauvegarde 
automatisée quotidienne.

Technologies : VMware, Windows Server 2019, Ubuntu 20.04, 
Bash scripting

Résultat : Maîtrise de la virtualisation, comprendre les 
architectures multi-serveurs, mise en place de politiques 
de sécurité basiques.
```

---

### 4️⃣ Section "Formation" - Votre parcours académique

**Actualités importantes :**

```
✅ À AJOUTER :
- Votre école/université
- Année en cours (Bac+2, L3, M1, etc.)
- Spécialisations
- Clubs/associations IT
- Certifications en cours

❌ À ÉVITER :
- Lister tous vos anciens bulletins
- Mettre des notes détaillées
- Dater en 2026 pour quelque chose en 2024
```

**Exemple réaliste :**

```
FORMATION ACTIVE :
- BTS SIO option SISR (2024-2026)
  École : [Votre établissement]
  Spécialité : Architecture infrastructure & sécurité

CERTIFICATIONS PLANIFIÉES :
- CompTIA Network+ (juin 2026)
- CompTIA Security+ (décembre 2026)
- Microsoft Azure Fundamentals (2026)

CERTIFICATIONS OPTENUES :
- CISCO CCNA (éventuellement)
```

---

### 5️⃣ Section "Contact" - Données à jour

**À personnaliser ABSOLUMENT :**

```html
<!-- Remplacez ceci -->
<p><a href="mailto:votre.email@example.com">votre.email@example.com</a></p>

<!-- Par votre vrai email professionnel -->
<p><a href="mailto:florent.pennecot@gmail.com">florent.pennecot@gmail.com</a></p>
```

**Conseils pour les coordonnées :**
- Email : Utilisez une adresse sérieuse (prénom.nom@...)
- Téléphone : Optionnel (mais appréciable)
- Réseaux sociaux : LinkedIn et GitHub prioritaires

---

## 🔗 Ajouter vos vrais liens sociaux

### LinkedIn (ESSENTIEL)
```html
<a href="https://linkedin.com/in/florent-pennecot" target="_blank" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
```
👉 Créez un profil LinkedIn professionnel si vous n'en avez pas

### GitHub (TRÈS IMPORTANT pour l'IT)
```html
<a href="https://github.com/votreusername" target="_blank" class="social-link">
    <i class="fab fa-github"></i>
</a>
```
👉 Mettez-y vos scripts, configurations, et démonstrations

### Twitter/X (Optionnel mais bien vu)
```html
<a href="https://twitter.com/votreusername" target="_blank" class="social-link">
    <i class="fab fa-twitter"></i>
</a>
```

---

## 🎨 Adapter le design à votre style

### Option 1 : Garder le design actuel (Professionnel & Moderne)
Les couleurs actuelles conviennent bien pour l'IT

### Option 2 : Passer à des couleurs plus techniques
```css
:root {
    --primary-color: #1a1a2e;      /* Noir profond */
    --secondary-color: #16213e;    /* Bleu très foncé */
    --accent-color: #00d4ff;       /* Cyan technologique */
}
```

### Option 3 : Style cybersécurité
```css
:root {
    --primary-color: #0d0d0d;      /* Noir */
    --secondary-color: #1a1a1a;    /* Gris noir */
    --accent-color: #ff0000;       /* Rouge alerte */
}
```

### Option 4 : Style tech moderne
```css
:root {
    --primary-color: #06092b;      /* Bleu nuit */
    --secondary-color: #0f3b6e;    /* Bleu profond */
    --accent-color: #00ff88;       /* Vert néon */
}
```

---

## 📸 Ajouter des images/visuels

**Où créer des images :**

### Screenshots de vos projets
1. Prenez des captures d'écran de vmware/Hyper-V
2. Pixelisez les données sensibles
3. Créez des montages avant/après

**Où les mettre :**
```html
<!-- Créez un dossier assets/images/ -->
<!-- Puis dans vos projets -->
<img src="assets/images/mon-projet-1.jpg" alt="Projet infrastructure">
```

### Diagrammes techniques
```html
<!-- Utilisez des outils gratuits -->
- Draw.io (gratuit, en ligne)
- Lucidchart (version gratuite)
- Excalidraw (simple et rapide)

Exemple : schéma réseau de votre lab
```

### Certifications/Badges
```html
<!-- Section à ajouter dans Formation -->
<div class="certifications-badges">
    <img src="assets/certifications/cisco-ccna.png" alt="CCNA Badge">
    <img src="assets/certifications/microsoft-az900.png" alt="Azure Badge">
</div>
```

---

## ✅ Checklist avant de partager

- [ ] **Informations de contact mises à jour**
  - Email valide ✓
  - Téléphone si possible ✓
  - LinkedIn complet ✓

- [ ] **Contenu personnalisé**
  - Prénom/nom adapté ✓
  - Projets réels listés ✓
  - Compétences honnêtes ✓
  - Formation à jour ✓

- [ ] **Liens fonctionnels**
  - LinkedIn cliquable ✓
  - GitHub rempli ✓
  - Formulaire de contact ✓
  - Pas de liens morts ✓

- [ ] **Testé sur mobile**
  - Responsive OK ✓
  - Touches cliquables ✓
  - Menu hamburger fonctionne ✓

- [ ] **Hébergé en ligne**
  - GitHub Pages ✓
  - Netlify ✓
  - Ou autre plateforme ✓

- [ ] **Relecture finale**
  - Pas de fautes ✓
  - Texte cohérent ✓
  - Design cohérent ✓

---

## 🚀 Exemple de progression

### Phase 1 : Version Basique (Finir rapidement)
- [x] Remplir sections de base
- [x] Ajouter 3-4 projets concrets
- [x] Mettre vos vrais contacts
- [x] Tester et héberger

### Phase 2 : Amélioration (Semaines suivantes)
- [ ] Ajouter des images/captures
- [ ] Enrichir les descriptions de projets
- [ ] Intégrer le formulaire de contact
- [ ] Optimiser les performances

### Phase 3 : Polissage (Avant candidatures)
- [ ] Ajouter témoignages (si possible)
- [ ] Créer un CV téléchargeable
- [ ] Ajouter un blog (optionnel)
- [ ] Améliorer le SEO

---

## 📧 Pour les formulaires de contact

**Option simple (email direct) :**
```html
<a href="mailto:votre.email@example.com?subject=Candidature&body=Votre%20message">
    Contactez-moi
</a>
```

**Option moderne (FormSubmit - gratuit) :**
```html
<form action="https://formsubmit.co/votre.email@example.com" method="POST">
    <!-- Votre formulaire -->
</form>
```

**Installation FormSubmit :**
1. Modifiez votre action `form`
2. Soumettez le formulaire une fois (confirmation email)
3. C'est prêt !

---

## 💪 Impactez vos futurs employeurs

### Top 3 des points essentiels :
1. **Compétences honnêtes** - Mettez ce que vous maîtrisez vraiment
2. **Projets concrets** - Même s'ils sont petits, montrez que VOUS avez créé
3. **Présence en ligne** - LinkedIn, GitHub, portfolio = crédibilité

### Questions que vont se poser les RH :
- "Peut-il/elle gérer une vraie infrastructure ?" → Montrez vos projets
- "Est-il/elle sérieux(se) ?" → Portfolio professionnel et liens valides
- "A-t-il/elle les compétences listées ?" → Soyez honnête, montrez des preuves

---

## 🎯 Phrase d'accroche parfaite

Adaptez cette formule :

```
"[Niveau] en [spécialité], je maîtrise [compétence 1], [compétence 2] 
et suis passionné(e) par [domaine]. 
À travers mes projets, j'ai développé une expertise en [domaine technique].
Cherchant à approfondir mes connaissances en [objectif], 
je suis ouvert(e) à des opportunités de stage/alternance/CDI."
```

**Exemple concret :**
```
"Étudiant BTS SIO en 2e année, je maîtrise Windows Server, Linux, 
la virtualisation VMware et la gestion de réseaux sécurisés.
À travers plusieurs projets d'infrastructure, j'ai développé une expertise 
en déploiement de serveurs et en architecture réseau.
Cherchant à approfondir mes connaissances en cybersécurité, 
je suis ouvert à des stages en tant qu'administrateur système."
```

---

**Bon courage et bravo d'avoir commencé un portfolio professionnel ! 🚀**

Vous êtes de loin en avance sur la majorité des étudiants en IT.
