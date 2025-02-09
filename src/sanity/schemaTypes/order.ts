
export default{
    name: "order",
    type: "document",
    tittle: "order",
    fields: [
        {
            name: "firstName",
            tittle: "First Name",
            type: "string",
        },
        {
            name: "lastName",
            tittle: "Last Name",
            type: "string",
        },
        {
            name: "address",
            tittle: "Address",
            type: "string",
        },
        {
            name: "city",
            tittle: "City",
            type: "string",
        },
        {
            name:"zipCode",
            tittle: "Zip Code",
            type: "string",
        },
        {
            name: "phone",
            tittle: "Phone",
            type: "string",
        },
        {
            name:"email",
            tittle: "Email",
            type: "string",
        },
        {
            name:"cartItem",
            tittle: "Cart Item",
            type: "array",
            of :[{type: 'reference', to:{type: 'car'}}],
        },
        {
            name: "total",
            tittle: "Total",
            type: "number",
        },
        {
            name: "status",
            tittle: "Order Status",
            type: "string",
            Options:{
                list: [
                    {tittle:"pending" , value:"pending"},
                    {tittle:"success" , value:"success"},
                    {tittle:"delivered", value:"delivered"},
                ],
                layout : "radio"
            },
            initialValue: "pending",
        },


    ]
}