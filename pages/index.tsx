import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const rows = [
  {
    id: '1',
    no: 1,
    name: 'Kuramon',
    icon: 'icon-001-kuramon',
    stage: 'Baby',
    type: 'Free',
    attribute: 'Neutral',
    memory: 2,
    equipSlot: 0,
    hp: 590,
    sp: 77,
    atk: 79,
    def: 69,
    int: 68,
    spd: 95,
    ability: {
      id: '1',
      name: 'Innocent Eyes',
      description: 'Increases ACU and EVA by 1%.',
    },
    img: 'img-001-kuramon',
  },
  {
    id: '2',
    no: 2,
    name: 'Pabumon',
    icon: 'icon-002-pabumon',
    stage: 'Baby',
    type: 'Free',
    attribute: 'Neutral',
    memory: 2,
    equipSlot: 0,
    hp: 950,
    sp: 62,
    atk: 76,
    def: 76,
    int: 69,
    spd: 68,
    ability: {
      id: '1',
      name: 'Innocent Eyes',
      description: 'Increases ACU and EVA by 1%.',
    },
    img: 'img-002-pabumon',
  },
  {
    id: '3',
    no: 3,
    name: 'Punimon',
    icon: 'icon-003-punimon',
    stage: 'Baby',
    type: 'Free',
    attribute: 'Neutral',
    memory: 2,
    equipSlot: 0,
    hp: 870,
    sp: 50,
    atk: 97,
    def: 87,
    int: 50,
    spd: 75,
    ability: {
      id: '1',
      name: 'Innocent Eyes',
      description: 'Increases ACU and EVA by 1%.',
    },
    img: 'img-003-punimon',
  },
]

export default function SimpleTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                <img src={`/icon/${row.icon}.png`} alt="" />
              </TableCell>
              <TableCell align="right">{row.no}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.stage}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
