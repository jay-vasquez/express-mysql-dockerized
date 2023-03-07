
import { FindOptions, Op } from "sequelize";
import { Amount, Treasure } from "../../db/models";
import { TreasureRequest } from "../interface/TreasureRequest";
import { distanceInKm } from "../utils/distance";

const findTreasure = async (request: TreasureRequest) => {
    const { latitude, longitude, distance = 0, prize } = request;
    const query: FindOptions = {
        raw: true,
    }
    let results: any = [];

    if (prize) {
        query.include = {
            model: Amount,
            where: {
                amount: {[Op.gte]: prize},
            },
        };
    }

    let hits = await Treasure.findAll(query);

    if (hits.length > 0) {
        hits = hits.filter(hit => distanceInKm(latitude, longitude, hit.latitude, hit.longitude) < distance)

        if (prize) {
            hits = hits.reduce((acc: any, curr: any) => {
                const existingItem: any = acc.find((item: any) => item['id'] === curr.id);
                if (existingItem) {
                    if (curr['Amounts.amount'] < existingItem['Amounts.amount']) {
                        existingItem['Amounts.amount'] = curr['Amounts.amount'];
                    }
                } else {
                    acc.push(curr);
                }
                return acc;
            }, [] as []);
        }
    }

    hits.forEach(hit => {
        results.push({
            name: hit.name,
            location: {
                longitude: hit.longitude,
                latitude: hit.latitude,
            },
            amount: hit['Amounts.amount']
        })
    })

    return results;
}

export default findTreasure;