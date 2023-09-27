import React from 'react'
import LS_Sociel_Icons from '../mini_components/Side_Comps/LS_Sociel_Icons'
import RS_Navigation from '../mini_components/Side_Comps/RS_Navigation'
const Wrapper = (Component, idName, classNames) => function HOC() {
  return (
    <section id={idName} style={{padding:idName=="home"?"0 0":''}} className={`${classNames} min-h-[100vh] h-[100%] w-[100%] flex justify-center items-center px-2 pt-4`}>
      <div className='pr-4 max-[681px]:hidden' style={{zIndex:1}}>
        <LS_Sociel_Icons />
      </div>
      <Component />
      <div className='pl-4 max-[681px]:hidden' style={{zIndex:1}}>
        <RS_Navigation idName={idName} />
      </div>

    </section>
  )
}

export default Wrapper
