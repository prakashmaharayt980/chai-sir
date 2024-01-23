import conf from "../conf/conf";
import {Account,Client,ID} from 'appwrite'

export class AuthSerivce{
client=new Client()
Account;

constructor(){
    this.client
             .setEndpoint(conf.appwriteUrl)
             .setProject(conf.appwriteProjectId)
    this.account=new Account(this.client)
}

async createAccount({email,password,name}){
    try {
       const userAccount= await this.account.create(ID.unique(),email,password,name)
        if(userAccount){
          return this.login(email,password)
        }else{
            return userAccount
        }
    } catch (error) {
        throw error
    }
}

async login({email,password}){
    try {
      return  await this.account.CreateEmailSession({email,password})
    } catch (error) {
        throw error
    }
}

async getCurrentUser(){
    try {
        return await this.account.get()
    } catch (error) {
        throw error
    }
}

async logout(){
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        throw error
    }
}

}
const authserivce=new AuthSerivce();
export default authserivce;