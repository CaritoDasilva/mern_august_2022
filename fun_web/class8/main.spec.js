const { soldTickets, getAvailableSpots } = require('./main');

describe('Test de venta de tickets de cine', () => {

    test('Dado una cantidad de dinero y un nombre de película disponible retorna verdadero', () => {
        const resultSale = soldTickets(10000, 'Tiburon');
        expect(resultSale).toBeTruthy();
    })

    test('Dada una cantidad de dinero insuficiente y un nombre de película disponible retorna falso', () => {
        const resultSale = soldTickets(8000, 'Tiburon');
        expect(resultSale).toBeFalsy();
    })

    test('Dada una cantidad de dinero suficiente y una película no disponible deberá retornar falso', () => {
        const resultSale = soldTickets(20000, 'Duro de matar');
        expect(resultSale).toBeFalsy();
    });

    test('Dada una cantidad de dinero insuficiente y una película no disponible deberá retornar falso', () => {
        const resultSale = soldTickets(5000, 'Duro de matar');
        expect(resultSale).toBeFalsy();
    });    
})

describe('Test de venta de asientos', () => {
    test('Dado un asiento disponible retorna verdadero', () => {
        const resultSeatSale = getAvailableSpots([0,0]);
        expect(resultSeatSale).toBeTruthy();
    });
    test('Dado un asiento no disponible retorna verdadero', () => {
        const resultSeatSale = getAvailableSpots([0,2]);
        expect(resultSeatSale).toBeFalsy();
    });

});