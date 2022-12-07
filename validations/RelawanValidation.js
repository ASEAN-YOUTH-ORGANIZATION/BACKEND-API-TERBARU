import { check } from 'express-validator'
const RelawanValidation = [
    check('id_user', 'nama harus diisi')
        .notEmpty()
        .trim(),
    check('id_event', 'nama event harus diisi')
        .notEmpty()
        .trim(),
    check('link_id_card', 'link ID Card harus diisi')
        .notEmpty()
        .trim(),
    check('link_cv', 'link CV harus diisi')
        .notEmpty()
        .trim(),
    check('link_health_letter', 'link Health Letter harus diisi')
        .notEmpty()
        .trim(),
    check('alasan', 'alasan harus diisi')
        .notEmpty()
        .trim(),
    check('status', 'status harus diisi')
        .notEmpty()
        .trim()
]
export default RelawanValidation