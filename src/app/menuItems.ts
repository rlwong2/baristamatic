import { menuItem } from './menuItem';

export const MENUITEMS: menuItem[] = [
    { id: 1, name: 'Coffee', ingredients: {
        'Coffee': 3,
        'Decaf Coffee': 0,
        'Expresso': 0,
        'Sugar': 1,
        'Cream': 1,
        'Steamed Milk': 0
    }},
    { id: 2, name: 'Decaf Coffee', ingredients: {
        'Coffee': 0,
        'Decaf Coffee': 3,
        'Expresso': 0,
        'Sugar': 1,
        'Cream': 1,
        'Steamed Milk': 0
    }},
    { id: 3, name: 'Caffe Latte', ingredients: {
        'Coffee': 0,
        'Decaf Coffee': 3,
        'Expresso': 0,
        'Sugar': 1,
        'Cream': 1,
        'Steamed Milk': 0
    }},
];