import {BaseModel} from './BaseModel'

export class User extends BaseModel{


    constructor() {
        super({
            table :'users'
        });
    }

}