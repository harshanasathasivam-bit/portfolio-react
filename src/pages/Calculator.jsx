import React, { useState } from 'react'

export default function Calculator(){
  const [value, setValue] = useState('')

  function append(v){ setValue(prev => prev + v) }
  function clearAll(){ setValue('') }
  function deleteLast(){ setValue(v => v.slice(0,-1)) }
  function calculate(){
    try { // eslint-disable-next-line no-eval
      setValue(String(eval(value)))
    } catch { setValue('Error') }
  }

  return (
    <main className="flex items-center justify-center pt-24">
      <div className="calculator bg-[#2e2e3e] rounded-2xl p-6 w-[320px] shadow-lg">
        <input className="display w-full h-14 bg-[#1b1b28] text-white text-right p-3 rounded-md mb-4" value={value} readOnly />
        <div className="grid grid-cols-4 gap-3">
          <button onClick={clearAll} className="bg-red-500 text-white p-3 rounded">C</button>
          <button onClick={deleteLast} className="bg-gray-600 text-white p-3 rounded">DEL</button>
          <button onClick={() => append('%')} className="bg-gray-600 text-white p-3 rounded">%</button>
          <button onClick={() => append('/')} className="bg-gray-600 text-white p-3 rounded">÷</button>

          {[7,8,9].map(n => <button key={n} onClick={() => append(String(n))} className="p-3 bg-gray-700 text-white rounded">{n}</button>)}
          <button onClick={() => append('*')} className="p-3 bg-gray-600 text-white rounded">×</button>

          {[4,5,6].map(n => <button key={n} onClick={() => append(String(n))} className="p-3 bg-gray-700 text-white rounded">{n}</button>)}
          <button onClick={() => append('-')} className="p-3 bg-gray-600 text-white rounded">−</button>

          {[1,2,3].map(n => <button key={n} onClick={() => append(String(n))} className="p-3 bg-gray-700 text-white rounded">{n}</button>)}
          <button onClick={() => append('+')} className="p-3 bg-gray-600 text-white rounded">+</button>

          <button onClick={() => append('0')} className="col-span-2 p-3 bg-gray-700 text-white rounded">0</button>
          <button onClick={() => append('.')} className="p-3 bg-gray-700 text-white rounded">.</button>
          <button onClick={calculate} className="p-3 bg-green-600 text-white rounded">=</button>
        </div>
      </div>
    </main>
  )
}
