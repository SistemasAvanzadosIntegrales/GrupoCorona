import { 
  OAUTH_CLIENT_ID, 
  OAUTH_CLIENT_SECRECT 
} from '../config/Settings'
import { 
  LOGIN_URL,
  GLOBAL_URL
} from '../config/URLs'

class Api {

  /**
   * @author
   * @description
   * @date
   */
  async login(email, password) {
    return await fetch(LOGIN_URL, {
      method:'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        grant_type: 'password',
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRECT,
        username: email,
        password: password,
        scope: '*'
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async user(auth) {
    return await fetch(GLOBAL_URL+'/user', {
      method:'GET',
      headers: {
        'Accept' :'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      }
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async getVehicles(auth) {
    return await fetch(GLOBAL_URL+'/vehicles', {
      method:'GET',
      headers: {
        'Accept' :'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      }
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async getCatalogs(auth) {
    return await fetch(GLOBAL_URL+'/catalogs', {
      method:'GET',
      headers: {
        'Accept' :'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      }
    })
    .then(response => response.json())
  }
}

export default new Api()