const { getAPI ,postClientAPI } =require("../../lib/apiTest")

describe('testing getAPI function for clients', () => {
    it('should return the correct number of clients', async () => {
        const clientsArray = await getAPI("clients")
        expect(clientsArray.length).toBe(42);
    })
})

describe('testing getAPI function for products', () => {
    it('should return the correct number of products', async () => {
        const productsArray = await getAPI("products")
        expect(productsArray.length).toBe(10);
    })
})

describe('testing postClient function', () => {
    it('should return the correct response email according to mock', async () => {
        const values = {"name":"Test","email":"test@test.com","phone":"+1 (234) 654-3970","amount":"123234","country":"US"}
        const productsArray = await postClientAPI(values)
        expect(productsArray[0].email).toBe("john.doe@example.com");
    })
})

