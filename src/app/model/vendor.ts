export class NewVendor {
    vendorId: number;
    vendorName: string;
    contactNo: string;
    emailId: string;

    constructor() {
        this.vendorId = 0;
        this.contactNo = '';
        this.vendorName = '';
        this.emailId = '';
    }
}

export interface INewVendor {
    vendorId: number;
    vendorName: string;
    contactNo: string;
    emailId: string; 
}
 

export interface ProductList {
    productId: number,
    productSku: string,

}

