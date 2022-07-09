import React from 'react'
// import ReactPaginate from 'react-paginate'

export default function Pagination({info,pageNumber,setPageNumber}) {
    let next = () => {
        setPageNumber((x) => x + 1)
    }

    let prev = () => {
        if(pageNumber === 1) return;
        setPageNumber((x) => x - 1)
    }
  return ( 
    // <ReactPaginate 
    // className='pagination justify-content-center gap-4 my-4'
    // forcePage={pageNumber === 1? 0 : pageNumber -1}
    // nextLabel="Next"
    // nextClassName='btn btn-primary text-white'
    // previousLabel="Pre"
    // previousClassName='btn btn-primary text-white'
    // pageClassName='page-item'
    // pageLinkClassName='page-link'
    // activeClassName='active'
    // onPageChange={(data) => {
    //     setPageNumber(data.selected)
    // }}
    // pageCount={info}/> 
    <div className='container d-flex justify-content-center gap-5 my-3'>
        <button onClick={prev} className='btn btn-primary'>Anterior</button>
        <button onClick={next} className='btn btn-primary'>Siguiente</button>
    </div>

    )
  
}
