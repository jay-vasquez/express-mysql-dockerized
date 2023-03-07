import { TreasureRequest } from "../interface/TreasureRequest";


export const treasureRequestValidator = (request: TreasureRequest) => {
    let errors: Array<any> = [];
    const { latitude, longitude, distance, prize } = request;

    if (!latitude) {
        errors.push('latitude query parameter is required/invalid');
    }

    if (!longitude) {
        errors.push('longitude query parameter is required/invalid');
    }

    if (!distance) {
        errors.push('distance query parameter is required/invalid');
    } else if (distance !== 1 && distance !== 10) {
        errors.push('Distance can only be 1 or 10');
    }

    if (prize) {
        if (prize % 1 != 0) {
            errors.push('Prize should be a whole number');
        } else if (prize < 10 || prize > 30) {
            errors.push('Prize should be between 10 to 30');
        }
    }

    if (errors.length == 0) {
        return null;
    }

    return errors;
}
