import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY || 'd7lOwbRTg8TjSw5h3FiOxCnSHjZKgjst';

const client = new MistralClient(apiKey);

// Ajoutez ici le reste de votre code pour utiliser le client
console.log('Client initialisé avec succès');
