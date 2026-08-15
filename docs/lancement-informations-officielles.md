# Checklist de lancement — informations officielles

Ce document recense les éléments à compléter lorsque l’entreprise Detailing Factory sera officiellement créée. Ne publier aucune donnée juridique, horaire ou commerciale non confirmée.

## 1. Informations à collecter

### Identité juridique

- Raison sociale exacte
- Nom commercial confirmé
- Forme juridique : entreprise individuelle, Sàrl, SA, etc.
- Nom et prénom du responsable
- Adresse légale complète
- Numéro postal et localité
- Pays
- Numéro IDE au format `CHE-xxx.xxx.xxx`
- Numéro de TVA, uniquement en cas d’assujettissement
- Inscription au registre du commerce et canton, si applicable
- Date officielle de début d’activité

### Coordonnées publiques

- Adresse e-mail professionnelle
- Numéro de téléphone principal
- Numéro WhatsApp principal
- Numéro WhatsApp secondaire
- URL définitive du site ou nom de domaine personnalisé
- Liens officiels vers Instagram et les autres réseaux utilisés
- Lien vers la fiche Google Business Profile

### Établissement

- Confirmation de l’adresse d’accueil des clients
- Nature exacte du partenariat avec Auto Center
- Code postal complet
- Coordonnées GPS
- Horaires par jour
- Jours de fermeture
- Zone géographique réellement couverte
- Confirmation du service à domicile ou uniquement sur place
- Moyens de paiement acceptés

### Réservation et conditions commerciales

- Moment précis où un rendez-vous devient définitif
- Politique d’annulation
- Gestion des retards
- Existence et montant éventuel d’un acompte
- Conditions de remboursement de l’acompte
- Suppléments possibles et méthode de validation
- Modalités de paiement
- Durée de validité des devis
- Procédure de réclamation
- Limites de responsabilité validées juridiquement

### Données personnelles et outils

- Identité du responsable du traitement
- Adresse de contact pour les demandes liées aux données
- Liste des données réellement collectées
- Finalité de chaque traitement
- Durée de conservation
- Prestataires utilisés : WhatsApp, hébergement, e-mail, calendrier, statistiques, paiement, etc.
- Transferts éventuels de données hors de Suisse
- Cookies ou outils de mesure d’audience utilisés
- Procédure d’accès, de correction et de suppression des données

## 2. Pages à finaliser

### Mentions légales

Fichier : `src/pages/mentions-legales.astro`

Ajouter :

- identité complète de l’exploitant ;
- forme juridique ;
- responsable de publication ;
- adresse légale ;
- e-mail et téléphone ;
- IDE, TVA et registre du commerce si applicables ;
- informations sur l’hébergement ;
- propriété intellectuelle ;
- responsabilité et liens externes ;
- date de dernière mise à jour.

Après validation :

- remplacer `robots="noindex, follow"` par l’indexation normale ;
- remettre `/mentions-legales/` dans `public/sitemap-index.xml`.

### Politique de confidentialité

Fichier : `src/pages/confidentialite.astro`

Remplacer la notice provisoire par une politique correspondant exactement aux outils réellement installés. Ajouter l’identité du responsable du traitement, les finalités, les destinataires, les durées de conservation et les droits des personnes.

Après validation :

- remplacer `robots="noindex, follow"` par l’indexation normale ;
- remettre `/confidentialite/` dans `public/sitemap-index.xml`.

### Avis clients

Fichier : `src/pages/avis.astro`

Publier uniquement des avis réels et vérifiables, avec l’autorisation nécessaire pour afficher le prénom, l’initiale ou le contenu du témoignage. Ne jamais inventer une note ou un volume d’avis.

Après réception d’avis réels :

- remplacer `robots="noindex, follow"` par l’indexation normale ;
- remettre `/avis/` dans `public/sitemap-index.xml` ;
- ajouter un lien vers la page dans la navigation ou le pied de page.

### Conditions de réservation

Fichier : `src/pages/conditions.astro`

Faire relire les conditions actuelles et ajouter les règles confirmées concernant l’annulation, les retards, les acomptes, les suppléments, le paiement et les réclamations.

### Réservation

Fichier : `src/pages/reservation.astro`

Décider si la réservation reste gérée par WhatsApp ou si un calendrier est installé. En cas de réservation en ligne, préciser clairement l’étape qui confirme le rendez-vous et envoyer une confirmation électronique.

## 3. Données centralisées à mettre à jour

Fichier principal : `src/data/site.ts`

Vérifier et compléter l’objet `business` :

- nom officiel ;
- ville et zone couverte ;
- téléphones ;
- adresse complète ;
- nature du partenariat ;
- e-mail ;
- réseaux sociaux ;
- URL Google Maps ;
- horaires ;
- code postal ;
- pays ;
- coordonnées GPS ;
- IDE et TVA si ces données sont destinées à être réutilisées dans les pages.

Conserver les informations communes dans ce fichier afin d’éviter des divergences entre la page Contact, le pied de page et les données structurées.

## 4. SEO local à activer

Fichier recommandé : `src/layouts/BaseLayout.astro` ou un composant dédié.

Ajouter un schéma JSON-LD `LocalBusiness` seulement après confirmation des données. Inclure :

- `name` ;
- `url` ;
- `image` ;
- `telephone` ;
- `email` ;
- `address` avec `streetAddress`, `postalCode`, `addressLocality` et `addressCountry` ;
- `geo` avec latitude et longitude ;
- `openingHoursSpecification` ;
- `priceRange` ;
- liens officiels dans `sameAs`.

Valider le JSON-LD avec le test des résultats enrichis de Google avant publication.

## 5. Services externes à configurer

- Acheter ou connecter le domaine définitif
- Choisir une seule version canonique du domaine
- Rediriger les autres domaines en HTTP 301
- Créer et vérifier Google Business Profile
- Vérifier le domaine dans Google Search Console
- Soumettre `/sitemap-index.xml` dans Search Console
- Configurer Bing Webmaster Tools si souhaité
- Créer l’adresse e-mail professionnelle
- Configurer les sauvegardes et accès Cloudflare
- Documenter les propriétaires des comptes et les méthodes de récupération

## 6. Vérifications avant ouverture

- Toutes les coordonnées sont cohérentes sur chaque page
- L’adresse correspond exactement à Google Business Profile
- Les horaires sont identiques sur le site, Google et les réseaux sociaux
- Aucun texte provisoire n’est visible
- Aucun faux avis ou chiffre non vérifié n’est publié
- Les tarifs et prestations ont été confirmés
- Les liens WhatsApp utilisent les bons numéros
- Les liens Maps, e-mail et réseaux fonctionnent
- Les pages légales ont été relues
- Les pages à indexer ne contiennent plus `noindex`
- Le sitemap contient uniquement les URL indexables
- Le build Astro réussit
- Lighthouse mobile est contrôlé
- Les données structurées ne produisent aucune erreur
- Une inspection d’URL est demandée dans Search Console après mise en ligne

## 7. Éléments volontairement différés actuellement

À la date de création de ce document, les éléments suivants ne sont volontairement pas publiés :

- identité juridique de l’exploitant ;
- IDE et TVA ;
- responsable de publication et responsable du traitement ;
- e-mail officiel ;
- horaires ;
- code postal et coordonnées GPS confirmés ;
- schéma `LocalBusiness` ;
- avis clients ;
- politique définitive d’annulation et d’acompte ;
- Google Business Profile et Search Console.

