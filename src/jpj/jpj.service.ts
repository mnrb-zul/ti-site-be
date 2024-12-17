import { Injectable } from '@nestjs/common';

@Injectable()
export class JpjService {
    //use data sent by user to run sql command and send to helper function
    getStatus():string{
        return "status"
    }

    //use data sent by user to run sql command and send to helper function
    getUsed():string{
        return "used"
    }

    genExcel():string{
        
    }
}
