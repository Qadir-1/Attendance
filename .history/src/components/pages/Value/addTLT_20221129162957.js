
import React from 'react'
import HOC from '../../layout/HOC'
import {} from 'react-boot'

const addTLT = () => {
  return (
    <>
          <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Add TLT Value
          </span>
        </div>
      </section>

      <Container>

      </Container>
    </>
  )
}

export default HOC(addTLT)