export default interface Product{
    price: any;
    _id: string;
    name: string;
    _type: "car";
    image? :{
        asset : {
            _ref : string;
            _type: "image";

        }
    };
    brand: string;
    type : String;
    fuelCapacity: string;
    transmission : string;
    seatingCapacity: string;
    pricePerDay: string;
    slug : {
        _type : "slug";
        current : string;
        
    },
    inventery:number
     
}