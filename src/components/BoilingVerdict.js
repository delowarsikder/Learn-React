export default function BoilingVerdict({ celsius = 0 }) {
  
  if (celsius >= 100) {
    return <p>The Water is boil</p>
  }
  return <p>The Water is not boil</p>

}


