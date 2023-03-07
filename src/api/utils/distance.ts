export const distanceInKm = (lat1: number = 0, lon1: number = 0, lat2: number = 0, lon2: number = 0): number => {
    const R = 6371; // radius of the Earth in km
    const degLat = toRadians(lat2 - lat1);
    const degLon = toRadians(lon2 - lon1);
    const a = Math.sin(degLat / 2) * Math.sin(degLat / 2)
        + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2))
        * Math.sin(degLon / 2) * Math.sin(degLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

const toRadians = (degrees: number): number => {
    return degrees * Math.PI / 180;
}

