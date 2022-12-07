import Event from '../models/EventModel.js'
import dotenv from 'dotenv'
dotenv.config()

export const getAllEvent = async (req, res) => {
    try {
        const events = await Event.findAll({
            where: {
                hapus: 0
            }
        })
        return res.status(200).json({
            status: true,
            data: events
        })
    } catch (error) {
        console.log(error);
    }
}

export const getEventById = async (req, res) => {
    try {
        const event = await Event.findOne({
            where: {
                id: req.params.id,
                hapus: 0
            }
        })
        return res.status(200).json({
            status: true,
            data: event
        })
    } catch (error) {
        console.log(error);
    }
}

export const createEvent = async (req, res) => {
    const { nama_event, alamat_event, event_dimulai, event_selesai, rincian_event, kriteria_event } = req.body
    try {
        const event = await Event.create({ nama_event, alamat_event, event_dimulai, event_selesai, rincian_event, kriteria_event })
        return res.status(200).json({
            status: true,
            msg: 'data event berhasil ditambahkan',
            data: event
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateEvent = async (req, res) => {
    const { nama_event, alamat_event, event_dimulai, event_selesai, rincian_event, kriteria_event, status_selesai } = req.body
    try {
        await Event.update({ nama_event, alamat_event, event_dimulai, event_selesai, rincian_event, kriteria_event, status_selesai }, {
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({
            status: true,
            msg: 'data event berhasil diubah',
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteEvent = async (req, res) => {
    try {
        await Event.update({ hapus: 1 }, { where: { id: req.params.id } })
        return res.status(200).json({
            status: true,
            msg: 'data event berhasil dihapus',
        })
    } catch (error) {
        console.log(error);
    }
}