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
  async getVehicle(auth, text) {
    return await fetch(GLOBAL_URL+'/vehicles/search', {
      method:'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        data: text
      })
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

  /**
   * @author
   * @description
   * @date
   */
  async updateVehicle(auth, props) {
    return await fetch(GLOBAL_URL+'/vehicles/update', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        data: props
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async getAccessorys(auth, id) {
    return await fetch(GLOBAL_URL+'/vehicles/accesorys', {
      method:'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async getDocument(auth, text, id) {
    return await fetch(GLOBAL_URL+'/vehicles/documents/search', {
      method:'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        data: text,
        id: id
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async getDocuments(auth, id) {
    return await fetch(GLOBAL_URL+'/vehicles/documents', {
      method:'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async getExpensive(auth, text, id) {
    return await fetch(GLOBAL_URL+'/vehicles/expensives/search', {
      method:'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        data: text,
        id: id
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async getExpensives(auth, id) {
    return await fetch(GLOBAL_URL+'/vehicles/expensives', {
      method:'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async getService(auth, text, id) {
    return await fetch(GLOBAL_URL+'/vehicles/services/search', {
      method:'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        data: text,
        id: id
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async getServices(auth, id) {
    return await fetch(GLOBAL_URL+'/vehicles/services', {
      method:'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async updateAccessory(auth, id, props) {
    return await fetch(GLOBAL_URL+'/vehicles/accesorys/update', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        id: id,
        data: props
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async updateService(auth, props, failures) {
    return await fetch(GLOBAL_URL+'/vehicles/services/update', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        data: props,
        failures: failures
      })
    })
    .then(response => response.json())
  }
  
  /**
   * @author
   * @description
   * @date
   */
  async destroyService(auth, id) {
    return await fetch(GLOBAL_URL+'/vehicles/services/destroy', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        id: id,
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async updateExpensive(auth, props) {
    return await fetch(GLOBAL_URL+'/vehicles/expensives/update', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        data: props,
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async destroyExpensive(auth, id) {
    return await fetch(GLOBAL_URL+'/vehicles/expensives/destroy', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        id: id,
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async destroyDocument(auth, id) {
    return await fetch(GLOBAL_URL+'/vehicles/documents/destroy', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        id: id,
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async downloadDocument(auth, id) {
    return await fetch(GLOBAL_URL+'/vehicles/documents/download', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        id: id,
      })
    })
    .then(response => response.json())
  }

  /**
   * @author
   * @description
   * @date
   */
  async updateDocument(auth, props) {
    return await fetch(GLOBAL_URL+'/vehicles/documents/update', {
      method: 'POST',
      headers: {
        'Accept' :'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ auth.access_token
      },
      body: JSON.stringify({
        data: props,
      })
    })
    .then(response => response.json())
  }
}

export default new Api()