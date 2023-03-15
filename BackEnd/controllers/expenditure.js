const ExpenditureSchema = require("../models/expenditure")


exports.addExpenditure = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const Expenditures = ExpenditureSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        if(!title || !category || !description || !date){
            return res.status(400).json({message: "All fields are required"})
        }
        if(amount <= 0 || amount === 'number'){
            return res.status(400).json({message: "Amount must be a positive number"})
        }
        await Expenditures.save()
        res.status(200).json({message: "Expense Added"})
    }
    catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

exports.deleteExpenditure = async (req, res) => {
    const {id} = req.params;
    ExpenditureSchema.findByIdAndDelete(id)
    .then((Expenditures) => {
        res.status(200).json({message: "Expense Deleted"})
    })
    .catch ((err) => {
        res.status(500).json({message: "server Error"})
    })
}

exports.getExpenditure = async (req, res) => {
    try{
        const Expenditures = await ExpenditureSchema.find().sort({createdAt: -1})
        res.status(200).json(Expenditures)
    }
    catch (error) {
        res.status(500).json({message: "server Error"})

    }
}