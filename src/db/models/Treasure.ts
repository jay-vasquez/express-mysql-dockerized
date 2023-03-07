import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import Amount from './Amount';

interface TreasureAttributes {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}
export interface TreasureInput extends Optional<TreasureAttributes, 'id'> { }

class Treasure extends Model<TreasureAttributes, TreasureInput> implements TreasureAttributes {
    public id!: number
    public latitude!: number
    public longitude!: number
    public name!: string
    public 'Amounts.amount'!: number
}

Treasure.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    longitude: {
        type: DataTypes.FLOAT(16, 12),
        allowNull: false
    },
    latitude: {
        type: DataTypes.FLOAT(16, 12),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    timestamps: false
})

Treasure.hasMany(Amount, {
    foreignKey: "treasure_id",
});

export default Treasure;