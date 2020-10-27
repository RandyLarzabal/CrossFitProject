const errorMessage = {
    wrongID: 'ID incorrecte ou inexistant',
    notFound: 'Aucun résultat trouvé',
    wrongLogin: 'Identifiant invalide',
    invalidPassword: 'Mot de passe invalide',
    accessDenied: 'Accès non autorisé',
    invalidToken: 'Token invalide',
    loginAlreadyExists: 'Identifiant déja utilisé',
    missingLoginParameter: 'Identifiant ou mot de passe manquant',
    accountConfirmNeeded: 'Confirmation du compte nécessaire',
    badValue: 'Mauvaise valeur'
        
};

const successMessage = {
    loginIn: 'Connexion réussi'
};

exports.errorMessage = errorMessage;
exports.successMessage = successMessage;