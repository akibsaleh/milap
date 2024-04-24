import { Account, Client, ID } from 'appwrite';
import conf from '../conf/conf';

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount(email: string, password: string) {
    const userId = ID.unique();
    try {
      const res = await this.account.create(userId, email, password);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
    return null;
  }

  async login(email: string, password: string) {
    try {
      const res = await this.account.createEmailPasswordSession(email, password);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }

    return null;
  }

  async logout() {
    try {
      const res = await this.account.deleteSessions();
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCurrentUSer() {
    try {
      const res = await this.account.get();
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updatePassword(password: string) {
    try {
      const res = await this.account.updatePassword(password);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createPasswordRecovery(email: string, redirectUrl: string) {
    try {
      const res = await this.account.createRecovery(email, redirectUrl);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updatePasswordRecovery(userId: string, secret: string, password: string) {
    try {
      const res = await this.account.updateRecovery(userId, secret, password);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const authService = new AuthService();
export default AuthService;
