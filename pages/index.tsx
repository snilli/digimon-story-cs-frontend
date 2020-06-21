import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { Stat } from './api/digimon/interface'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

interface Props {
  digimon: Stat[]
}

const SimpleTable: FC<Props> = ({ digimon }: Props) => {
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
          {digimon.map((digi) => (
            <TableRow key={digi.name}>
              <TableCell component="th" scope="row">
                {digi.name}
              </TableCell>

              <TableCell align="right">{digi.no}</TableCell>
              <TableCell align="right">{digi.name}</TableCell>
              <TableCell align="right">{digi.stage}</TableCell>
              <TableCell align="right">{digi.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<Stat[]>(`${process.env.HOST_URL}/api/digimon`)

  return {
    props: {
      digimon: data,
    },
  }
}

export default SimpleTable
