import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'


interface AmountAttributes {
    treasure_id: number;
    amount: number;
}
export interface TreasureInput extends Optional<AmountAttributes, 'treasure_id'> { }

class Amount extends Model<AmountAttributes, TreasureInput> implements AmountAttributes {
    public treasure_id!: number
    public amount!: number
}

Amount.init({
    treasure_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    timestamps: false
})

export default Amount;