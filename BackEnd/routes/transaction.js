const router = require('express').Router()
const { addExpenditure, getExpenditure, deleteExpenditure } = require('../controllers/expenditure')
const { addIncome, getIncomes, deleteIncome } = require("../controllers/income")

router.post('/add-incomes', addIncome)
    .get('/get-incomes/', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expenses', addExpenditure)
    .get('/get-expenses/', getExpenditure)
    .delete('/delete-expense/:id', deleteExpenditure)

module.exports = router