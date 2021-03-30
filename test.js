const paginate = require('./index.js')
const assert = require('assert')


let items = [
    {id: 1, product: "Drone A200", price: 56, inStock: true},
    {id: 2, product: "Drone A500", price: 72, inStock: false},
    {id: 3, product: "Drone A900", price: 82, inStock: true},
    {id: 4, product: "Smartphone TZ10", price: 40, inStock: true},
    {id: 5, product: "Smartphone TZ12", price: 63, inStock: true},
    {id: 6, product: "Smartphone TZ14", price: 152, inStock: false},
    {id: 7, product: "Camera XFO", price: 87, inStock: false},
    {id: 8, product: "Camera GHE", price: 20, inStock: true},
    {id: 9, product: "TV s100", price: 82, inStock: true},
    {id: 10, product: "TV s200", price: 186, inStock: true},
    {id: 11, product: "TV s300", price: 253, inStock: true},
    {id: 12, product: "TV s400", price: 325, inStock: false},
    {id: 13, product: "Computer II", price: 500, inStock: true},
    {id: 14, product: "Computer III", price: 680, inStock: true},
    {id: 15, product: "Computer IV", price: 720, inStock: true},
    {id: 16, product: "Computer V", price: 868, inStock: true},
]

describe('ChallengeTemplate', () => {

    it('When page is 1 and rowsPerNumber is 5 should return totalItems is 16 ', () => {

        let result = paginate(items, 1,5)

        assert.strictEqual(result.totalItems,16)
    })

    it('When page is 5 and rowsPerNumber is 5 should return totalItems is 16 ', () => {

        let result = paginate(items, 2,5)

        assert.strictEqual(result.totalItems,16)
    })

    it('When page is 1 and rowsPerNumber is 5 should return page is 1 and itemsPerPage is 5 ', () => {

        let result = paginate(items, 1,5)

        assert.strictEqual(result.page,1)
        assert.strictEqual(result.itemsPerPage,5)
    })

    it('When page is 5 and rowsPerNumber is 10 should return page is 1 and itemsPerPage is 5 ', () => {

        let result = paginate(items, 5,10)

        assert.strictEqual(result.page,5)
        assert.strictEqual(result.itemsPerPage,10)
    })

    it('When page is 1 and rowsPerNumber is 5 should return from 1 to 5 ', () => {

        let result = paginate(items, 1,5)

        assert.strictEqual(result.from,1)
        assert.strictEqual(result.to,5)
    })

    it('When page is 2 and rowsPerNumber is 5 should return from 6 to 10 ', () => {

        let result = paginate(items, 2,5)

        assert.strictEqual(result.from,6)
        assert.strictEqual(result.to,10)
    })

    it('When page is 3 and rowsPerNumber is 5 should return from 11 to 15 ', () => {

        let result = paginate(items, 3,5)

        assert.strictEqual(result.from,11)
        assert.strictEqual(result.to,15)
    })

    it('When page is 4 and rowsPerNumber is 5 should return from 16 to 16 ', () => {

        let result = paginate(items, 4,5)

        assert.strictEqual(result.from,16)
        assert.strictEqual(result.to,16)
    })

    it('When page is 1 and rowsPerNumber is 10 should return from 6 to 10 ', () => {

        let result = paginate(items, 1,10)

        assert.strictEqual(result.from,1)
        assert.strictEqual(result.to,10)
    })

    it('When page is 2 and rowsPerNumber is 10 should return from 10 to 16 ', () => {

        let result = paginate(items, 2,10)

        assert.strictEqual(result.from,11)
        assert.strictEqual(result.to,16)
    })

    it('When page is 1 and rowsPerNumber is 16 should return from 1 to 16 ', () => {

        let result = paginate(items, 1,16)

        assert.strictEqual(result.from,1)
        assert.strictEqual(result.to,16)
    })

    it('When page is 1 and rowsPerNumber is 5 should return the first 5 items', () => {

        let result = paginate(items, 1,5)

        assert.strictEqual(result.itemsOnPage.length,5)
        assert.strictEqual(result.itemsOnPage[0].id,1)
        assert.strictEqual(result.itemsOnPage[0].product,"Drone A200")
        assert.strictEqual(result.itemsOnPage[1].id,2)
        assert.strictEqual(result.itemsOnPage[1].product,"Drone A500")
        assert.strictEqual(result.itemsOnPage[2].id,3)
        assert.strictEqual(result.itemsOnPage[2].product,"Drone A900")
        assert.strictEqual(result.itemsOnPage[3].id,4)
        assert.strictEqual(result.itemsOnPage[3].product,"Smartphone TZ10")
        assert.strictEqual(result.itemsOnPage[4].id,5)
        assert.strictEqual(result.itemsOnPage[4].product,"Smartphone TZ12")
    })

    it('When page is 2 and rowsPerNumber is 5 should return the elements with id 6,7,8,9,10', () => {

        let result = paginate(items, 2,5)

        assert.strictEqual(result.itemsOnPage.length,5)
        assert.strictEqual(result.itemsOnPage[0].id,6)
        assert.strictEqual(result.itemsOnPage[0].product,"Smartphone TZ14")
        assert.strictEqual(result.itemsOnPage[1].id,7)
        assert.strictEqual(result.itemsOnPage[1].product,"Camera XFO")
        assert.strictEqual(result.itemsOnPage[2].id,8)
        assert.strictEqual(result.itemsOnPage[2].product,"Camera GHE")
        assert.strictEqual(result.itemsOnPage[3].id,9)
        assert.strictEqual(result.itemsOnPage[3].product,"TV s100")
        assert.strictEqual(result.itemsOnPage[4].id,10)
        assert.strictEqual(result.itemsOnPage[4].product,"TV s200")
    })



    it('When page is 1 and rowsPerNumber is 16 should return all elements (16)', () => {

        let result = paginate(items, 1,16)

        assert.strictEqual(result.itemsOnPage.length,16)
    })

    it('When page is 1 and rowsPerNumber is 5 should return prev false and next true', () => {

        let result = paginate(items, 1,5)

        assert.strictEqual(result.prev,false)
        assert.strictEqual(result.next,true)
    })

    it('When page is 2 and rowsPerNumber is 5 should return prev true and next true', () => {

        let result = paginate(items, 2,5)

        assert.strictEqual(result.prev,true)
        assert.strictEqual(result.next,true)
    })

    it('When page is 3 and rowsPerNumber is 5 should return prev true and next true', () => {

        let result = paginate(items, 3,5)

        assert.strictEqual(result.prev,true)
        assert.strictEqual(result.next,true)
    })

    it('When page is 4 and rowsPerNumber is 5 should return prev true and next true', () => {

        let result = paginate(items, 4,5)

        assert.strictEqual(result.prev,true)
        assert.strictEqual(result.next,false)
    })

    it('When page is 1 and rowsPerNumber is 16 should return prev false and next false', () => {

        let result = paginate(items, 1,16)

        assert.strictEqual(result.prev,false)
        assert.strictEqual(result.next,false)
    })


})
