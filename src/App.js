import React from "react";
let r ='React'
let rn = 'React Native'
const el =(
  <div>
    Create Web & Mobile Apps <br/>
    with{r} & {rn}
  </div>
)

function App() {
  return (
    <table border="1">
      <tr><th>Product</th><th>Peice</th></tr>
      <tr><td>React</td><td>320</td></tr>
      <tr><td>React Native</td><td>340</td></tr>
    </table>
  )
}

export default App;
