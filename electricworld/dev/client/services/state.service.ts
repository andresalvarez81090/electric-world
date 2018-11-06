import {Injectable} from '@angular/core';

@Injectable()
export class StateService {

    public user: any = false;

    public currentGroup: any;


    isAuthorized(){
        return this.user !== false;
    }

}
