import axios from 'axios';

axios.defaults.baseURL = 'https://valorant-api.com/v1/agents';
export class Api {
  static async getAllAgents() {
    return (await axios.get('?language=pt-BR&isPlayableCharacter=true')).data;
  }
}
