import User from '../models/UserModel.js'
import dotenv from 'dotenv'
dotenv.config()

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                role: 2,
                hapus: 0
            }
        })
        return res.status(200).json({
            status: true,
            data: users
        })
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id,
                role: 2,
                hapus: 0,
            }
        })
        return res.status(200).json({
            status: true,
            data: user
        })
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (req, res) => {
    const { username, email, no_hp, nama_lengkap, jenis_kelamin, role } = req.body

    try {
        const user = await User.create({ username, email, no_hp, nama_lengkap, jenis_kelamin, role })
        return res.status(200).json({
            status: true,
            msg: 'data user berhasil ditambahkan',
            data: user
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    const { username, email, no_hp, nama_lengkap, jenis_kelamin, role } = req.body
    try {
        await User.update({ username, email, no_hp, nama_lengkap, jenis_kelamin, role }, {
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({
            status: true,
            msg: 'data user berhasil diupdate',
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.update({ hapus: 1 }, { where: { id: req.params.id } })
        return res.status(200).json({
            status: true,
            msg: 'data user berhasil dihapus',
        })
    } catch (error) {
        console.log(error);
    }
}