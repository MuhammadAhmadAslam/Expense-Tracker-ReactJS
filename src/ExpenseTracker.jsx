import React, { useState } from "react";
import "./App.css"

let ExpenseTracker = () => {
  let [budget, setBudgetFunction] = useState('')
  let [productCost, setProductCostFunction] = useState('')
  let [productTitle, setProductTitleFunction] = useState('')
  let [balance, setBalanceFunction] = useState(0)
  let [expense, setExpenseFunction] = useState(0)

  let checkAmount = () =>  {
    if (productCost != '' && productTitle != '' && budget != '') {
        let newBalance = parseInt(budget) - parseInt(productCost);
        setBalanceFunction(newBalance);
        if (newBalance >= 0) {
      console.log(budget ,">>>>>budget");
      console.log(productCost ,">>>>>productCost");
      console.log(productTitle ,">>>>>productTitle");
    
     
      let newExpense = parseInt(productCost) + expense;
      setExpenseFunction(newExpense);
      setProductCostFunction('');
      setProductTitleFunction('');
    } else {
        alert('Budget Out!');
      }
    } else {
      console.log('fill kar');       
    }
  }

  return(
    <>
      <h1 className="mt-52 text-center font-bold text-4xl ">Expense Tracker</h1>
      <main className="flex justify-center items-center flex-wrap">
        <main className="flex justify-around items-center container  pb-5 flex-wrap">
          <div className="flex justify-center items-start flex-col border mt-32 border-blue-800 w-96 px-10 pt-10 pb-10">
            <h1 className="text-4xl mb-5 font-bold">Budget</h1>
            <input type="number" placeholder="Set Budget"  onChange={(event) => setBudgetFunction(event.target.value)} className="bg-white border border-blue-800 outline-blue-800 h-9 rounded-sm w-auto px-2"/>
            <button className="border border-blue-800 px-5 py-2 mt-4">Set Budget</button>
          </div>

          <div className="flex justify-center items-start flex-col border mt-32 border-blue-800 w-96 px-10 pt-10 pb-10">
            <h1 className="text-4xl mb-5 font-bold">Expenses</h1>
            <input type="text" placeholder="Enter Title Of Product" value={productTitle} onChange={(e) => setProductTitleFunction(e.target.value)} className="bg-white border border-blue-800 outline-blue-800 h-9 rounded-sm w-auto px-2"/>
            <input type="number" placeholder="Enter Cost Of Product" value={productCost} onChange={(e) => setProductCostFunction(e.target.value)} className="bg-white mt-5 border border-blue-800 outline-blue-800 h-9 rounded-sm w-auto px-2"/>
            <button className="border border-blue-800 px-5 py-2 mt-4" onClick={checkAmount}>Check Amount</button>
          </div>   
        </main>
      </main>

      <main className="flex justify-center items-center">
        <main className="flex justify-center items-center container  pb-5">
          <div className="flex justify-between items-start border  border-blue-800 w-full px-10 pt-10 pb-10 flex-wrap gap-12">
            <div className="mx-2">
              <h1 className="text-3xl font-bold text-center">Total Budget</h1>
              <p className="text-center text-2xl mt-2">$ {budget}</p>
            </div>
            <div className="mx-2">
              <h1 className="text-3xl font-bold text-center">Expenses</h1>
              <p className="text-center text-2xl mt-2">$ {expense}</p>
            </div>
            <div className="mx-2">
              <h1 className="text-3xl font-bold text-center">Balance</h1>
              <p className="text-center text-2xl mt-2">$ {balance}</p>
            </div>
          </div>
        </main>
      </main>

    </>
  )
}

export default ExpenseTracker;