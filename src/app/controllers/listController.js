const Student = require('../models/student')
const Teacher = require('../models/teacher')
const Tcc = require('../models/tcc')

module.exports = {
  async index(req, res) {
    try {
      if (!req.userId) {
        console.log('não tem id')
      }
      let id = req.userId
      let student
      let teacher

      if (
        !(student = await Student.findById(id)) &&
        !(teacher = await Teacher.findById(id))
      ) {
        return res.status(202).json({
          failed: 'Desculpe, dados não encontrados',
        })
      }

      if (student) {
        const {
          firstName,
          lastName,
          email,
          about,
          interests,
          modality,
          pretension,
          progress,
          role,
          theme,
        } = student
        return res.status(200).json({
          user: {
            firstName,
            lastName,
            email,
            about,
            interests,
            modality,
            pretension,
            progress,
            role,
            theme,
          },
        })
      } else if (teacher) {
        return res.status(200).json({ user: teacher })
      }
    } catch (error) {
      1
      console.log(error)
      return res.status(400).send({
        error: 'Sorry, there was an error trying to perform this operation.',
      })
    }
  },

  async getTccsAll(req, res) {
    let tccs = await Tcc.find()
    return res.json({ tccs })
  },

  async getTccsArea(req, res) {
    const { interesse } = req.query
    let tccs = await Tcc.find({ areas: interesse })

    return res.json({ tccs })
  },

  async getTeachersArea(req, res) {
    const { interesse } = req.query
    let teachers = await Teacher.find({ researchAreas: interesse })

    return res.json({ teachers })
  },

  async getTeachersAll(req, res) {
    const teachers = await Teacher.find()

    return res.json({ teachers })
  },

  async getTeacherId(req, res) {
    const { id } = req.query
    const teacher = await Teacher.find({ _id: id})

    return res.json({ teacher })
  },

  async getTccId(req, res) {
    const { id } = req.query
    const tcc = await Tcc.find({ _id: id})

    console.log('id', id)
    return res.json({ tcc })
  },

  async getStudentId(req, res) {
    const { id } = req.query
    const student = await Student.find({ _id: id})

    return res.json({ student })
  },

  async getResultSearchTeacher(req, res) {
    const { q } = req.query

    let searchResult = [];
    let resultName = await Teacher.find({ firstName: q })
    let resultArea = await Teacher.find({ researchAreas: q }) 

    resultName.length > 0 ? searchResult = resultName : searchResult = resultArea;

    return res.json({ searchResult })
  },

  async getResultSearchTcc(req, res) {
    const { q } = req.query
    
    let searchResult = [];
    let resultTeacher = [];

    let resultName = await Teacher.find({ firstName: q })
    if (resultName.length > 0) resultTeacher = await Tcc.find({ idTeacher: resultName[0]._id})

    let resultArea = await Tcc.find({ areas: q }) 

    resultTeacher.length > 0 ? searchResult = resultTeacher : searchResult = resultArea;

    return res.json({ searchResult })
  },

  async getUpdateDisponibilidade(req, res) {
    const { id, newAvailability } = req.query
    
    let newProf = await Teacher.findOneAndUpdate({ _id: id }, { availability: newAvailability })

    return res.json({ newProf })
  }
}
