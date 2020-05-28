import { menuItem } from './menuItem';

export const MENUITEMS: menuItem[] = [
    { id: 1, name: 'Coffee', ingredients: {
        'Coffee': 3,
        'Decaf Coffee': 0,
        'Expresso': 0,
        'Sugar': 1,
        'Cream': 1,
        'Steamed Milk': 0,
        'Foamed Milk': 0,
        'Cocoa': 0,
        'Whipped Cream': 0
    }},
    { id: 2, name: 'Decaf Coffee', ingredients: {
        'Coffee': 0,
        'Decaf Coffee': 3,
        'Expresso': 0,
        'Sugar': 1,
        'Cream': 1,
        'Steamed Milk': 0,
        'Foamed Milk': 0,
        'Cocoa': 0,
        'Whipped Cream': 0
    }},
    { id: 3, name: 'Caffe Latte', ingredients: {
        'Coffee': 0,
        'Decaf Coffee': 0,
        'Expresso': 2,
        'Sugar': 0,
        'Cream': 0,
        'Steamed Milk': 1,
        'Foamed Milk': 0,
        'Cocoa': 0,
        'Whipped Cream': 0
    }},
    { id: 4, name: 'Caffe Americano', ingredients: {
        'Coffee': 0,
        'Decaf Coffee': 0,
        'Expresso': 3,
        'Sugar': 0,
        'Cream': 0,
        'Steamed Milk': 0,
        'Foamed Milk': 0,
        'Cocoa': 0,
        'Whipped Cream': 0
    }},
    { id: 5, name: 'Caffe Mocha', ingredients: {
        'Coffee': 0,
        'Decaf Coffee': 0,
        'Expresso': 1,
        'Sugar': 0,
        'Cream': 0,
        'Steamed Milk': 1,
        'Foamed Milk': 0,
        'Cocoa': 1,
        'Whipped Cream': 1
    }},
    { id: 6, name: 'Cappuccino', ingredients: {
        'Coffee': 0,
        'Decaf Coffee': 0,
        'Expresso': 2,
        'Sugar': 0,
        'Cream': 0,
        'Steamed Milk': 1,
        'Foamed Milk': 1,
        'Cocoa': 0,
        'Whipped Cream': 0
    }},
];