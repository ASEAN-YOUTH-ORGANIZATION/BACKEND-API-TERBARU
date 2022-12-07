import { check } from 'express-validator'
import User from '../models/UserModel.js'
const UserValidation = [
    check('username', 'username harus diisi')
        .notEmpty().trim()
        .isAlphanumeric().withMessage('username harus berupa karakter dan angka')
        .custom(async username => {
            const existingUsername = await User.findAll({ where: { username: username.toLowerCase(), hapus: 0 } })
            if (existingUsername.length > 1) throw new Error('username telah digunakan')
        }),
    check('email', 'email harus diisi')
        .notEmpty()
        .trim()
        .isEmail().withMessage('format email tidak valid').normalizeEmail()
        .custom(async email => {
            const existingEmail = await User.findAll({ where: { email: email.toLowerCase(), hapus: 0 } })
            if (existingEmail.length > 1) throw new Error('email telah digunakan')
        }),
    check('no_hp', 'no handphone harus diisi')
        .notEmpty()
        .trim(),
    check('nama_lengkap', 'nama lengkap harus diisi')
        .notEmpty()
        .trim(),
    check('jenis_kelamin', 'jenis_kelamin harus diisi')
        .notEmpty()
        .trim(),
    check('role', 'role harus diisi')
        .notEmpty()
        .trim(),
]

export default UserValidation