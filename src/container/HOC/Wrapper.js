import React from 'react'
import LS_Sociel_Icons from '../mini_components/Side_Comps/LS_Sociel_Icons'
import RS_Navigation from '../mini_components/Side_Comps/RS_Navigation'
const Wrapper = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`${classNames} min-h-[100vh] h-[100%] w-[100%] flex justify-center items-center px-2 pt-4`}>
      <div className='pr-4 max-[820px]:hidden'>
        <LS_Sociel_Icons />
      </div>
      <Component />
      <div className='pl-4 max-[820px]:hidden'>
        <RS_Navigation idName={idName} />
      </div>

    </div>
  )
}

export default Wrapper
