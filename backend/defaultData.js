import Food from './models/foodItem.js';
import Category from './models/footcat.js';

import { foods, category } from './constants/foods.js';

const DefaultData = async () => {
    try {
        await Food.deleteMany({});
        await Food.insertMany(foods);

        await Category.deleteMany({});
        await Category.insertMany(category);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;