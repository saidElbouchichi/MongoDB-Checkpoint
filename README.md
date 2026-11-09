# Checkpoint MongoDB — Opérations CRUD

Base de données **`contact`**, collection **`contactlist`**. Toutes les requêtes sont dans [`contact.mongodb.js`](contact.mongodb.js).

| # | Opération | Requête | Résultat attendu |
|---|-----------|---------|------------------|
| 1 | Insérer les 5 contacts | `db.contactlist.insertMany([...])` | `insertedCount: 5` |
| 2 | Afficher tous les contacts | `db.contactlist.find()` | Ben Moris, Kefi Seif, Emilie brouge, Alex brown, Denzel Washington |
| 3 | Une personne par son ID | `db.contactlist.findOne({ _id: ObjectId("...") })` | le document de Ben Moris |
| 4 | Âge > 18 | `db.contactlist.find({ age: { $gt: 18 } })` | Ben Moris (26), Emilie brouge (40) |
| 5 | Âge > 18 et nom contenant « ah » | `db.contactlist.find({ age: { $gt: 18 }, lastName: { $regex: "ah", $options: "i" } })` | aucun document (aucun nom ne contient « ah ») |
| 6 | Kefi Seif → Kefi Anis | `db.contactlist.updateOne({ lastName: "Kefi", firstName: "Seif" }, { $set: { firstName: "Anis" } })` | `matchedCount: 1, modifiedCount: 1` |
| 7 | Supprimer les moins de 5 ans | `db.contactlist.deleteMany({ age: { $lt: 5 } })` | `deletedCount: 2` (Alex, Denzel) |
| 8 | Afficher tous les contacts | `db.contactlist.find()` | Ben Moris (26), Kefi Anis (15), Emilie brouge (40) |

## Captures d'écran

Les captures de l'exécution dans `mongosh` / MongoDB Compass seront ajoutées dans le dossier `screenshots/`.

## Exécuter

```bash
mongosh "<votre chaîne de connexion>" --file contact.mongodb.js
```
