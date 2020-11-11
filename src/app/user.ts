// should contian basic entity attributes about the user

export class User{
    firstName: string;
    lastName: string;
    id: number; // later can put as guid 
    profilePic: any; // not sure about this one yet
    items: any;// has to be of type Item, do I want to save it here tho
}