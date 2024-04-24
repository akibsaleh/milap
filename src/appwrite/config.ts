import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

interface Business {
  id?: string;
  name: string;
  address: string;
  description: string;
  contact: string[];
  status: string;
  userId?: string;
  featuredImage: string;
}

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Business CRUD Operation.

  async createBusiness({ name, address, description, contact, status, userId, featuredImage }: Business) {
    const id: string = ID.unique();
    try {
      return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionID, id, { name, description, address, contact, status, userId, featuredImage });
    } catch (error) {
      console.log('Appwrite service :: createPost :: error', error);
    }
  }

  async updateBusiness({ name, id, address, contact, description, featuredImage, status }: Business) {
    const businessId = id as string;
    try {
      return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionID, businessId, { name, address, contact, description, featuredImage, status });
    } catch (error) {
      console.log('Appwrite service :: updatePost :: error', error);
    }
  }

  async deleteBusiness(id: string) {
    try {
      await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionID, id);
      return true;
    } catch (error) {
      console.log('Appwrite service :: deletePost :: error', error);
      return false;
    }
  }

  async getBusiness(id: string) {
    try {
      return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionID, id);
    } catch (error) {
      console.log('Appwrite service :: deletePost :: error', error);
    }
  }

  async getPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionID, queries);
    } catch (error) {
      console.log('Appwrite service :: getPosts :: error', error);
      return false;
    }
  }

  // file upload services

  async uploadFile(file: File) {
    try {
      return await this.bucket.createFile(conf.appwriteBucketID, ID.unique(), file);
    } catch (error) {
      console.log('Appwrite storage service :: uploadFile :: error', error);
      return false;
    }
  }

  async deleteFile(fileId: string) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketID, fileId);
    } catch (error) {
      console.log('Appwrite storage service :: deleteFile :: error', error);
      return false;
    }
  }

  getFilePreview(fileId: string) {
    return this.bucket.getFilePreview(conf.appwriteBucketID, fileId);
  }
}

const service = new Service();

export default service;
