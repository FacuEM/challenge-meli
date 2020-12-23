import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleTool} from '../redux/actions/tools';
import {Link, useParams} from 'react-router-dom'
import { fetchBugs } from '../redux/actions/bugs';
import {priorityAvg} from '../aux/index';
import {completeBug, activeBug} from '../redux/actions/bugs'
// Material UI
import {TableBody, TableCell, TableRow,  Button} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// Styles
import {ToolStyles} from '../assets/ToolStyles';

const BugCell = () => {
  const dispatch=useDispatch();
  const {id} = useParams();
  const classes = ToolStyles();
  const theme = useTheme();
  // Store
  const tool = useSelector(state => state.tools.tool)
  const isLogged = useSelector(state => state.auth.logged)
  const bugs = useSelector(state => state.bugs.bugs)

  useEffect(() => {
    dispatch(fetchSingleTool(id))
    dispatch(fetchBugs(id))
  },[])

  return (
    
        <TableBody>
          {bugs && bugs.map((b) => (
            <TableRow key={b.id}>
              
              <TableCell align="left">{b.title}</TableCell>
              <TableCell align="left">

                {b.Priorities ? priorityAvg(b.Priorities) : 'Low' }

              </TableCell>
              <TableCell align="left">
                {b.User && b.User.name}
              </TableCell>
              <TableCell align="left">
                {b.completed ? 'Completed' : b.active ? 'Active' : 'Pending'} 

                {(b.User && isLogged.name === b.User.name) ? !b.completed ?
                   <Button  color="secondary" onClick={() => dispatch(completeBug(b.id, b.ToolId))}>Done</Button> 
                   : null : null}
              </TableCell>
              <TableCell align="left">
                <Link to={`/bug/${b.id}`} className={classes.linkDeco}> More Details </Link>
              </TableCell>

              {tool.UserId === isLogged.id ? (!b.active && !b.completed) ? 
                <TableCell align="left">
                  <Button variant="outlined" color="primary"  
                  disabled={bugs.filter(b => b.active).length > 0}
                  onClick={() => dispatch(activeBug(b.id, b.ToolId))}>Start Now</Button>
                </TableCell> : <p>Active right now or completed  </p> : null}

            </TableRow>
          ))}
        </TableBody>


  )
}

export default BugCell