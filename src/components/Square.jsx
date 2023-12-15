export const Square = ({ children, isSelected, updateBoard, index }) =>{

    const className = `square ${isSelected ? 'is-selected' : '' }`
    
    function handeClick(){
      updateBoard(index)
    }
  
    return (
      <div onClick={handeClick} className={className}>
        {children}
      </div>
    )
  }

  