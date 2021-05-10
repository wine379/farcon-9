import React, {useState} from 'react'

const ColorSwitch = () => {
  const [darkMenuThemeColor, setDarkMenuThemeColor] = useState(true)

  return (
    <div>
      <div className="side-menu-switch" title="Click to change sidebar color">
                <label className="switch">
                    <input 
                        type="checkbox" 
                        className="light" 
                        onClick={() => setDarkMenuThemeColor(!!!darkMenuThemeColor)}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
    </div>
  )
}

export default ColorSwitch
