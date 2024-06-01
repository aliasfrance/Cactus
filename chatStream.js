import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY || 'd7lOwbRTg8TjSw5h3FiOxCnSHjZKgjst';

const client = new MistralClient(apiKey);



const chatResponse = await client.chat({
    model: 'mistral-tiny',
    messages: [{role: 'system', content: 'Donne une liste des questions à se poser pour répondre à la question suivante en posant des questions fermés en premier et en suite des questions ouvertes. Les questions de la liste ne devrons pas être des questions de rhétoriques, de clarification, de sondage et ne doivent pas être des questions pièges ou hypothétiques. Si deux questions sont trop proche ou on le même sens pose en une seule  pour les remplacer dans ta liste. Tu placera la phrase "Répondez par oui ou par non aux questions suivantes" avant la liste de question fermé et tu placeras la phrase "Recopiez une de ces questions pour aller plus loin ou taper le mot synthèse" avant la liste de question ouverte. Voici la question :'}],
  });
  
  console.log('Chat:', chatResponse.choices[0].message.content);

  