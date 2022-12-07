import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const Event = db.define('events', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nama_event: DataTypes.STRING,
    alamat_event: DataTypes.STRING,
    event_dimulai: DataTypes.DATEONLY,
    event_selesai: DataTypes.DATEONLY,
    rincian_event: DataTypes.TEXT('long'),
    kriteria_event: DataTypes.TEXT('long'),
    thumbnail: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull   : true
    },
    status_selesai: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
    },
    hapus: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
    },
}, {
    freezeTableName: true
})

export default Event