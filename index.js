const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  realms: {
    realmInvite: 'https://realms.gg/REALM_CODE_HERE', 
  }
});

client.on('start_game', (packet) => {
  const worldSeed = packet.seed;
  console.log(`World Seed: ${worldSeed}`);
  
  
  client.disconnect('Finished retrieving the seed.');
});


client.on('disconnect', (packet) => {
  console.log('Bot has left the realm.', packet);
});


client.on('error', (error) => {
  console.error('An error occurred:', error);
});
