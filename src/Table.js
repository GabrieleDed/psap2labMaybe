import React, {Component} from 'react'

const TableHeader = () => {
    return <tbody/>
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.fname}</td>
          <td>{row.lname}</td>
          <td>{row.position}</td>
          <td>{row.department}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  class Table extends Component {
    render() {
      const {characterData} = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
      )
    }
  }

export default Table