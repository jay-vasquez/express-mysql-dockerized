import { Treasure, User, Amount } from "./models"
import data from "./data.json"

const dbInit = async () => {
    await Treasure.sync();
    await User.sync();
    await Amount.sync();

    data.users.forEach(async user => {
        await User.findOrCreate({
            where: {
                id: user.id,
                name: user.name,
                age: user.age,
                email: user.email,
                password: user.password,
            }
        });
    });

    data.treasures.forEach(async treasure => {
        await Treasure.findOrCreate({
            where: {
                id: treasure.id,
                name: treasure.Name,
                longitude: treasure.longtitude,
                latitude: treasure.latitude,
            }
        })
    });

    data.money_values.forEach(async money => {
        await Amount.findOrCreate({
            where: {
                treasure_id: money.treasure_id,
                amount: money.amt,
            }
        });
    })
}

export default dbInit;
