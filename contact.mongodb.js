// Checkpoint MongoDB — opérations CRUD (à exécuter dans mongosh ou le Playground MongoDB de VS Code)

// 1. Créer / utiliser la base de données "contact"
use('contact');

// 2. Créer la collection "contactlist" et insérer les documents
db.contactlist.insertMany([
  { lastName: 'Ben', firstName: 'Moris', email: 'ben@gmail.com', age: 26 },
  { lastName: 'Kefi', firstName: 'Seif', email: 'kefi@gmail.com', age: 15 },
  { lastName: 'Emilie', firstName: 'brouge', email: 'emilie.b@gmail.com', age: 40 },
  { lastName: 'Alex', firstName: 'brown', age: 4 },
  { lastName: 'Denzel', firstName: 'Washington', age: 3 },
]);

// 3. Afficher toute la liste des contacts
db.contactlist.find();

// 4. Afficher toutes les informations d'une personne grâce à son ID
//    (remplacer l'ObjectId par celui affiché à l'étape 3, ici celui de "Ben Moris")
const ben = db.contactlist.findOne({ lastName: 'Ben' });
db.contactlist.findOne({ _id: ben._id });

// 5. Afficher tous les contacts ayant un âge > 18
db.contactlist.find({ age: { $gt: 18 } });

// 6. Afficher les contacts ayant un âge > 18 ET dont le nom contient "ah"
db.contactlist.find({ age: { $gt: 18 }, lastName: { $regex: 'ah', $options: 'i' } });

// 7. Changer le prénom de "Kefi Seif" en "Kefi Anis"
db.contactlist.updateOne({ lastName: 'Kefi', firstName: 'Seif' }, { $set: { firstName: 'Anis' } });

// 8. Supprimer les contacts âgés de moins de 5 ans
db.contactlist.deleteMany({ age: { $lt: 5 } });

// 9. Afficher toute la liste des contacts
db.contactlist.find();
