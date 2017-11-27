import React from 'react';
import './Button.css';

function Button({ 
  children, 
  primary =  false, 
  magic = false,
  href
}) {
  let className = 'btn'

  if (primary) {
    className += ' btn--primary'
  }

  if (magic) {
    className += ' btn--rainbow'
  }

  const renderLink = !!href // Or href != null
  const Component = renderLink ? 'a' : 'button'

  return (
    <Component href={ href } className={ className }>
      { children }
    </Component>
  )
}


//   if (renderAnchor) {
//     return (
//       <a href={ href } className={ className } >
//         { children }
//       </a>
//     )
//   }

//   return (
//     <button className={ className }>
//       { children }
//     </button>
//   )
// }

export default Button
// module.exports = Button