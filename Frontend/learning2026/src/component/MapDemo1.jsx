import React from 'react'

export const MapDemo1 = () => {
    let cars =["Audi", "BMW", "Tata", "Honda", "Porsche", "Lamborghini", "Mahindra"] ;
  return (
    <div>
        {
            cars.map((c)=>{
                return <h1>{c}</h1>
            })
        }
    </div>
  )
}
