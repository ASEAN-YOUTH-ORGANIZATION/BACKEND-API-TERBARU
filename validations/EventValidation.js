import { check } from 'express-validator'
const EventValidation = [
    check('nama_event', 'nama event harus diisi')
        .notEmpty()
        .trim(),
    check('alamat_event', 'alamat event harus diisi')
        .notEmpty()
        .trim(),
    check('event_dimulai', 'tanggal event dimulai harus diisi')
        .notEmpty()
        .trim()
        .isDate().withMessage('format tanggal tidak valid'),
    check('event_selesai', 'tanggal event selesai harus diisi')
        .notEmpty()
        .trim()
        .isDate().withMessage('format tanggal tidak valid'),
    check('rincian_event', 'rincian event harus diisi')
        .notEmpty()
        .trim(),
    check('kriteria_event', 'kriteria event harus diisi')
        .notEmpty()
        .trim(),
]

export default EventValidation