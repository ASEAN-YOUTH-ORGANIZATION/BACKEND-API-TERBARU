import { Sequelize } from "sequelize"
import db from "../config/Database.js"
import User from "./UserModel.js"
import Event from "./EventModel.js"
const { DataTypes } = Sequelize

const Relawan = db.define('relawan', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_user: DataTypes.UUID,
    id_event: DataTypes.UUID,
    link_id_card: DataTypes.STRING,
    link_student_card: DataTypes.STRING,
    link_cv: DataTypes.STRING,
    link_health_letter: DataTypes.STRING,
    alasan: DataTypes.TEXT,
    status: DataTypes.STRING,
    hapus: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
    },
}, {
    freezeTableName: true
})

Relawan.belongsTo(User, {
    as: 'user',
    foreignKey: 'id_user',
    targetKey: 'id'
})
Relawan.belongsTo(Event, {
    as: 'event',
    foreignKey: 'id_event',
    targetKey: 'id'
})

export default Relawan