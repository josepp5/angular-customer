import { HttpResponse } from "@angular/common/http";

export class Response {

    code:any;
    message:any;
    result:any;
    status:any;

    constructor(code:any,message:any,result:any,status:any){
        this.code = code;
        this.message = message;
        this.result = result;
        this.status = status;
    }

}