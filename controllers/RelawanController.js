import Relawan from '../models/RelawanModel.js'
import dotenv from 'dotenv'
import User from '../models/UserModel.js'
import Event from '../models/EventModel.js'
dotenv.config()

export const getAllRelawan = async (req, res) => {
    try {
        const relawan = await Relawan.findAll({
            where: {
                hapus: 0
            }, include: [
                { model: User, as: 'user' },
                { model: Event, as: 'event' }
            ]
        })
        return res.status(200).json({
            status: true,
            data: relawan
        })
    } catch (error) {
        console.log(error);
    }
}

export const getRelawanById = async (req, res) => {
    try {
        const relawan = await Relawan.findOne({
            where: {
                id: req.params.id,
                hapus: 0,
            }
        })
        return res.status(200).json({
            status: true,
            data: relawan
        })
    } catch (error) {
        console.log(error);
    }
}

export const createRelawan = async (req, res) => {
    const { id_user, id_event, link_id_card, link_student_card, link_cv, link_health_letter, alasan, status } = req.body
    try {
        const relawan = await Relawan.create({ id_user, id_event, link_id_card, link_student_card, link_cv, link_health_letter, alasan, status })
        return res.status(200).json({
            status: true,
            msg: 'data relawan berhasil ditambahkan',
            data: relawan
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateRelawan = async (req, res) => {
    const { status } = req.body
    try {
        await Relawan.update({ status }, {
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({
            status: true,
            msg: 'data relawan berhasil diupdate',
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteRelawan = async (req, res) => {
    try {
        await Relawan.update({ hapus: 1 }, { where: { id: req.params.id } })
        return res.status(200).json({
            status: true,
            msg: 'data relawan berhasil dihapus',
        })
    } catch (error) {
        console.log(error);
    }
}

export const getAllRelawanByUser = async (req, res) => {
    try {
        const relawan = await Relawan.findAll({
            where: {
                id_user: req.params.id,
                hapus: 0
            }, include: [
                { model: User, as: 'user' },
                { model: Event, as: 'event' }
            ]
        })
        return res.status(200).json({
            status: true,
            data: relawan
        })
    } catch (error) {
        console.log(error);
    }
}