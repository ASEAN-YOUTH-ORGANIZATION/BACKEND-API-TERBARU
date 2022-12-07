import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const User = db.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    password: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    role: DataTypes.INTEGER,
    refresh_token: DataTypes.TEXT,
    hapus: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
    },
}, {
    freezeTableName: true
})

export default User